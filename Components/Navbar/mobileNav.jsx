import { LogoIcon } from "../icons/LogoIcon";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { LeftArrowIcon } from "../icons/LeftArrowIcon";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useState } from "react";
import { StartupIcon } from "Components/icons/StartupIcon";
import { AnimatePresence, motion } from "framer-motion";
import { companyList, learnList } from ".";
import { useRouter } from "next/router";
import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import GetStartedBtn from "Components/GetStartedBtn";

const SingleFeature = ({
  title,
  description,
  color,
  link,
  type,
  icon,
  setOpenNav,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        setOpenNav && setOpenNav(false);
        router.push(link);
      }}
      className={`single_feature_mobile `}
    >
      <div className={`cover_startup ${color}`}>
        {type === "image" ? (
          <Image src={"https:" + icon} width={24} height={24} alt="icon" />
        ) : (
          icon
        )}
      </div>
      <div className="">
        <p className=" title">{title}</p>
        <p className=" description">{description}</p>
      </div>
    </div>
  );
};

const ExtendMenu = ({ menu, menulist, setOpenNav }) => {
  const [openExtended, setOpenExtended] = useState(false);

  return (
    <div className="list_item_mobile drop">
      <div
        className={`list_item_top_flex`}
        onClick={() => setOpenExtended(!openExtended)}
      >
        <button>{menu}</button>
        <LeftArrowIcon className={`arrowsvg ${openExtended ? "open" : ""}`} />
      </div>
      <AnimatePresence>
        {openExtended && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "just" }}
            className="feature_mobile_box"
          >
            {menulist.length
              ? menulist.map((item, i) => (
                  <SingleFeature
                    key={i}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                    link={item.link}
                    type={item.type || ""}
                    icon={item.icon}
                    setOpenNav={setOpenNav}
                  />
                ))
              : [1, 2, 3, 4].map((item, i) => {
                  return (
                    <div key={i} className="single_skeleton ">
                      <Skeleton
                        variant="circular"
                        className="circle"
                        width={40}
                        height={40}
                      />

                      <Skeleton
                        className="rectangle"
                        variant="rounded"
                        width={210}
                        height={60}
                      />
                    </div>
                  );
                })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNav = ({ setOpenNav, featureList }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "just" }}
      className="pd_mobile_nav"
    >
      <div className="logo_flex_box">
        <LogoIcon className={"mobile_logo"} />
        <IconButton onClick={() => setOpenNav(false)} sx={{ padding: 0 }}>
          <ClearIcon />
        </IconButton>
      </div>
      <div className="line"></div>
      <div className="nav_list_mobile">
        {/* <div className="list_item_mobile drop">
          <div
            className="list_item_top_flex"
            onClick={() => setOpenExtended(!openExtended)}
          >
            <button>Features</button>
            <LeftArrowIcon />
          </div>
          <AnimatePresence>
            {openExtended && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ type: "just" }}
                className="feature_mobile_box"
              >
                {" "}
                {featureList.map((item) => (
                  <SingleFeature
                    key={item.id}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
        <ExtendMenu
          menu={"Features"}
          menulist={featureList}
          setOpenNav={setOpenNav}
        />
        <ExtendMenu menu={"Company"} menulist={companyList} />

        <Link href="/explore/community">
          <a className="list_item_mobile">Community</a>
        </Link>

        <Link href="/explore/pricing">
          <a className="list_item_mobile">Pricing</a>
        </Link>

        <ExtendMenu menu={"Learn"} menulist={learnList} />
        {/* <Link href="https://getbumpa.com/meta/">
          <a target={"_blank"} className="list_item_mobile">
            Sell on Instagram
          </a>
        </Link> */}
        <Link href="/explore/blackfriday">
          <a className="list_item_mobile">Black Friday</a>
        </Link>
        <Button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.open("https://getbumpa.com/login", "_blank");
            }
          }}
          variant="outlined"
          className="mobile_login_btn"
        >
          Login
        </Button>
        <GetStartedBtn className="mobile_login_btn sign" text={"Get Started"} />

        {/* <Button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.open("https://getbumpa.com/register", "_blank");
            }
          }}
          variant="contained"
          className="mobile_login_btn sign"
        >
          Sign Up
        </Button> */}
      </div>
    </motion.div>
  );
};

export default MobileNav;
