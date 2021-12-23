import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles";
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default Homepage;
