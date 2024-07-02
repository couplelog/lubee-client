declare module "*.jpg" {
  const path: string;
  path;
  export default path;
}

declare module "*.png" {
  const path: string;
  path;
  export default path;
}

// declare module '*.svg' {
//   import React = require('react');
//   export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;exportconstReactComponent
//   const src: string;constsrc
//   export default src;
// }

declare module "*.svg?react" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  constReactComponent;
  const src: string;
  src;
  export default src;
}
