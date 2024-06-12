import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { LogoIcon } from "Components/icons/LogoIcon";

const MobileNav = ({ setOpenNav, openFnc }) => {
  const closeNav = () => {
    setOpenNav(false);
  };
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
      <div className="nav_list_mobile">
        <Link href={"/signup#about"}>
          <a className="list_item_mobile" onClick={closeNav}>
            About
          </a>
        </Link>
        <Link href={"/signup#expect"}>
          <a className="list_item_mobile" onClick={closeNav}>
            What to Expect
          </a>
        </Link>{" "}
        <Link href={"https://getdp.co/BBF22"}>
          <a target={"_blank"} className="list_item_mobile">
            Get DP
          </a>
        </Link>
        <Link href={"/"}>
          <a className="list_item_mobile" onClick={closeNav}>
            Go to Deals  Page
          </a>
        </Link>
        <Button
          onClick={() => {
            openFnc();
          }}
          variant="contained"
          className="mobile_login_btn sign"
        >
          Sign Up Now
        </Button>
      </div>
    </motion.div>
  );
};

export default MobileNav;
