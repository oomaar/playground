import React, { useState } from 'react';
import { Dots, Arrows, SliderImage } from "./index";
import imgs from "./images.json";
import "./Slider.css";
import SliderImages from './SliderImages';

const len = imgs.length - 1;

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="slider-container">
            <SliderImages activeIndex={activeIndex} />

            <Arrows 
            prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />

            <Dots 
                activeIndex={activeIndex}
                onclick={activeIndex => setActiveIndex(activeIndex)}
            />
        </div>
    )
}

export default Slider;
