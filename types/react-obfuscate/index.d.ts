declare module 'react-obfuscate' {
  import React from 'react';

  interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    email?: string;
    headers?: { [key: string]: string };
    tel?: string;
    sms?: string;
    facetime?: string;
    href?: string;
    linkText?: string;
    obfuscate?: boolean;
    obfuscateChildren?: boolean;
    element?: string;
    onClick?: (ev: React.MouseEvent<unknown>) => void;
  }

  const Obfuscate: React.ComponentType<Props>;

  export default Obfuscate;
}
