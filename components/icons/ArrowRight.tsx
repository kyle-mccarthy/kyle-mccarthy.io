import { FC, SVGProps } from 'react';
import { Themed } from 'theme-ui';

const Icon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 8 10"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ variant: 'svg.icon' }}
    {...props}
  >
    <path
      d="M7.493 6V4H5.029v2h2.464zM5.029 2H2.565v2h2.464V2zM.1 2h2.465V0H.1v2zm2.465 4v2h2.464V6H2.565zm0 2H.1v2h2.465V8z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
