import React from "react";
import resumePDF from "./resume.pdf";

const Resume = () => {
  return (
    <div>
      <embed
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default Resume;
