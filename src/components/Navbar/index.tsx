import React from "react";
import { Link } from "react-router-dom";

import { BackIcon, Container, NavContent } from "./styles";

interface Props {
    backIcon?: boolean,
    title?: string,
    sub?: string,
    backLocation?: string
}

const Navbar: React.FC<Props> = (props) => {
  const renderBackButton = () => {
    if(props.backIcon && props.backLocation) {
      return (
        <button>
          <Link to={props.backLocation}>
            <BackIcon />
          </Link>
        </button>
      )
    }
  }

  return (
    <Container>
      {renderBackButton()}
      <NavContent>
          <strong>{props.title}</strong>
          <span>{props.sub}</span>
      </NavContent>
    </Container>
  );
};

export default Navbar;
