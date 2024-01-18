import React from "react";
import { Link } from "react-router-dom";
import "./index2.scss";
import Page3 from "../Page03/Page3";
import Page1 from "../Page01/Page1";

const page2 = (props) => {
  console.log(props.id);
  return (
    <div>
      <Page1></Page1>
      <div>
        <Page3></Page3>
      </div>
    </div>
  );
};

export default page2;
