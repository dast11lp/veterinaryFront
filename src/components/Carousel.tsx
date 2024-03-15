import { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "./CarouselSlide";

export const Carousel = () => {
  const sliderRef = useRef(null);
  const dotContainerRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [maxSlide, setMaxSlide] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const sliderNode = sliderRef.current;
    const slidesNode = sliderNode?.querySelectorAll(".slide");
    setSlides(Array.from(slidesNode));

  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    goToSlice(currSlide)
    setMaxSlide(slides.length);
  }, [slides, currSlide]) // posiciona los slides con al momento en el que se inicia el componente y se ejecuta el useEffect anterior, 
  // el cual, al setearse con los slidesNode, cambia su estado lo que permite ejecutar goToSlice

  const nextSlide = () => {
    if (currSlide === maxSlide - 1)
      setCurrSlide(0);
    else
      setCurrSlide((prev) => (prev + 1));
    goToSlice(currSlide);

  };

  const prevSlide = () => {
    if (currSlide === 0)
      setCurrSlide(maxSlide - 1)
    else
      setCurrSlide((prev) => (prev - 1))
    goToSlice(currSlide)
  };

  const goToSlice = (currSlide) => {
    if (slides.length > 0) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
      });
    }
  }
  const moveWithBtn = (index) => {
    goToSlice(index);
    setCurrSlide(index);
  }

  return (
    <div className="slider" ref={sliderRef}>
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />
      <CarouselSlide />

      <div className="slider__btns">
        <div className="slider__btns__btn--left" onClick={prevSlide}> &#60; </div>
        <div className="slider__btns__btn--right" onClick={nextSlide}> &#62; </div>
      </div>

      <div className="dots" ref={dotContainerRef}>
        {slides.map((el, i) => (
          <button className="dot" style={{
            background: i === currSlide ? 'red' : ''
          }} key={i}
            onClick={()=>moveWithBtn(i)}>X</button>
        ))}
      </div>
    </div>
  );
};
