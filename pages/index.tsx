import PostsGrid from "@components/common/PostsGrid";
import { NextPage } from "next";
import Head from "next/head";
import { Divider } from "theme-ui";
import { PostDTO } from "types";
import Header from "./../components/Header";

interface Props {
  posts: PostDTO[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>
          Kyle McCarthy | Full Stack Software Engineer | St. Louis, MO
        </title>
      </Head>

      <Header />

      <Divider sx={{ margin: "50px 0 25px" }} />

      <PostsGrid posts={posts} />
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      posts: [],
    },
  };
};

export default Home;
