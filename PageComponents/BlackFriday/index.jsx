import Modal from "Components/Modal";
import Head from "next/head";
import { useState } from "react";
import Clock from "./clock";
import FifthSection from "./FifthSection";
import FooterForm from "./footerForm";
import FourthSection from "./fourthSection";
import Hero from "./hero";
import Navbar from "./navbar";
import OptInForm from "./OptInForm";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";

const BlackFridayPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openStartModal, setOpenStartModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <section className="pd_black_friday">
      <Head>
        <title>Black Friday</title>{" "}
      </Head>
      <Clock />
      <Navbar openFnc={() => handleOpenModal()} />
      <div className="big_black_bg">
        <div className="blur">
          <div className="blur_box"></div>
        </div>
        <Hero openFnc={() => handleOpenModal()} />
        <SecondSection openFnc={() => handleOpenModal()} />
        <ThirdSection openFnc={() => handleOpenModal()} />
      </div>
      <FourthSection />
      <FifthSection />
      <FooterForm isForm={false} />
      <Modal
        otherClasses="image-modal"
        openModal={openModal}
        isCancel={false}
        hideCancelBtn={true}
        closeModal={() => setOpenModal(!openModal)}
      >
        <OptInForm closeModal={() => setOpenModal(!openModal)} />
      </Modal>
    </section>
  );
};

export default BlackFridayPage;
