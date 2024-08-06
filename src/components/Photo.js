import React from "react";

function Photo() {
  return (
    <div id="photo">
      <h2>Photo Album</h2>

      <div className="cool-stuff-container">
        <div className="cool-card">
          <img src="frc_photo1.jpg" alt="FRC Team '22" />
          <div className="cool-info">
            <h3>FRC</h3>
            <p>
              My journey with the FIRST Robotics Competition Team - 4th
              Dimension has been the best experience of my life! From building
              robots to winning prestigious awards to reaching +16 Million
              people with our projects, it's been incredible. Check out our
              team's website at{" "}
              <a
                href="https://frc6429.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                frc6429.org
              </a>
            </p>
          </div>
        </div>

        <div className="cool-card">
          <img src="dog_photo1.jpg" alt="My Dog" />
          <div className="cool-info">
            <h3>Pako</h3>
            <p>No opinions, just facts: my dog is the cutest in the world.</p>
          </div>
        </div>

        <div className="cool-card">
          <img src="chess_1.gif" alt="Chess" />
          <div className="cool-info">
            <h3>Chess</h3>
            <p>
              I've been playing chess for years, mostly online. I love sharing
              my favorite games and strategies. Up for a duel?{" "}
              <a
                href="https://lichess.org/@/waadaaw"
                target="_blank"
                rel="noopener noreferrer"
              >
                lichess.org
              </a>
            </p>
          </div>
        </div>

        <div className="cool-card">
          <img src="amacss_photo1.JPG" alt="Amacss" />
          <div className="cool-info">
            <h3>AMACSS</h3>
            <p>
              This is my team at the Association of Mathematical and Computer
              Science Students (AMACSS) at the University of Toronto
              Scarborough. I was a Member of the External Relations during 2023
              - 2024.
            </p>
          </div>
        </div>

        <div className="cool-card">
          <img src="drawing_photo1.jpeg" alt="Drawing" />
          <div className="cool-info">
            <h3>Drawing</h3>
            <p>
              Art has always been a part of me. I've recently returned to this
              hobby, blending my love for coding and creativity. Here is my
              latest work.
            </p>
          </div>
        </div>

        <div className="cool-card">
          <img src="moon_photo1.jpg" alt="Moon" />
          <div className="cool-info">
            <h3>Moon</h3>
            <p>
              I love taking photos of the moon. It's a great way to relax and
              enjoy the night. Here is my latest photo.
            </p>
          </div>
        </div>

        <div className="cool-card">
          <img src="montreal_photo1.jpeg" alt="Montreal" />
          <div className="cool-info">
            <h3>Montreal</h3>
            <p>
              This is the St. Joseph's Oratory of Mount Royal in Montreal. I
              visited it in Feb 2024 and it was truly breathtaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
