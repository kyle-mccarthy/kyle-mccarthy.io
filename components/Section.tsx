import { FC } from 'react';
import { useTheme } from '../types';
import Typography from '../components/Typography';

interface Props {
  title: string;
}

const Section: FC<Props> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        borderTop: `solid 1px ${theme.divider}`,
        marginBottom: theme.spacing(3)
      }}
    >
      <div
        css={{ marginTop: theme.spacing(1), marginBottom: theme.spacing(2) }}
      >
        <Typography variant="subtitle2">{title}</Typography>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;

