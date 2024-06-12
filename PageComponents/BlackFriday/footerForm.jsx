import Link from "next/link";
import { useState } from "react";
import SignUpBtn from "./signupBtn";
import Checkbox from "@mui/material/Checkbox";
import Footer from "Components/Footer";

const FooterForm = ({ isForm = true }) => {
  const [checked, setChecked] = useState("yes");
  const handleChange = (event, value) => {
    setChecked(value);
  };
  return (
    <section className="footer_form">
      {isForm && (
        <div className="form_section">
          <p className="title_text">Be the first to know when deals drop!</p>
          <p className="description">
            Give us your email address. We promise not to spam
          </p>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
            <div className="check_flex">
              <p>Are you a seller?</p>
              <div className="check_box">
                <Checkbox
                  checked={checked === "yes"}
                  onChange={(e) => {
                    handleChange(e, "yes");
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <label htmlFor="Yes">Yes</label>
              </div>
              <div className="check_box">
                <Checkbox
                  checked={checked === "no"}
                  onChange={(e) => {
                    handleChange(e, "no");
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <label htmlFor="Yes">No</label>
              </div>
            </div>
            <SignUpBtn text={"I want to know"} />
          </form>
        </div>
      )}
      <Footer displayDownload={false} displaypress={false} />
    </section>
  );
};

export default FooterForm;
