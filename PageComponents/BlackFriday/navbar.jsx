import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import MobileNav from "./mobileNav";
import { AnimatePresence } from "framer-motion";
import { LogoIcon } from "Components/icons/LogoIcon";

const Navbar = ({ openFnc }) => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className={`nav_wrapper`}>
      <div className={`pd_navbar`}>
        <Link href="/signup">
          <a>
            <LogoIcon className=" logo_icon " />
          </a>
        </Link>

        <div className="nav_list">
          <Link href={"/signup#about"}>
            <a className="list_item">About</a>
          </Link>
          <Link href={"/signup#expect"}>
            <a className="list_item">What to Expect</a>
          </Link>{" "}
          <Link href={"https://getdp.co/BBF22"}>
            <a target={"_blank"} className="list_item">
              Get DP
            </a>
          </Link>
          <Link href={"/"}>
            <a className="list_item background">Go to Deals Page</a>
          </Link>
        </div>
        <div className="btn_box">
          <Button
            variant="contained"
            onClick={() => {
              openFnc();
            }}
            className="signup_btn "
          >
            Sign Up Now
          </Button>
        </div>

        <IconButton
          onClick={() => setOpenNav(true)}
          className=" hamburger_btn  "
        >
          <MenuIcon />
        </IconButton>
        <AnimatePresence>
          {openNav && <MobileNav openFnc={openFnc} setOpenNav={setOpenNav} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
