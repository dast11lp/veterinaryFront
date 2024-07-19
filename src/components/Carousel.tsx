import { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Carousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const dotContainerRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [maxSlide, setMaxSlide] = useState<number>(0);
  const [currSlide, setCurrSlide] = useState<number>(0);

  useEffect(() => {
    const sliderNode = sliderRef.current;
    if (sliderNode) {
      const slidesNode = sliderNode.querySelectorAll<HTMLElement>(".slide");
      setSlides(Array.from(slidesNode));
    }
  }, []);


  useEffect(() => {
    goToSlice(currSlide);
    setMaxSlide(slides.length);
  }, [slides, currSlide]); // posiciona los slides con al momento en el que se inicia el componente y se ejecuta el useEffect anterior, 

  const nextSlide = () => {
    if (currSlide === maxSlide - 1)
      setCurrSlide(0);
    else
      setCurrSlide((prev) => (prev + 1));
  };

  const prevSlide = () => {
    if (currSlide === 0)
      setCurrSlide(maxSlide - 1)
    else
      setCurrSlide((prev) => (prev - 1));
  };

  const goToSlice = (index: number) => {
    if (slides.length > 0) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }
  };

  const moveWithBtn = (index: number) => {
    goToSlice(index);
    setCurrSlide(index);
  };

  return (
    <div className="carousel">
      <div className="slider" ref={sliderRef}>
        <CarouselSlide />
        <CarouselSlide />
        <CarouselSlide />
        <CarouselSlide />
        <CarouselSlide />
        <div className="slider__navigate">

          <button className="slider__btn slider__btn--left" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="slider__dots" ref={dotContainerRef}>
            {slides.map((_, i) => (
              <button
                className="slider__dots__dot"
                style={{
                  background: i === currSlide ? '#47464659' : ''
                }}
                key={i}
                onClick={() => moveWithBtn(i)}
              ></button>
            ))}
          </div>

          <button className="slider__btn slider__btn--right" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
