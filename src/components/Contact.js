import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h3>Contact Information</h3>
      <p>email : nevinada.cakmak@mail.utoronto.ca</p>
      <p>
        {" "}
        linkedin:
        <a
          href="https://www.linkedin.com/in/nevin-ada-cakmak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
      </p>
      <p>
        {" "}
        github:
        <a
          href="https://github.com/nevinadacakmak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
      </p>
      <p>
        {" "}
        devpost:
        <a
          href="https://devpost.com/nevinadacakmak?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
      </p>
    </div>
  );
}

export default Contact;
