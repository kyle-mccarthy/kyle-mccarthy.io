import { FC } from 'react';
import { Text, Link } from 'theme-ui';
import PreviewPost from '../components/PreviewPost';
import { Divider, Grid } from 'theme-ui';

const Home: FC = () => {
  return (
    <div>
      <Grid gap={2} columns={['1fr 25px 1fr']}>
        <PreviewPost />
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            sx={{
              maxWidth: 1,
              backgroundColor: 'muted',
              width: 1,
              flexGrow: 1,
            }}
          />
        </div>
        <PreviewPost />
      </Grid>
    </div>
  );
  // return (
  //   <Layout>
  //     <Head>
  //       <title>
  //         Kyle McCarthy | Full Stack Software Engineer | St. Louis, MO
  //       </title>
  //     </Head>
  //     <div
  //       css={{
  //         display: 'flex',
  //         justifyContent: 'center'
  //       }}
  //     >
  //       <div
  //         css={{
  //           display: 'flex',
  //           flexDirection: 'column',
  //           alignItems: 'center',
  //           width: '100%'
  //         }}
  //       >
  //         <Section title="Blog Post">
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  //           ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //           aliquip ex ea commodo consequat. Duis aute irure dolor in
  //           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //           pariatur.
  //         </Section>
  //       </div>
  //     </div>
  //   </Layout>
  // );
};

// export async function getServerSideProps(_context: any): Promise<any> {
//   return {
//     props: {},
//   };
// }

export default Home;
