import React from "react";
import { useState } from "react";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

import { DetailsSection, DetailsOutput } from "./Landing.styled";

const ReqContent = (props) => {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };
  return (
    <>
      <DetailsSection onClick={toggleDetails}>
        <p>{props.title}</p>
        {show ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
      </DetailsSection>
      {show && <DetailsOutput>{props.requirement}</DetailsOutput>}
    </>
  );
};

export default ReqContent;
