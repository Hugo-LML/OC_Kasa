import { FC, SVGProps } from "react";

const Star: FC<SVGProps<SVGSVGElement>> = ({ color = "#E3E3E3", ...props }) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.721.844a1.502 1.502 0 0 0-2.7 0l-3.013 6.2-6.73.994A1.497 1.497 0 0 0 .072 9.055a1.508 1.508 0 0 0 .37 1.533l4.884 4.832-1.153 6.83a1.504 1.504 0 0 0 2.189 1.574l6.013-3.21 6.013 3.21a1.5 1.5 0 0 0 1.585-.108c.464-.337.698-.905.604-1.467l-1.157-6.829 4.883-4.832a1.498 1.498 0 0 0-.834-2.55l-6.735-.993L13.72.844Z"
      fill={color}
    />
  </svg>
);

export default Star;
