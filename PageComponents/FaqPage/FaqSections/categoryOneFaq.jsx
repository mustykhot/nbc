import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaqList } from "utils/utils";
import { useState } from "react";
const CategoryFaq = ({ section }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {FaqList[section].map((item) => (
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
            <p className="content">{item.content}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default CategoryFaq;
