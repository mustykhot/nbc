import Footer from "Components/Footer";
import Hero from "./hero";
import SecondSection from "./secondSection";
import Navbar from "Components/Navbar";
import Head from "next/head";

const FaqPage = () => {
  return (
    <section className="pd_faq_page">
      <Head>
        <title>FAQ</title>{" "}
      </Head>
      <Navbar />
      <Hero />
      <SecondSection />
      <Footer />
    </section>
  );
};

export default FaqPage;
