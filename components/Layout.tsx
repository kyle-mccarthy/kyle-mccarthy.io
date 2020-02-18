import { FC } from 'react';
import { useTheme } from '../types';
import Typography from './Typography';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

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
          <Typography
            css={{
              fontSize: 24,
              letterSpacing: 2.4,
              marginBottom: theme.spacing(4)
            }}
            variant="span"
            align="center"
          >
            KYLE MCCARTHY
          </Typography>
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: theme.spacing(4)
            }}
          >
            <img
              src="/assets/me-headshot.jpg"
              width="200"
              css={{ borderRadius: '50%' }}
              alt="Kyle McCarthy Picture"
            />
          </div>

          <div
            css={{
              marginBottom: theme.spacing(1.5),
              fontSize: 20,
              display: 'flex',
              justifyContent: 'center',
              ['& > *']: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1)
              },
              ['& > a']: {
                color: theme.emphasis(theme.colors.white)
              }
            }}
          >
            <a
              href="https://www.linkedin.com/in/kyle-mccarthy"
              title="https://www.linkedin.com/in/kyle-mccarthy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/kyle-mccarthy"
              title="https://github.com/kyle-mccarthy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a href="#">
              <FaRegEnvelope />
            </a>
          </div>

          <div css={{ marginBottom: theme.spacing(2) }}>
            <Item icon={<MdLocationOn />}>St. Louis, MO</Item>
            {/* <Item icon={<FaLinkedinIn />}>/in/kyle-mccarthy</Item> */}
            {/* <Item icon={<FaGithub />}>@kyle-mccarthy</Item> */}
          </div>
        </div>
        <div css={{ background: theme.elevation[2] }}>
          <div
            css={{
              margin: theme.spacing(0, 10),
              [theme.breakpoints.up('md')]: {
                marginTop: theme.spacing(10)
              }
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
