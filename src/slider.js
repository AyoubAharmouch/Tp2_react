import React, { useRef, useState } from 'react';
import './slider.css';
import img1 from './comp/img1.jpg';
import img2 from './comp/img2.jpg';
import img3 from './comp/img3.jpg';
import img4 from './comp/img4.jpg';
import img5 from './comp/img5.jpg';
import img6 from './comp/img6.jpg';

const Page = () => {
  let imgref = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const foto = [img1, img2, img3, img4, img5, img6];

  const prev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? foto.length - 1 : prevIndex - 1));

  };

  const next = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === foto.length - 1 ? 0 : prevIndex + 1));

  };

  return (
    <div className="alles">
      <div className="imgss">
        <div className="prev" onClick={prev}>
          <img src="prev.png" className='b' alt="Previous" />
        </div>
        <div className="erstimg" ref={imgref}>
          {foto.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`}       style={{ display: index === currentImageIndex ? 'block' : 'none' }}            />
          ))}
        </div>
        <div className="next"  onClick={next}>
          <img src="next.png" className='b' alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Page;
