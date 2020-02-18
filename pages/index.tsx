import { FC } from 'react';
import { useTheme } from '../types';
import Typography from '../components/Typography';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';

const Home: FC = () => {
  const theme = useTheme();
  return (
    <Layout>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          margin: `${theme.spacing(5)}px auto`
        }}
      >
        <div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Section title="example">
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography>
                Ornare quam viverra orci sagittis eu volutpat odio facilisis.
                Facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum. Duis at consectetur lorem donec massa sapien. Mi
                bibendum neque egestas congue quisque egestas diam. Vitae congue
                eu consequat ac. Feugiat in fermentum posuere urna nec
                tincidunt.
              </Typography>

              <div
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: theme.spacing(3)
                }}
              >
                <Button>READ MORE</Button>
              </div>
            </Section>

            <Section title="example">
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography>
                Ornare quam viverra orci sagittis eu volutpat odio facilisis.
                Facilisi etiam dignissim diam quis enim lobortis scelerisque
                fermentum. Duis at consectetur lorem donec massa sapien. Mi
                bibendum neque egestas congue quisque egestas diam. Vitae congue
                eu consequat ac. Feugiat in fermentum posuere urna nec
                tincidunt.
              </Typography>

              <div
                css={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: theme.spacing(3)
                }}
              >
                <Button>READ MORE</Button>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
