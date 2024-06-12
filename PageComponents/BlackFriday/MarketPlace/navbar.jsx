import Button from "@mui/material/Button";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import MobileNav from "./mobileNav";
import { AnimatePresence } from "framer-motion";
import { LogoIcon } from "Components/icons/LogoIcon";
import Modal from "Components/Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchIcon } from "Components/icons/SearchIcon";

const Navbar = ({ input, setInput, handleSearch }) => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  return (
    <div className={`nav_wrapper market_nav`}>
      <div className="cover_nav">
        <div className={`pd_navbar`}>
          <div className="left_side">
            <LogoIcon className="logo_icon" />
            <span>X</span>
            <Image
              width={46}
              height={36}
              src="/images/naijachicklogo.png"
              alt="logo"
            />
          </div>

          <div className="search_box">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                handleSearch(e.target.value);
              }}
              type="text"
              placeholder="Search Store Name"
            />
            <Button
              onClick={() => {
                handleSearch(input);
              }}
              className={`submit_icon_btn`}
            >
              <SearchIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
