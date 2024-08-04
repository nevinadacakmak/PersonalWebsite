import React from "react";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="photo-container">
          <img src={"IMG_8966.jpg"} alt="Nevin Ada Çakmak" />
        </div>
        <div className="bio-container">
          <h1>Hi there!</h1>
          <h3>About Me</h3>
          <p>
            I am Nevin Ada Çakmak, a 2nd year Computer Science student at the
            University of Toronto. My passion lies in the intersection of
            technology and human learning, and I am committed to promoting
            gender equality in STEM fields. With over seven years of experience
            in FIRST robotics programs, I have served as a member, team lead,
            and mentor.
          </p>
          <p>
            My technical skills include proficiency in C, Python, Java, HTML,
            CSS, and JavaScript. I am actively engaged in the tech community,
            holding leadership roles such as Vice President of Operations for
            the Data Science & Statistics Society and Co-Founder &amp;
            Co-President of C.R.E.A.T.E. at UTSC.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
