import Image from "next/image";

const EmptyResponse = ({
  image = "/images/emptyBox.svg",
  message,
  btn,
  ...props
}) => {
  return (
    <div {...props} className="empty-response-pg">
      <Image src={image} width={162} height={168} alt="no result" />
      <p>{message}</p>
      {btn && btn}
    </div>
  );
};

export default EmptyResponse;
