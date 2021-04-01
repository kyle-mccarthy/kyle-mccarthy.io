import React, { FC } from 'react';
import { Paragraph, Text } from 'theme-ui';
import Link from './common/Link';
import ArrowRight from './icons/ArrowRight';
import { colors } from '../theme';
// test

interface Props {}

const PreviewPost: FC = () => {
  return (
    <article
      sx={{
        variant: 'post.container',
      }}
    >
      <Text variant="post.title">No speeches. Internet.</Text>
      <Text variant="post.meta">03.29.21 :: programming, rust</Text>
      <Text variant="post.summary">
        He has enough money to last forever. He knows he needs to keep moving.
        You'll never find him. He's out of the picture. I saved his life, I owed
        him that, but now he and I are done. Which is exactly what you wanted,
        isn't it. You've always struck me as a very pragmatic man so if I may, I
        would like to review options with you. Of which, it seems to me you have
        two.
      </Text>
      <div sx={{ variant: 'post.link' }}>
        <Link href="/">
          Read More <ArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default PreviewPost;
