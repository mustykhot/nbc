import { LogoIcon } from "../icons/LogoIcon";
import Link from "next/link";
import { TwitterFooterIcon } from "Components/icons/TwitterFooterIcon";
import { IgFooterIcon } from "Components/icons/IgFooterIcon";
import { FbFooterIcon } from "Components/icons/FbFooterIcon";
import { LinkedInFooterIcon } from "Components/icons/LinkedinFooterIcon";

const linkList = [
  {
    title: "Company",
    links: [
      { name: "About Us", to: "https://getbumpa.com/explore/about" },
      { name: "Pricing", to: "https://getbumpa.com/explore/pricing" },
      { name: "Careers", to: "https://getbumpa.com/explore/career" },
    ],
  },
  {
    title: "Resources",
    links: [
      // { name: "Bumpa Learn", to: "/learn" },
      { name: "Blog", to: "https://getbumpa.com/explore/blog" },
      { name: "FAQs", to: "https://getbumpa.com/explore/faq" },
      { name: "Support", to: "https://getbumpa.com/explore/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms Of services", to: "https://getbumpa.com/explore/tnc" },
      { name: "Privacy Policy", to: "https://getbumpa.com/explore/privacy" },
    ],
  },
];
const LinkSection = () => {
  return (
    <div className="pd_link_section">
      <div className="bumpa_description">
        <LogoIcon />
        <p className="bumpa_description_text">
          The 360 business management experience for small businesses across
          Africa
        </p>
        <div className="icon_flex">
          <Link href="https://twitter.com/getBumpa?t=k07W5NGdumx2VVd-AUpzSw&s=09">
            <a target={"_blank"}>
              <TwitterFooterIcon className={"special"} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/getbumpa/?igshid=YmMyMTA2M2Y">
            <a target={"_blank"}>
              <IgFooterIcon />
            </a>
          </Link>
          <Link href="https://www.facebook.com/getbumpa">
            <a target={"_blank"}>
              <FbFooterIcon />
            </a>
          </Link>{" "}
          <Link href="https://www.linkedin.com/company/getbumpa">
            <a target={"_blank"}>
              <LinkedInFooterIcon />
            </a>
          </Link>
        </div>
        <p> {new Date().getFullYear()} Salescabal Inc. All Rights Reserved.</p>
      </div>
      <>
        {linkList.map((item, i) => (
          <div className="fast_links" key={i}>
            <p className="title">{item.title}</p>
            <div className="links">
              {item.links.map((link, i) => (
                <Link key={i} href={link.to}>
                  <a target={"_blank"} className="footerlink">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default LinkSection;
