import NextLink, { LinkProps } from 'next/link';
import { FC } from 'react';
import { Link as StyledLink } from 'theme-ui';

const Link: FC<LinkProps & { sx?: any }> = ({ children, sx = {}, ...rest }) => {
  return (
    <NextLink {...rest} passHref>
      <StyledLink sx={sx}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
