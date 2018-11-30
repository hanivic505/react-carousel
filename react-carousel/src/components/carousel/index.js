import React from "react";
import PropTypes from "prop-types";
import "./sass/carousel.scss";

class Carousel extends React.Component {
  slideClass = (active, slide, current) => {
    if (active === current) return "active";
    else if (active === current - 1) return "next";
    else if (active === current + 1) return "out";
    else if (active >= current + 2) return "off";
    // else return "";
  };

  render() {
    const { images, activeSlide, handleSlideTo } = this.props;
    const next = activeSlide + 1;
    const prev = activeSlide - 1;
    const disablePrev = prev >= 0 ? false : true;
    const disableNext = next < images.length ? false : true;
    return (
      <div className="carousel">
        <ul>
          {images.map((x, i) => (
            <li key={i} className={this.slideClass(activeSlide, x, i)}>
              <img src={x.src} />
              <div className="caption">{x.caption}</div>
            </li>
          ))}
        </ul>
        <button onClick={() => handleSlideTo(prev)} disabled={disablePrev} />
        <button onClick={() => handleSlideTo(next)} disabled={disableNext} />
      </div>
    );
  }
}

Carousel.propTypes = {};

export default Carousel;
