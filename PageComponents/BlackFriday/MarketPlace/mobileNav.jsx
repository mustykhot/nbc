import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { LogoIcon } from "Components/icons/LogoIcon";
import { useRouter } from "next/router";

const MobileNav = ({ setOpenNav, openFnc }) => {
  const router = useRouter();
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
        <Button
          variant="outlined"
          onClick={() => {
            router.push("/signup#faq");
          }}
        >
          Learn more about Bumpa Black Friday
        </Button>{" "}
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
