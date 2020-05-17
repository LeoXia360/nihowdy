import React from 'react';
import pic2 from '../img/slideshow/pic2.jpg';
import "./homepage.css";

class Homepage extends React.Component {
  render() {
    return(
      <div>
        <div>
          <img src={pic2} alt="leo" className="photo"/>
        </div>
      </div>
    );
  }
}

export default Homepage;
