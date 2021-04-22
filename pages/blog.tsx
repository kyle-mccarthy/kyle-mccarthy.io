import PostsGrid from "@components/common/PostsGrid";
import NoPostsFigure from "@components/figures/NoPostsFigure";
import { NextPage } from "next";
import Head from "next/head";
import { PostDTO } from "types";

interface Props {
  posts: PostDTO[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog | Kyle McCarthy</title>
      </Head>

      {posts.length === 0 && (
        <div sx={{ mt: "60px" }}>
          <NoPostsFigure />
        </div>
      )}

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

export default Blog;
