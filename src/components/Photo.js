import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla">
      <h2>Photo Gallery</h2>
      <button className="embla__play" onClick={toggleAutoplay} type="button">
        {isPlaying ? "Stop" : "Start"}
      </button>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={`/images/${slide}`}
                alt={`Slide ${index + 1}`}
                className="embla__slide__img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const slides = [
  "dog_photo1.jpg",
  "robotics_photo1.jpeg",
  "turkey_photo3.jpeg",
  "drawing_photo2.jpeg",
  "moon_photo3.jpeg",
  "chess_1.gif",
  "toronto_photo2.jpeg",
  "montreal_photo1.jpeg",
  "volunteering_photo1.jpeg",
  "moon_photo2.jpeg",
  "frc_photo2.JPG",
  "dog_photo2.jpeg",
  "robotics_photo2.jpeg",
  "frc_photo1.jpg",
  "montreal_photo3.jpeg",
  "turkey_photo1.jpeg",
  "drawing_photo1.jpeg",
  "toronto_photo1.jpeg",
  "moon_photo7.jpeg",
  "volunteering_photo2.jpeg",
  "montreal_photo2.jpeg",
  "turkey_photo2.jpeg",
  "moon_photo1.jpg",
  "drawing_photo3.jpeg",
];

const options = {
  loop: true,
  skipSnaps: false,
};

const Photo = () => <EmblaCarousel slides={slides} options={options} />;

export default Photo;
