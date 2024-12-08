declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}

declare module '*.png' {
  const value: string;

  export default value;
}

declare module '*.jpe?g' {
  const value: string;

  export default value;
}
