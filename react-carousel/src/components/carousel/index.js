import React from "react";
import "./sass/carousel.scss";

class Carousel extends React.Component {
  slideClass = (active, slide, current) => {
    if (active === current) return "active";
    else if (active === current - 1) return "next";
    else if (active === current + 1) return "out";
    else if (active >= current + 2) return "off";
  };

  handleKeyDown = e => {
    const code = e.keyCode;

    const { images, activeSlide, handleSlideTo } = this.props;
    const next = activeSlide + 1;
    const prev = activeSlide - 1;
    const disablePrev = prev >= 0 ? true : false;
    const disableNext = next < images.length ? true : false;

    if (code === 39 && disableNext) handleSlideTo(this.props.activeSlide + 1);
    else if (code === 37 && disablePrev)
      handleSlideTo(this.props.activeSlide - 1);
  };

  render() {
    const { images, activeSlide, handleSlideTo } = this.props;
    const next = activeSlide + 1;
    const prev = activeSlide - 1;
    const disablePrev = prev >= 0 ? false : true;
    const disableNext = next < images.length ? false : true;
    return (
      <div className="carousel" tabIndex="0" onKeyDown={this.handleKeyDown}>
        <ul>
          {images.map((x, i) => (
            <li key={i} className={this.slideClass(activeSlide, x, i)}>
              <img src={x.largeImageURL} alt={x.tags} />
              <div className="caption">{x.tags}</div>
            </li>
          ))}
        </ul>
        <button
          tabIndex="2"
          className="prev"
          onClick={() => handleSlideTo(prev)}
          disabled={disablePrev}
        />
        <button
          tabIndex="1"
          className="next"
          onClick={() => handleSlideTo(next)}
          disabled={disableNext}
        />
      </div>
    );
  }
}

export default Carousel;
