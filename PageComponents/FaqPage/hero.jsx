import Link from "next/link";
import { Zoom } from "pages";

const Hero = () => {
  return (
    <section className="pd_hero">
      <Zoom>
        <div className="text_box">
          <p className="title">Frequently Asked Questions</p>
          <p className="description">
            Need help? Check out the answers to your questions about Bumpa,{" "}
            <br /> or send an email to{" "}
            <Link href="mailto:hello@getbumpa.com">
              <a>support@getbumpa.com.</a>
            </Link>
          </p>
          <p className="description mobile">
            Need help? Check out the answers to your questions about Bumpa, or
            send an email to{" "}
            <Link href="mailto:hello@getbumpa.com">
              <a>support@getbumpa.com.</a>
            </Link>
          </p>
        </div>{" "}
      </Zoom>
    </section>
  );
};

export default Hero;
