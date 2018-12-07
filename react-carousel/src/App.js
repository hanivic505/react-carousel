import React, { Component } from "react";
import { connect } from "react-redux";
import { moveToSlideAction, imagesIsLoaded } from "./actions/carousel";

import "./sass/App.scss";
import Carousel from "./components/carousel";
import { getImages } from "./web";
import { initialState } from "./state";

class App extends Component {
  /**
   * Carousel state object with images array and the activeSlide index
   */
  async componentDidMount() {
    const images = await getImages();
    this.props.imagesIsLoaded(images.hits);
  }
  /**
   * Carousel navigation handler which sets the state activeSlide
   */
  slideTo = slide => {
    this.props.moveToSlideAction(slide);
  };

  render() {
    return (
      <div className="App">
        <header>Carousel Test</header>
        <Carousel
          images={this.props.mainReducer.images}
          handleSlideTo={this.slideTo}
          activeSlide={this.props.mainReducer.activeSlide}
        />
      </div>
    );
  }
}

const mapStateToProps = (state = initialState()) => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  moveToSlideAction: slide => dispatch(moveToSlideAction(slide)),
  imagesIsLoaded: images => dispatch(imagesIsLoaded(images))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
