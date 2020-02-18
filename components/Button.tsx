import { FC } from 'react';
import { CSSObject } from '@emotion/core';
import { useTheme } from '../types';

interface Props {
  color?: 'primary' | 'secondary' | 'default';
}

const Button: FC<Props> = ({ children, color }) => {
  const theme = useTheme();

  const styles: CSSObject = {
    color: theme.emphasis(theme.colors[color]).toString(),
    border: `solid 1px ${theme.alpha(theme.colors[color], 0.5).toString()}`,
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    ['&:hover']: {
      cursor: 'pointer',
      borderColor: theme.alpha(theme.colors[color], 1).toString() as string,
      backgroundColor: theme
        .alpha(theme.colors[color], 0.06)
        .toString() as string
    }
  };

  return (
    <span
      css={{
        display: 'inline-flex',
        padding: theme.spacing(1),
        fontSize: 12,
        ...styles
      }}
    >
      {children}
    </span>
  );
};

Button.defaultProps = {
  color: 'primary'
};

export default Button;
