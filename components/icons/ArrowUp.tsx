// Pixel arrow by Ján Slobodník from the Noun Project
// Source: https://thenounproject.com/search/?q=arrow+pixel&i=801787
// License: Creative Commons CC-BY
// Derivative Work: This SVG is a derivative work, a rotation was applied to the
// original SVG to produce the variant.

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
      d="M56 32H44v12h12V32zM32 44v12h12V44H32zm0 24V56H20v12h12zm24-12h12V44H56v12zm12 0v12h12V56H68z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
