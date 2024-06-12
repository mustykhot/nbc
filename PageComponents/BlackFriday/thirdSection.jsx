import Image from "next/image";
import { useRouter } from "next/router";
import SignUpBtn from "./signupBtn";

const cardList = [
  {
    title: "Enjoy visibility of 1 Million+ potential buyers",
    position: "center",
    id: 1,
    description:
      "Stand a chance to sell to over 1 million potential buyers through the Bumpa Deal's Page",
  },
  {
    title: "Discounted deliveries for your customers",
    position: "left",
    id: 2,
    description:
      "Get a flat rate of 1000 for all deliveries in Lagos and a 30% discount on all deliveries outside Lagos during Black Friday.",
  },
  {
    title: "Run sales easily with Bumpa",
    position: "center",
    id: 3,
    description:
      "Sell with a business website, create discounts and coupons in 60 seconds on the Bumpa app. ",
  },
];

const ThirdSection = () => {
  const router = useRouter();
  return (
    <div id="expect" className="pd_third_section">
      <p className="heading">WHAT TO EXPECT</p>
      <div className="card_section">
        {cardList.map((item) => (
          <div className={`single_card ${item.position}`} key={item.id}>
            <div className="white_card">
              <p className="title_text">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="banner_container">
        <Image src={"/images/black/movement.png"} width={353} height={353} />
        <div className="text_box">
          <p className="movement">MOVEMENT!!!</p>
          <p className="title_text">
            Get your free Black <br />
            Friday flyer here
          </p>
          <p className="title_text mobile">
            Get your free Black Friday flyer here{" "}
          </p>
          <SignUpBtn
            handleClick={() => {
              if (typeof window !== "undefined") {
                window.open("https://getdp.co/BBF22", "_blank");
              }
            }}
            text={"Join the Movement"}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
