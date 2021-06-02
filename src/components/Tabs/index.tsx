import React, { useState } from "react";
import slugify from "utils/slugfy";
import { Container, TabContainer } from "./styles";


interface TabsProps {
  labels: string[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = useState(slugify(props.labels[0]))

  return (
    <Container>
      <TabContainer>
        <ul>
          {props.labels.map((label) => {
            return (
              <li
                key={label}
                className={slugify(label) == activeTab ? 'active-tab' : ""}
              >
                <a href="#">{label}</a>
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
