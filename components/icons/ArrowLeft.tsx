// Arrow by Ján Slobodník from the Noun Project
// Source: https://thenounproject.com/search/?q=arrow+pixel&i=801787
// License: Creative Commons CC-BY
// Modifications: This file contains a modified version of the original. The
// original version was transformed into JSX and optimized.

import { FC, SVGProps } from 'react';

const Icon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M32 44v12h12V44H32zm12 24h12V56H44v12zm24 0H56v12h12V68zM56 44V32H44v12h12zm0-12h12V20H56v12z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
