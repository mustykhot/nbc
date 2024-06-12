import HeaderSection from "Components/HeaderSection";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const FourthSection = () => {
  const investors = [
    {
      url: "/images/base10.png",
      width: 136,
      height: 37,
    },
    {
      url: "/images/pnp.png",
      width: 188,
      height: 50,
    },
    {
      url: "/images/shl.png",
      width: 154,
      height: 30,
    },
    {
      url: "/images/firstcheck.png",
      width: 188,
      height: 49,
    },
    {
      url: "/images/magic.png",
      width: 150,
      height: 63,
    },
    {
      url: "/images/fastforward.png",
      width: 263,
      height: 36,
    },
    {
      url: "/images/dfs.png",
      width: 118,
      height: 66,
    },
    {
      url: "/images/club.png",
      width: 154,
      height: 30,
    },
    {
      url: "/images/e62.png",
      width: 109,
      height: 67,
    },
  ];
  return (
    <section className="pd_fourth_section">
      <div className="partner_container">
        <p className="title_text">Our Partners</p>
        <div className="partner_flex">
          <Image
            width={229}
            height={42}
            src="/images/black/loopify.png"
            alt="chipper"
          />
          <Image
            width={249}
            height={42}
            src="/images/black/stack.png"
            alt="stack"
          />

          <Image
            width={192}
            height={42}
            src="/images/black/topship.png"
            alt="topship"
          />
        </div>
      </div>
      <div className="mobile_partner_flex">
        <Image
          width={96}
          height={22}
          src="/images/black/loopify.png"
          alt="google"
        />
        <Image
          width={134}
          height={22}
          src="/images/black/stack.png"
          alt="pay"
        />
        <Image
          width={134}
          height={22}
          src="/images/black/topship.png"
          alt="pay"
        />
      </div>
    </section>
  );
};

export default FourthSection;
