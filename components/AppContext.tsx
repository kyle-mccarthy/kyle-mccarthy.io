import { FC } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './../theme';

const AppContext: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ display: 'flex', width: '100%', height: '100vh' }}>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default AppContext;
