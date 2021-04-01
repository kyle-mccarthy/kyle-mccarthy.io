import NextLink, { LinkProps } from 'next/link';
import { FC } from 'react';
import { Link as StyledLink } from 'theme-ui';

const Link: FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
