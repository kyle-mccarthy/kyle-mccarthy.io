// Pixel arrow by Ján Slobodník from the Noun Project
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
      d="M68 56V44H56v12h12zM56 32H44v12h12V32zm-24 0h12V20H32v12zm12 24v12h12V56H44zm0 12H32v12h12V68z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
