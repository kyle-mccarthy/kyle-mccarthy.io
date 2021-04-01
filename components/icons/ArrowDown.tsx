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
      d="M44 68h12V56H44v12zm24-12V44H56v12h12zm0-24v12h12V32H68zM44 44H32v12h12V44zm-12 0V32H20v12h12z"
      fill="currentColor"
    />
  </svg>
);

export default Icon;
