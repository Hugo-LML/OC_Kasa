import { FC, useState } from 'react';
import ArrowLeft from '../../icons/ArrowLeft';
import ArrowRight from '../../icons/ArrowRight';

interface RentalSliderProps {
  pictures: string[];
}

const RentalSlider: FC<RentalSliderProps> = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    if (currentIndex < pictures.length - 1) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(pictures.length - 1);
  };

  return (
    <div className="rental-slider">
      <div className="rental-slider__container">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Rental picture ${index + 1}`}
            className={`rental-slider__container__slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {pictures.length > 1 && (
        <>
          <button type='button' className="rental-slider__prev" onClick={prevSlide}>
            <ArrowLeft />
          </button>
          <button type='button' className="rental-slider__next" onClick={nextSlide}>
            <ArrowRight />
          </button>
          <span className="rental-slider__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
};

export default RentalSlider;