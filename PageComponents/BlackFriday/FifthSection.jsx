import { Accordion, AccordionSummary } from "@mui/material";
import { useState } from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadSection from "Components/Footer/downloadSection";
import Link from "next/link";

const faqList = [
  {
    id: 1,
    title: "When is Bumpa Black Friday?",
    content:
      "The Bumpa Black Friday will run from  November 23rd to December 3rd, 2022",
  },
  {
    id: 2,
    title:
      "Can I join the Bumpa Black Friday if I don't have a Bumpa account? ",
    content:
      "To join the Bumpa Black Friday, you have to download and sign up on Bumpa. You can join today by downloading the Bumpa app",
    link: "https://Bumpa.app",
  },
  {
    id: 3,
    title:
      "Is there a limit to the number of products I can add to my Bumpa Black Friday collection?",
    content: "No, but you must have at least ten products in your collection.",
  },
  {
    id: 4,
    title:
      "I have my own delivery service that I use. Do I still get discounts on deliveries for my orders? ",
    content:
      "No. The discounts can only apply through the company we’ve partnered with.",
  },
  {
    id: 5,
    title:
      "What delivery service will give me a discount for my online orders?",
    content:
      "Sendstack for Lagos Deliveries, Topship for deliveries outside Lagos.",
  },

  {
    id: 6,
    title: "How do I add products to my Black Friday collection?",
    content: (
      <ul>
        <li>Open your Bumpa app</li>
        <li>Click on the Products you want to add to the Collection</li>
        <li>Edit and add to your blackfriday22 collection.</li>
      </ul>
    ),
  },
  {
    id: 7,
    title: "I have a Bumpa acount already but I can’t login. What do I do?",
    content: (
      <p>
        Kindly confirm you are using the correct email address you signed up on
        Bumpa with. and reach out to{" "}
        <Link href="mailto:support@getbumpa.com">
          <a>support@getbumpa.com </a>
        </Link>{" "}
        if you still have difficulties
      </p>
    ),
  },
];
const FifthSection = ({ isFaq = true }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="pd_fifth_section_black" id="faq">
      {isFaq && (
        <>
          <p className="title_text">FREQUENTLY ASKED QUESTIONS</p>

          <div className="faq_box">
            {faqList.map((item) => (
              <Accordion
                expanded={expanded === item.title}
                onChange={handleChange(item.title)}
                className="accordion_box"
                key={item.id}
              >
                <AccordionSummary
                  className="accordion_title"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <p className="title">{item.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="content">
                    {item.content}
                    {item.link ? (
                      <Link href={item.link}>
                        <a target={"_blank"}>here</a>
                      </Link>
                    ) : (
                      ""
                    )}
                  </p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </>
      )}
      <DownloadSection
        description={
          "Are you a seller but new to Bumpa? Download the Bumpa app and sign up"
        }
      />
    </section>
  );
};

export default FifthSection;
