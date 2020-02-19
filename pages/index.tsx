import { FC } from 'react';
import { useTheme } from '../types';
import Typography from '../components/Typography';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Head from 'next/head';

const Home: FC = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Head>
        <title>
          Kyle McCarthy | Full Stack Software Engineer | St. Louis, MO
        </title>
      </Head>
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
            <Section title="Work In Progress">
              <Typography>
                This is my personal site that is very much still a work in
                progress. If you would like to contact me, connect with me
                on&nbsp;
                <a href="https://www.linkedin.com/in/kyle-mccarthy">LinkedIn</a>
                !
              </Typography>

              {/* <div */}
              {/*   css={{ */}
              {/*     display: 'flex', */}
              {/*     justifyContent: 'flex-end', */}
              {/*     marginTop: theme.spacing(3) */}
              {/*   }} */}
              {/* > */}
              {/*   <Button>READ MORE</Button> */}
              {/* </div> */}
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
