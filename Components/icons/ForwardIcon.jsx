import { IconSvg } from "./IconSvg";

export const ForwardIcon = ({ className, stroke }) => (
  <IconSvg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill={"none"}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <title>Forward Arrow</title>
    <path
      d="M12.172 6.99968L6.808 1.63568L8.222 0.22168L16 7.99968L8.222 15.7777L6.808 14.3637L12.172 8.99968H0V6.99968H12.172Z"
      fill={stroke || "#009444"}
    />
  </IconSvg>
);
