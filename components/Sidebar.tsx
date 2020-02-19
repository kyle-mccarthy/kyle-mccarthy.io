import { FC } from 'react';
import { useTheme } from '../types';
import Typography from './Typography';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Obfuscate from 'react-obfuscate';

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

const Sidebar: FC = () => {
  const theme = useTheme();

  return (
    <div>
      <Typography
        css={{
          fontSize: 24,
          letterSpacing: 2.4,
          marginBottom: theme.spacing(1)
        }}
        variant="span"
        align="center"
      >
        KYLE MCCARTHY
      </Typography>

      <Typography
        variant="span"
        align="center"
        css={{ fontSize: 12, fontWeight: 300, marginBottom: theme.spacing(3) }}
      >
        FULL STACK SOFTWARE ENGINEER
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

        <Obfuscate email={process.env.CONTACT_EMAIL} title="Email Me">
          <FaRegEnvelope />
        </Obfuscate>
      </div>

      <div css={{ marginBottom: theme.spacing(2) }}>
        <Item icon={<MdLocationOn />}>St. Louis, MO</Item>
        {/* <Item icon={<FaLinkedinIn />}>/in/kyle-mccarthy</Item> */}
        {/* <Item icon={<FaGithub />}>@kyle-mccarthy</Item> */}
      </div>
    </div>
  );
};

export default Sidebar;
