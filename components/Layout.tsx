import { FC } from "react";
import { Container } from "theme-ui";
import AppBar from "./AppBar";
import Background from "./Background";

const Layout: FC = ({ children }) => {
  return (
    <Container variant="container">
      <Background />
      <AppBar />
      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
