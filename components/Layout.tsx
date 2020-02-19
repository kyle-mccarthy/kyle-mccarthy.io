import { FC } from 'react';
import { useTheme } from '../types';
import Emblem from '../components/Emblem';
import Sidebar from './Sidebar';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactElement;
}

const Item: FC<Props> = ({ icon, children, ...rest }) => {
  const theme = useTheme();
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        lineHeight: 1
      }}
      {...rest}
    >
      <span
        css={{ fontSize: 18, display: 'flex', marginRight: theme.spacing(1) }}
      >
        {icon}
      </span>
      <span css={{ fontSize: 12, lineHeight: 1 }}>{children}</span>
    </div>
  );
};

const Layout: FC = ({ children }) => {
  const theme = useTheme();
  return (
    <div
      css={{
        height: '100vh',
        width: theme.breakpoints.values.lg,
        margin: '0 auto'
      }}
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          height: '100%',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        <div
          css={{
            background: theme.elevation[1],
            padding: theme.spacing(6, 4),
            [theme.breakpoints.up('md')]: {
              order: 2
            }
          }}
        >
          <Sidebar />
        </div>
        <div
          css={{
            background: theme.elevation[2],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div
            css={{
              margin: theme.spacing(0, 10),
              [theme.breakpoints.up('md')]: {
                margin: theme.spacing(7, 5, 0)
              }
            }}
          >
            {children}
          </div>
          <div css={{ display: 'flex', justifyContent: 'center' }}>
            <Emblem width={75} color="#000000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
