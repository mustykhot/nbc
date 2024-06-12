import { ForwardIcon } from "Components/icons/ForwardIcon";
import Link from "next/link";

const ForwardArrowLink = ({ color = "#009444", to, text, type }) => {
  return (
    <Link href={to}>
      <a
        className={`learn_link text-[${color}]`}
        target={type ? "_blank" : "_self"}
        style={{ color: color }}
      >
        {text} <ForwardIcon stroke={color} />
      </a>
    </Link>
  );
};

export default ForwardArrowLink;
