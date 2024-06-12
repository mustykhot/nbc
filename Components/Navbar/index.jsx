import { DownArrowIcon } from "../icons/DownArrowIcon";
import { LogoIcon } from "../icons/LogoIcon";
import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DropDownWrapper from "../DropDownWrapper";
import { StartupIcon } from "../icons/StartupIcon";
import { useState } from "react";
import MobileNav from "./mobileNav";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { MenuAboutIcon } from "Components/icons/MenuAboutIcon";
import { MenuBlogIcon } from "Components/icons/MenuBlogIcon";
import { MenuFaqIcon } from "Components/icons/MenuFaqIcon";
import { MenuCareerIcon } from "Components/icons/MenuCareerIcon";
import { MenuPriceIcon } from "Components/icons/MenuPriceIcon";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { client } from "utils/utils";
import Image from "next/image";
import GetStartedBtn from "Components/GetStartedBtn";
import { ShopIcon } from "Components/icons/ShopIcon";

export const learnList = [
  // {
  //   title: "Bumpa Learn",
  //   description: "Get help and tips for a better experience with Bumpa.",
  //   link: "/learn",
  //   color: "green",
  //   icon: <MenuAboutIcon />,
  //   id: 1,
  // },
  {
    title: "Blog",
    description: "Learn more about bumpa and your business",
    link: "/explore/blog",
    color: "yellow",
    icon: <MenuBlogIcon />,
    id: 1,
  },
  {
    title: "FAQs",
    description: "Find answers to some of our frequently asked questions.",
    link: "/explore/faq",
    color: "blue",
    icon: <MenuFaqIcon />,
    id: 1,
  },
];
export const companyList = [
  {
    title: "About us",
    description: "Learn why over 50,000 businesses choose Bumpa.",
    link: "/explore/about",
    icon: <MenuAboutIcon />,
    color: "green",
    id: 1,
  },
  {
    title: "Careers",
    description: "Build the future of e-commerce with us.",
    link: "/explore/career",
    color: "yellow",
    icon: <MenuCareerIcon />,
    id: 2,
  },
  // {
  //   title: "Pricing",
  //   description: "Affordable plans and offerings for SMEs.",
  //   link: "/pricing",
  //   color: "blue",
  //   icon: <MenuPriceIcon />,
  //   id: 3,
  // },
];

const SingleFeature = ({ item, index }) => {
  const router = useRouter();

  return (
    <div
      // initial={{ opacity: 0, y: 10 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: index * 0.3 }}
      className=" single_feature"
      onClick={() => {
        router.push(item.link);
      }}
    >
      <div className={`cover_startup ${item.color}`}>
        {item.type === "image" ? (
          <Image src={"https:" + item.icon} width={24} height={24} alt="icon" />
        ) : (
          item.icon
        )}
      </div>
      <div className="text_box">
        <p className="title">{item.title}</p>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
};

const Navbar = ({ nospace = false, isRelative = false }) => {
  const [openNav, setOpenNav] = useState(false);
  const [featureList, setFeatureList] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchFeature = async () => {
      const res = await client.getEntries({ content_type: "feature" });
      const newList = res.items.map((item) => {
        const { title, description, slug, iconColor, icon } = item.fields;
        return {
          title: title,
          description: description,
          link: `/explore/feature/${slug}`,
          id: item.sys.id,
          color: iconColor,
          type: "image",
          icon: icon.fields.file.url,
        };
      });
      setFeatureList(newList);
    };
    fetchFeature();
  }, []);
  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", updatePosition);
  }

  return (
    <>
      <div
        className={`nav_wrapper ${isRelative ? "relative_box" : ""}  ${
          nospace ? "nospace" : ""
        }  ${scrollPosition > 0 ? "d_fixed" : ""}`}
      >
        <div className={`pd_navbar`}>
          <Link href="/">
            <a>
              <LogoIcon className=" logo_icon " />
            </a>
          </Link>

          <div className="nav_list">
            <div className="drop list_item">
              <DropDownWrapper
                className="more-actions"
                action={<Button endIcon={<DownArrowIcon />}>Features</Button>}
              >
                <div className="feature">
                  {featureList.length ? (
                    featureList.map((item, i) => (
                      <SingleFeature index={i} key={i} item={item} />
                    ))
                  ) : (
                    <>
                      <Skeleton
                        className="desk_skeleton"
                        variant="rounded"
                        width={210}
                        height={100}
                      />
                    </>
                  )}
                </div>
              </DropDownWrapper>
            </div>
            <div className="drop list_item">
              <DropDownWrapper
                className="more-actions"
                action={<Button endIcon={<DownArrowIcon />}>Company</Button>}
              >
                <div className="feature">
                  {companyList.map((item, i) => (
                    <SingleFeature index={i} key={item.id} item={item} />
                  ))}
                </div>
              </DropDownWrapper>
            </div>
            <Link href={"/explore/community"}>
              <a className="list_item">Community</a>
            </Link>
            <Link href={"/explore/pricing"}>
              <a className="list_item">Pricing</a>
            </Link>
            <div className="drop list_item">
              <DropDownWrapper
                className="more-actions right"
                action={<Button endIcon={<DownArrowIcon />}>Learn</Button>}
              >
                <div className="feature">
                  {learnList.map((item, i) => (
                    <SingleFeature key={i} index={i} item={item} />
                  ))}
                </div>
              </DropDownWrapper>
            </div>
            <Link href={"/explore/blackfriday"}>
              <a target={"_blank"} className="list_item black_firday">
                <ShopIcon />
                Black Friday
              </a>
            </Link>
            {/* <Link href={"https://getbumpa.com/meta/"}>
            <a target={"_blank"} className="list_item">
              Sell on Instagram
            </a>
          </Link> */}
          </div>
          <div className="btn_box">
            <Button
              variant="outlined"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.open("https://getbumpa.com/login", "_blank");
                }
              }}
            >
              Login
            </Button>
            <GetStartedBtn className="signup_btn" text={"Get Started"} />

            {/* <Button
            variant="contained"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open("https://getbumpa.com/register", "_blank");
              }
            }}
            className="signup_btn "
          >
            Sign Up
          </Button> */}
          </div>

          <IconButton
            onClick={() => setOpenNav(true)}
            className=" hamburger_btn  "
          >
            <MenuIcon />
          </IconButton>
          <AnimatePresence>
            {openNav && (
              <MobileNav featureList={featureList} setOpenNav={setOpenNav} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
