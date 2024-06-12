import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SentimentDissatisfiedSharpIcon from "@mui/icons-material/SentimentDissatisfiedSharp";
import { Button } from "@mui/material";
import { LogoIcon } from "Components/icons/LogoIcon";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);
  return (
    <div className="pd_not_found">
      <div className="inner">
        <LogoIcon />
        <div className="content">
          <div className="title_box">
            <p>404</p>
            <SentimentDissatisfiedSharpIcon
              sx={{ mb: 1 }}
              color="primary"
            />{" "}
          </div>
          <br />
          <p>
            We are very sorry for the inconvenience, it looks like the page you
            are trying to access is broken or never existed
          </p>
          <br />
          <Button
            className="go-home-btn"
            variant="contained"
            onClick={() => {
              router.push("/");
            }}
          >
            Go Home
          </Button>
        </div>
        <div className="footer">&copy; {new Date().getFullYear()} Bumpa</div>
      </div>
    </div>
  );
};

export default NotFound;
