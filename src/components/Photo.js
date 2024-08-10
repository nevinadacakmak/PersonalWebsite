import React, { useEffect, useRef } from "react";

const photos = [
  { src: "robotics_photo1.jpeg", description: "Robotics Event 1" },
  { src: "moon_photo5.jpeg", description: "Moon Photo 5" },
  { src: "frc_photo2.JPG", description: "FRC Event 2" },
  { src: "montreal_photo3.jpeg", description: "Montreal 3" },
  { src: "dog_photo1.jpg", description: "Dog Photo 1" },
  { src: "drawing_photo1.jpeg", description: "Drawing 1" },
  { src: "moon_photo4.jpeg", description: "Moon Photo 4" },
  { src: "volunteering_photo1.jpeg", description: "Volunteering 1" },
  { src: "turkey_photo3.jpeg", description: "Turkey 3" },
  { src: "chess_1.gif", description: "Chess Competition" },
  { src: "robotics_photo2.jpeg", description: "Robotics Event 2" },
  { src: "dog_photo2.jpeg", description: "Dog Photo 2" },
  { src: "montreal_photo1.jpeg", description: "Montreal 1" },
  { src: "moon_photo7.jpeg", description: "Moon Photo 7" },
  { src: "turkey_photo1.jpeg", description: "Turkey 1" },
  { src: "drawing_photo2.jpeg", description: "Drawing 2" },
  { src: "moon_photo6.jpeg", description: "Moon Photo 6" },
  { src: "toronto_photo1.jpeg", description: "Toronto 1" },
  { src: "volunteering_photo2.jpeg", description: "Volunteering 2" },
  { src: "toronto_photo2.jpeg", description: "Toronto 2" },
  { src: "montreal_photo2.jpeg", description: "Montreal 2" },
  { src: "moon_photo3.jpeg", description: "Moon Photo 3" },
  { src: "amacss_photo1.JPG", description: "AMACSS Event" },
  { src: "moon_photo1.jpg", description: "Moon Photo 1" },
  { src: "frc_photo1.jpg", description: "FRC Event 1" },
  { src: "robotics_photo2.jpeg", description: "Robotics Event 2" },
  { src: "dog_photo2.jpeg", description: "Dog Photo 2" },
  { src: "montreal_photo3.jpeg", description: "Montreal 3" },
  { src: "moon_photo2.jpeg", description: "Moon Photo 2" },
  { src: "turkey_photo2.jpeg", description: "Turkey 2" },
];

const Photo = () => {
  const photoBarRef = useRef(null);
  let animationFrameId = null; // store the ID of the animation frame

  useEffect(() => {
    const photoBar = photoBarRef.current;
    let scrollAmount = 0;
    let scrollSpeed = 1;

    const autoScroll = () => {
      if (photoBar) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= photoBar.scrollWidth - photoBar.clientWidth) {
          scrollAmount = 0; // Reset scroll to start when reaching the end
        }
        photoBar.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(autoScroll); // store the ID of the animation frame
    };

    autoScroll(); // Start the auto-scrolling

    return () => cancelAnimationFrame(animationFrameId); // cancel the animation frame using the stored ID
  }, []);

  return (
    <div id="photo">
      <div
        className="photo-bar"
        ref={photoBarRef}
        style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      >
        {photos.map((photo, index) => (
          <div
            className="photo-card"
            key={index}
            style={{ display: "inline-block" }}
          >
            <img src={photo.src} alt={photo.description} />
            <div className="photo-description">{photo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
