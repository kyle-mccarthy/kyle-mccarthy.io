import { FC } from "react";
import { Divider, Grid } from "theme-ui";
import PreviewPost from "../components/PreviewPost";
import Header from "./../components/Header";

const Separator: FC = () => (
  <div
    sx={{
      alignItems: "center",
      flexDirection: "column",
      flexBasis: "55px",
      flexShrink: 0,
      display: [null, "none", "flex"],
    }}
  >
    <div
      sx={{
        maxWidth: 1,
        backgroundColor: "muted",
        width: 1,
        flexGrow: 1,
      }}
    />
  </div>
);

const Column: FC = ({ children }) => {
  return (
    <div
      sx={{
        width: [null, "100%", "50%"],
      }}
    >
      {children}
    </div>
  );
};

const Home: FC = () => {
  return (
    <div>
      <Header />
      <Divider sx={{ margin: "50px 0 25px" }} />

      <Grid gap={0} columns={[null, "1fr", "1fr 55px 1fr"]}>
        <PreviewPost
          title="No speeches. Internet."
          summary={
            <p>
              He has enough money to last forever. He knows he needs to keep
              moving. You'll never find him. He's out of the picture. I saved
              his life, I owed him that, but now he and I are done. Which is
              exactly what you wanted, isn't it. You've always struck me as a
              very pragmatic man so if I may, I would like to review options
              with you. Of which, it seems to me you have two.
            </p>
          }
        />
        <Separator />
        <PreviewPost
          title="I am the one who knocks."
          summary={
            <>
              <p>
                Who are you talking to right now? Who is it you think you see?
                Do you know how much I make a year?{" "}
              </p>
              <p>
                A business big enough that it could be listed on the NASDAQ goes
                belly up. Disappears! It ceases to exist without me. No, you
                clearly don't know who you're talking to, so let me clue you in.
                I am not in danger, Skyler. I AM the danger! A guy opens his
                door and gets shot and you think that of me? No. I am the one
                who knocks!
              </p>
            </>
          }
        />

        <PreviewPost
          title="Don't you see how great this is?"
          summary={
            <>
              <p>
                The game has changed. The word is out. And you... are a killer.
                Apparently it's all over town. Somebody crossed you, you got
                angry, you crushed their skull with an ATM machine.{" "}
              </p>
            </>
          }
        />

        <Separator />

        <PreviewPost
          title="No speeches. Internet."
          summary={
            <p>
              He has enough money to last forever. He knows he needs to keep
              moving. You'll never find him. He's out of the picture. I saved
              his life, I owed him that, but now he and I are done. Which is
              exactly what you wanted, isn't it. You've always struck me as a
              very pragmatic man so if I may, I would like to review options
              with you. Of which, it seems to me you have two.
            </p>
          }
        />
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
