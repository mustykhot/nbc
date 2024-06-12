import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { DownArrowIcon } from "./icons/DownArrowIcon";

const Hero = ({ openFnc }) => {
  return (
    <div className="pd_hero">
      <Image
        src={"/images/black/blackfridaylogo.png"}
        width={270}
        height={133}
        alt="logo"
      />
      <div className="bumpa_text">
        <p>
          The biggest <span>Bumpa</span>
        </p>
        <p>
          <span>BlackFriday</span> is here
        </p>
      </div>
      <Button className="signup" onClick={openFnc} target={"_blank"}>
        Sign Up Now
      </Button>
      <Link href="#expect">
        <a>
          <DownArrowIcon />
        </a>
      </Link>
    </div>
  );
};

export default Hero;
