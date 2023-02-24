import React, { useState } from "react";
import { AccordionData } from "../../Constants/StarAdminMenuAccordionData";
import { BsArrowRight } from "react-icons/bs";
import { BiRadioCircle } from "react-icons/bi";
import "./Accordion.scss";

export const Accordion = () => {
  const [accordion, setAccordion] = useState(null);

  const AccordionOpened = (id) => {
    if (accordion === id) {
      setAccordion(null);
    }
    setAccordion(id);
  };
  return (
    <div className="accordion-container">
      {AccordionData.map((each) => (
        <>
          <div
            id={each.id}
            onClick={() => AccordionOpened(each.id)}
            className="accordion-button"
          >
            <BiRadioCircle className="star-admin-menu-circle-icon" />
            <p className="accordion-button-content-icon">
              {each.title} <BsArrowRight className="arrow-icon" />
            </p>
          </div>
          {accordion === each.id ? (
            <div className="accordion-content-container">
              {each.context1 ? (
                <p className="accordion-content1">{each.context1}</p>
              ) : null}
              {each.context2 ? (
                <p className="accordion-content2">{each.context2}</p>
              ) : null}
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
};
