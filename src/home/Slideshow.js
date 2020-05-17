import React from 'react';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  '../img/slideshow/pic1.jpg',
  '../img/slideshow/pic2.jpg',
  '../img/slideshow/pic3.jpg',
  '../img/slideshow/pic4.jpg',
  '../img/slideshow/pic5.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

class Slideshow extends React.Component {
  render() {
    return(
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}

export default Slideshow;
