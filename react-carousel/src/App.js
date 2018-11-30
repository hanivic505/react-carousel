import React, { Component } from "react";
import "./sass/App.scss";
import Carousel from "./components/carousel";

class App extends Component {
  /**
   * Carousel state object with images array and the activeSlide index
   */
  state = {
    activeSlide: 0,
    imgs: [
      {
        src: "http://via.placeholder.com/800x300/00FFFF/808080?Text=1",
        active: false,
        caption: "Image 2"
      },

      {
        src: "http://via.placeholder.com/800x300/FF00FF/808080?Text=2",
        active: false,
        caption: "Image 3"
      },
      {
        src: "http://via.placeholder.com/800x300/FFFF00/808080?Text=3",
        active: false,
        caption: "Image 4"
      },
      {
        src: "http://via.placeholder.com/800x300/F0F0FF/808080?Text=4",
        active: false,
        caption: "Image 5"
      },
      {
        src: "http://via.placeholder.com/800x300/0F0FFF/808080?Text=5",
        active: false,
        caption: "Image 6"
      },
      {
        src: "http://via.placeholder.com/800x300/FFF0F0/808080?Text=6",
        active: false,
        caption: "Image 1"
      }
    ]
  };
  /**
   * Carousel navigation handler which sets the state activeSlide
   */
  slideTo = slide => {
    this.setState({
      activeSlide: slide
    });
  };

  render() {
    return (
      <div className="App">
        <header>Carousel Test</header>
        <Carousel
          images={this.state.imgs}
          handleSlideTo={this.slideTo}
          activeSlide={this.state.activeSlide}
        />
      </div>
    );
  }
}

export default App;
