import React from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function StandardCarousel() {
  return (
    <div >
      <Carousel infiniteLoop={true} centerSlidePercentage={40} centerMode={true}
        autoPlay={true} interval={1000} emulateTouch={true} showArrows={true}
        swipeable={true} stopOnHover={true} >
        <div>
          <img src={image1} alt='RealEstateImage1' />
        </div>
        <div>
          <img src={image2} alt='RealEstateImage2' />
        </div>
        <div>
          <img src={image3} alt='RealEstateImage3' />
        </div>
        <div>
          <img src={image4} alt='RealEstateImage4' />
        </div>
        <div>
          <img src={image5} alt='RealEstateImage5' />
        </div>
        <div>
          <img src={image6} alt='RealEstateImage6' />
        </div>
        <div>
          <img src={image7} alt='RealEstateImage7' />
        </div>
      </Carousel>
    </div>
      );
}
