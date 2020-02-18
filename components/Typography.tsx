import { FC } from 'react';
import { useTheme } from '../types';
import { CSSObject } from '@emotion/core';

interface Props extends React.HTMLAttributes<'span'> {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body'
    | 'body2'
    | 'subtitle'
    | 'subtitle2'
    | 'span';
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'default';
}

const variantMap: { [key: string]: React.ReactType } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  body2: 'p',
  subtitle: 'span',
  subtitle2: 'span',
  span: 'span'
};

const Typography: FC<Props> = ({
  variant,
  children,
  align,
  color,
  ...rest
}) => {
  const theme = useTheme();

  const Component: React.ReactType = variantMap[variant] || 'span';
  const variantStyles = theme.typography[variant] || {};
  const styles: CSSObject = {};

  if (color && color !== 'default') {
    styles.color = theme.emphasis(theme.colors[color]);
  }

  return (
    <Component
      css={{
        textAlign: align,
        ...variantStyles,
        ...styles
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

Typography.defaultProps = {
  variant: 'body',
  color: 'default'
};

export default Typography;
