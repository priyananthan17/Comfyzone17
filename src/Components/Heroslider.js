import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';



export default function Heroslider() {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay
        className="carousel"
      >
        <div>
          <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_232_Polo?resMode=sharp2&wid=1600&hei=642" alt="React Slide" />
          {/* <p className="legend">First slide label</p> */}
        </div>
        <div>
          <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_240_Blue?resMode=sharp2&wid=1600&hei=642" alt="Vue Slide" />
          {/* <p className="legend">Second slide label</p> */}
        </div>
        <div>
          <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_235_Kids?resMode=sharp2&wid=1600&hei=642" alt="Angular Slide" />
          {/* <p className="legend">Third slide label</p> */}
        </div>
      </Carousel>
    </div>
  );
}
