import Navbar from "components/Navbar";
import React from "react";
import { Container } from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <Navbar backIcon backLocation="/" title="Guiherme" sub="747 tweets" />

      
    </Container>
  );
};

export default Profile;
