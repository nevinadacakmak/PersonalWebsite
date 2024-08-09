import React from "react";

const photos = [
  { src: "moon_photo4.jpeg", description: "Moon Photo 4" },
  { src: "robotics_photo1.jpeg", description: "Robotics Event 1" },
  { src: "drawing_photo2.jpeg", description: "Drawing 2" },
  { src: "frc_photo2.JPG", description: "FRC Event 2" },
  { src: "montreal_photo2.jpeg", description: "Montreal 2" },
  { src: "drawing_photo1.jpeg", description: "Drawing 1" },
  { src: "dog_photo1.jpg", description: "Dog Photo 1" },
  { src: "moon_photo2.jpeg", description: "Moon Photo 2" },
  { src: "toronto_photo2.jpeg", description: "Toronto 2" },
  { src: "volunteering_photo2.jpeg", description: "Volunteering 2" },
  { src: "robotics_photo2.jpeg", description: "Robotics Event 2" },
  { src: "montreal_photo1.jpeg", description: "Montreal 1" },
  { src: "chess_1.gif", description: "Chess Competition" },
  { src: "turkey_photo2.jpeg", description: "Turkey 2" },
  { src: "amacss_photo1.JPG", description: "AMACSS Event" },
  { src: "toronto_photo1.jpeg", description: "Toronto 1" },
  { src: "volunteering_photo1.jpeg", description: "Volunteering 1" },
  { src: "turkey_photo3.jpeg", description: "Turkey 3" },
  { src: "turkey_photo1.jpeg", description: "Turkey 1" },
  { src: "montreal_photo3.jpeg", description: "Montreal 3" },
];

const PhotoGrid = () => {
  return (
    <div>
      <h3>Snapshots</h3>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <img src={`/${photo.src}`} alt={`Photo ${index + 1}`} />
            <div className="photo-description">{photo.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
