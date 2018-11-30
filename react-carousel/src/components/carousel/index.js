import React from "react";
import PropTypes from "prop-types";
import "./sass/carousel.scss";

class Carousel extends React.Component {
  slideClass = (active, slide, current) => {
    if (active === current) return "active";
    else if (active > current) return "out";
    else return "";
  };

  render() {
    const next = this.props.activeSlide + 1;
    const prev = this.props.activeSlide - 1;
    const disablePrev = prev >= 0 ? false : true;
    const disableNext = next < this.props.images.length ? false : true;
    return (
      <div className="carousel">
        <ul>
          {this.props.images.map((x, i) => (
            <li
              key={i}
              className={this.slideClass(this.props.activeSlide, x, i)}
            >
              <img src={x.src} />
            </li>
          ))}
        </ul>
        <button
          onClick={() => this.props.handleSlideTo(prev)}
          disabled={disablePrev}
        >
          Prev
        </button>
        <button
          onClick={() => this.props.handleSlideTo(next)}
          disabled={disableNext}
        >
          Next
        </button>
      </div>
    );
  }
}

Carousel.propTypes = {};

export default Carousel;
