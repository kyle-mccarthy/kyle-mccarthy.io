import React, { FC, ReactNode } from 'react';
import { Paragraph, Text } from 'theme-ui';
import Link from './common/Link';
import ArrowRight from './icons/ArrowRight';
import { colors } from '../theme';
// test

interface Props {
  title: string | ReactNode;
  summary: string | ReactNode;
}

const PreviewPost: FC<Props> = ({ title, summary }) => {
  return (
    <article
      sx={{
        variant: 'post.container',
      }}
    >
      <Text variant="post.title">{title}</Text>
      <Text variant="post.meta">03.29.21 :: programming, rust</Text>
      <Text variant="post.summary">{summary} </Text>
      <div sx={{ variant: 'post.link' }}>
        <Link href="/">
          Read More <ArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default PreviewPost;
