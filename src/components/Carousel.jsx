import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const images = [
  'https://e1.pxfuel.com/desktop-wallpaper/758/359/desktop-wallpaper-man-standing-on-mountain-man-on-top-of-mountain.jpg',
  'https://i.pinimg.com/originals/d6/0e/30/d60e305758fd2978b977aa2f43ea6469.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/758/359/desktop-wallpaper-man-standing-on-mountain-man-on-top-of-mountain.jpg',
  'https://media.istockphoto.com/id/513247652/photo/panoramic-beautiful-view-of-mount-ama-dablam.jpg?s=612x612&w=0&k=20&c=5MWcvFfiJzmxMZ6olmyd14Q-OskUmbg33KS8LwFnb_0=',
  'https://e1.pxfuel.com/desktop-wallpaper/758/359/desktop-wallpaper-man-standing-on-mountain-man-on-top-of-mountain.jpg',
  'https://i.pinimg.com/originals/d6/0e/30/d60e305758fd2978b977aa2f43ea6469.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/758/359/desktop-wallpaper-man-standing-on-mountain-man-on-top-of-mountain.jpg',
];

const Carousel = () => {
  const responsive = {
    0: {
      items: 1
    },
    1024: {
      items: 4
    }
  };

  return (
    <AliceCarousel
      responsive={responsive}
      autoPlay
      autoPlayInterval={3000}
      infinite
      mouseTracking
      disableButtonsControls
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-[160px] p-2" />
      ))}
    </AliceCarousel>
  );
};

export default Carousel;
