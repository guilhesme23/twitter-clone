import React, { useState } from "react";
import { Link } from "react-router-dom";
import slugify from "utils/slugfy";
import { Container, LabelContent, TabContainer, TabContent } from "./styles";


interface TabsProps {
  labels: string[];
  baseQuery?: string;
  children: React.ReactElement<LabelProps>[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(slugify(props.labels[0]))

  const handleClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setActiveTab(slugify(label))
  }

  return (
    <Container>
      <TabContainer>
        <ul>
          {props.labels.map((label) => {
            return (
              <li
                key={label}
                className={slugify(label) === activeTab ? 'active-tab' : ""}
                onClick={e => handleClick(e, label)}
              >
                <Link to={`/${props.baseQuery ? `${props.baseQuery}/` : ''}${slugify(label)}`}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </TabContainer>
      <TabContent>
        {props.children.map((child: React.ReactElement<LabelProps>) => {
          if (child.props.label === activeTab) {
            return child.props.children
          }
        })}
      </TabContent>
    </Container>
  );
};

export default Tabs;

interface LabelProps {
  children: React.ReactNode,
  label: string
}

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <LabelContent>
      {props.children}
    </LabelContent>
  );
}
