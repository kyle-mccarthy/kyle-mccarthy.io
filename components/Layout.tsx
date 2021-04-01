import { FC } from 'react';
import { Container, Divider } from 'theme-ui';
import Sidebar from './Sidebar';
import { colors } from '../theme';

//              `3px 0px 0px #E26D3C, 0px -3px 0 #C7AD48, 0px 3px 0px #5498D5`,

const Layout: FC = ({ children }) => {
  return (
    <Container variant="container">
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '75px 0 0',
        }}
      >
        <div
          sx={{
            fontSize: 120,
            lineHeight: 0.9,
            textShadow: (theme) =>
              `4px 4px 0px ${colors.background.lighten(
                25
              )}, 8px 8px 0px ${colors.background.lighten(15)} `,
            // `3px 0px 0px #E26D3C, 0px -3px 0 #C7AD48, 0px 3px 0px #5498D5`,
            fontFamily: 'Special3',
            textTransform: 'uppercase',
            //fontVariationSettings: '"wght" 900, "wdth" 104',
          }}
        >
          Kyle
          <br />
          McCarthy
        </div>
      </div>

      <Divider sx={{ margin: '50px 0 25px' }} />

      <Container>{children}</Container>
    </Container>
  );
};

export default Layout;
