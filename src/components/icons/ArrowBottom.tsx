import { FC, SVGProps } from "react";

const ArrowBottom: FC<SVGProps<SVGSVGElement>> = ({ color = "#fff", style, ...props }) => (
  <svg
    width={32}
    height={33}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transition: "transform 0.15s ease-in-out", ...style }}
    {...props}
  >
    <path
      d="M17.21 21.852c-.67.669-1.756.669-2.426 0L4.502 11.569a1.716 1.716 0 0 1 2.426-2.426L16 18.215l9.072-9.066a1.716 1.716 0 0 1 2.426 2.426L17.216 21.857l-.006-.005Z"
      fill={color}
    />
  </svg>
);

export default ArrowBottom;
