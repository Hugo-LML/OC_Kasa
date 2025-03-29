import { FC, SVGProps } from "react";

const ArrowRight: FC<SVGProps<SVGSVGElement>> = ({ color = "#fff", ...props }) => (
  <svg
    width={48}
    height={80}
    viewBox="0 0 48 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.96 72.347 7.08 7.08 39.6-39.6L8.04.227.96 7.307l32.52 32.52L.96 72.347Z"
      fill={color}
    />
  </svg>
);

export default ArrowRight;
