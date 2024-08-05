import React from "react";

function CoolStuff() {
  return (
    <div id="cool">
      <h3>Cool Stuff You Can Hear Me Talking About</h3>
      <div className="section">
        <p>
          <strong>1. FRC</strong>
          <br />
          My journey with the FRC Team 6429 | 4th Dimension has been the best
          experience of my life! From building robots and organizing social
          responsibility projects to competing on the world stage and winning
          the most prestigious awards, it's been an incredible ride. I am a
          proud alum of team 6429 and am excited to see what this amazing team
          will achieve in the future! Check out our team's website at{" "}
          <a
            href="https://frc6429.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            frc6429.org
          </a>{" "}
          to see some of our coolest projects and achievements. Stay tuned for
          photos of our robots in action!
        </p>
        <div className="photo-gallery">
          <img src="frc_photo1.jpg" alt="FRC Team '22" />
          <img src="frc_photo2.jpg" alt="FRC Team '23" />
        </div>
      </div>

      <div className="section">
        <p>
          <strong>2. My Dog</strong>
          <br />
          No opinions, just facts: my dog is the cutest dog in the world. Check
          out the photos, and you'll see what I mean.
        </p>
        <div className="photo-gallery">
          <img src="dog_photo1.jpg" alt="My Dog 1" />
          <img src="dog_photo2.jpg" alt="My Dog 2" />
          <img src="dog_photo3.jpg" alt="My Dog 3" />
          <img src="dog_photo4.jpg" alt="My Dog 4" />
          <img src="dog_photo5.jpg" alt="My Dog 5" />
        </div>
      </div>

      <div className="section">
        <p>
          <strong>3. Chess</strong>
          <br />
          I've been playing chess for a long time, without any proper
          preparation or official face-to-face games. I'll share some of my
          favorite games and strategies with you. And, I'm always open for a
          duel :){" "}
          <a
            href="https://lichess.org/@/waadaaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            lichess.org
          </a>
        </p>
      </div>

      <div className="section">
        <p>
          <strong>4. Minecraft</strong>
          <br />
          From epic builds to redstone contraptions, Minecraft is my digital
          playground. It's all about creativity and endless possibilities. Right
          now, I am enjoying the happiness of playing with a few friends instead
          of riding solo (which I've done for years, and boy, it gets boring
          after some time :D)
        </p>
      </div>

      <div className="section">
        <p>
          <strong>5. Drawing</strong>
          <br />
          Art has always been a part of me. I abandoned this hobby for the last
          7-8 years, but this summer, I am trying to come back to it and
          actually spend time on some hobbies. I'll share some of my sketches
          and artwork, blending my love for coding and creativity.
        </p>
        <div className="photo-gallery">
          <img src="drawing_photo1.jpeg" alt="Drawing 1" />
          <img src="drawing_photo2.jpeg" alt="Drawing 2" />
        </div>
      </div>
    </div>
  );
}

export default CoolStuff;
