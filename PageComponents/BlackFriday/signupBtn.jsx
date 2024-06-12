import { useRouter } from "next/router";
import { Button } from "@mui/material";

const SignUpBtn = ({ text, handleClick }) => {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      onClick={() => {
        if (handleClick) {
          handleClick();
        } else {
          router.push("/");
        }
      }}
      className="pd_signup_btn"
    >
      {text}
    </Button>
  );
};

export default SignUpBtn;
