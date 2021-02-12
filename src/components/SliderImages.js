import React from 'react';
import img from "./images.json";

const SliderImages = (props) => {
    return (
        <div>
            <section>
                {img.map((slide, index) => (
                    <div key={index} className={index === props.activeIndex ? "slides active" : "inactive"}>
                        <img className="slide-image" src={slide.url} alt="ai 7aga" />
                        <h3 className="slide-title">{slide.title}</h3>
                        <h3 className="slide-text">{slide.id}</h3>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default SliderImages;
