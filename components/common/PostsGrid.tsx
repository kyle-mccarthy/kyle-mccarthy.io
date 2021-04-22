import VerticalSeparator from "@components/common/VerticalSeparator";
import { FC, Fragment } from "react";
import { Grid } from "theme-ui";
import { PostDTO } from "types";
import PreviewPost from "../PreviewPost";

interface PostsGrid {
  posts: PostDTO[];
}

const PostsGrid: FC<PostsGrid> = ({ posts }) => {
  return (
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
  );
};

export default PostsGrid;
