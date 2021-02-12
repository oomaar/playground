import React from 'react';
import img from "./images.json";

const Dots = (props) => {
    return (
        <div className="all-dots">
            {img.map((slide, index) => (
                <span 
                key={index}
                className={`${props.activeIndex === index ? 'dot active-dot' : 'dot'}`}
                onClick={(event) => props.onclick((event.target.value = index))}
                ></span>
            ))}
        </div>
    )
}

export default Dots;
