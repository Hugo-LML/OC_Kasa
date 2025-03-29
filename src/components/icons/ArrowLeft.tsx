import { FC, SVGProps } from "react";

const ArrowLeft: FC<SVGProps<SVGSVGElement>> = ({ color = "#fff", ...props }) => (
  <svg
    width={48}
    height={80}
    viewBox="0 0 48 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M47.04 7.783 39.92.703.36 40.303l39.6 39.6 7.08-7.08-32.52-32.52 32.52-32.52Z"
      fill={color}
    />
  </svg>
);

export default ArrowLeft;
