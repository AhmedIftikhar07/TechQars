import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = ['Image1.jpg', 'Image2.jpg', 'Image3.jpg', 'Image4.jpg' ,'image5.jpeg' , 'image6.jpg',
'image7.jpg', 'image8.jpg' ,'image9.jpg'];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Auto slide
    autoplaySpeed: 1600,  // Auto slide every 2 seconds (2000 milliseconds)
  };

  return (
    <div className='md:max-w-4xl mx-auto'>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-8 text-cyan-600 text-center'>Our Projects</h1>
      <Slider {...settings} className='shadow-lg '>
        {images.map((image, index) => (
          <div key={index} className=''>
            <img className='w-full md:h-[60vh] h-[35vh] rounded-2xl' src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;