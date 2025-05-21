declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  export type Icon = ComponentType<IconProps>;

  const icons: { [key: string]: Icon };
  export default icons;
}

declare module 'lucide-react/dist/esm/icons/*' {
  import { ComponentType, SVGProps } from 'react';
  
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  
  const Icon: ComponentType<IconProps>;
  export default Icon;
} 