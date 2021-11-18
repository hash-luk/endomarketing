import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Grid } from "@mui/material";
import { Container } from "./style/styles";
import { Header } from "./components/Header";
import { DisplayScreen } from "./components/Display";
import { Endomarketing } from "./components/Endomarketing";
import { Advertisement } from "./components/Advertisement";

function App() {
  return (
    <Container>
      <Header />
      <div id="main">
        <DisplayScreen />
        <div id="extra_content">
          <Endomarketing />
          <Advertisement />
        </div>
      </div>
      <GlobalStyle />
    </Container>
  );
}

export default App;
