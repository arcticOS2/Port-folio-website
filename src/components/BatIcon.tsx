import React from "react";

interface BatIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const BatIcon: React.FC<BatIconProps> = ({ size = 24, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 32"
    width={size}
    height={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M32 4c-2.4 2.7-4.9 4-7.4 4-2 0-3.9-.8-5.6-1.5C16.3 8.7 14.5 11 12 11c-1.6 0-3-.7-4-1.7.6 2.9 1.6 6.4 3.5 8.6 2.6 3 6.1 3.6 8.5 3.6 3 0 5.4-.8 7-1.6l5 7.1 5-7.1c1.6.8 4 1.6 7 1.6 2.4 0 5.9-.6 8.5-3.6 1.9-2.2 2.9-5.7 3.5-8.6-1 .9-2.4 1.7-4 1.7-2.5 0-4.3-2.3-7-4.5-1.7.7-3.6 1.5-5.6 1.5-2.5 0-5-1.3-7.4-4zm0 7.5c1.9 0 3.5 1.6 3.5 3.5S33.9 18.5 32 18.5 28.5 16.9 28.5 15 30.1 11.5 32 11.5z"/>
  </svg>
);

export default BatIcon;
