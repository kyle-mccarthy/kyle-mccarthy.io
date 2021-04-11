import { FC, Fragment } from "react";
import { Divider, Grid } from "theme-ui";
import PreviewPost from "../components/PreviewPost";
import Header from "./../components/Header";
import staticPosts from "@test/static/posts";
import VerticalSeparator from "@components/common/VerticalSeparator";
import Head from "next/head";
import { PostDTO } from "types";

interface Props {
  posts: PostDTO[];
}

const Home: FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>
          Kyle McCarthy | Full Stack Software Engineer | St. Louis, MO
        </title>
      </Head>

      <Header />
      <Divider sx={{ margin: "50px 0 25px" }} />

      <Grid gap={0} columns={[null, "1fr", "1fr 55px 1fr"]}>
        {posts.map((post, idx) => (
          <Fragment key={post.id}>
            <PreviewPost
              title={post.title}
              summary={post.summary.map((summary, sidx) => (
                <p key={sidx}>{summary}</p>
              ))}
            />
            {idx % 2 == 0 && <VerticalSeparator />}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      posts: staticPosts,
    },
  };
};

export default Home;
