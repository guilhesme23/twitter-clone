import React, { useState } from "react";
import { Link } from "react-router-dom";
import slugify from "utils/slugfy";
import { Container, TabContainer } from "./styles";


interface TabsProps {
  labels: string[];
  baseQuery?: string;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(slugify(props.labels[0]))

  const handleClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setActiveTab(slugify(label))
    console.log(activeTab)
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
      <div>
        <h1>Content</h1>
      </div>
    </Container>
  );
};

export default Tabs;
