import { FC } from 'react';
import { Container } from 'theme-ui';
import AppBar from './AppBar';

const Layout: FC = ({ children }) => {
  return (
    <Container variant="container">
      <AppBar />
      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
