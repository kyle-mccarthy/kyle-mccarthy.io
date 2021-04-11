import { FC } from 'react';
import Link from 'next/link';

import Logo from './icons/Logo';

interface NavItemProps {
  href: string;
}

const NavItem: FC<NavItemProps> = ({ href, children }) => {
  return (
    <li
      sx={{
        borderRight: 'solid 1px',
        borderRightColor: 'muted',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        lineHeight: 1,
        pt: 3,
        pb: 3,
        minWidth: 120,
        ['&:last-child']: {
          borderRight: 'none',
        },
      }}
    >
      <Link href={href}>
        <a sx={{ fontFamily: 'heading' }}>{children}</a>
      </Link>
    </li>
  );
};

const AppBar: FC = () => {
  return (
    <div
      sx={{
        display: 'flex',
        borderBottom: 'solid 1px',
        borderBottomColor: 'muted',
        marginTop: '20px',
        marginBottom: '25px',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Link href="/">
          <a sx={{ display: 'flex', marginBottom: '10px' }}>
            <Logo />
          </a>
        </Link>
      </div>

      <ul
        sx={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        <NavItem href="/">About</NavItem>
        <NavItem href="/">Blog</NavItem>
      </ul>
    </div>
  );
};

export default AppBar;
