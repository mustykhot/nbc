import Image from "next/image";
import { Fade } from "pages/signup";
import { MarkIcon } from "./icons/MarkIcon";
import SignUpBtn from "./signupBtn";

const SecondSection = ({ openFnc }) => {
  return (
    <section className="pd_second_section" id="about">
      <Image
        width={526}
        height={582}
        src="/images/black/girl.png"
        layout="fixed"
        objectPosition={"0 0"}
        objectFit="cover"
        alt="phone"
      />
      <Fade bottom>
        <div className="text_box">
          <p className="grey">Bumpa2Bumpa Sales</p>
          <p className="title_text">
            Best Deals for Business Owners this <span> November</span>
          </p>
          <p className="title_text mobile">
            Best Deals for Business Owners this <span>November</span>
          </p>
          <p className="date">
            {" "}
            <span>Nov 23 - Dec 3.</span> Mark your calendars.
          </p>

          <div className="list_box">
            <div className="each_list">
              <MarkIcon />
              <p>Showcase your products to millions of customers.</p>
            </div>{" "}
            <div className="each_list">
              <MarkIcon />
              <p>Create discounts and coupon codes in 60 seconds.</p>
            </div>
          </div>
          <SignUpBtn handleClick={openFnc} text={"Sign Up Now"} />
        </div>
      </Fade>
    </section>
  );
};

export default SecondSection;
