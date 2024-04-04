import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const JumpingImage = ({image}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // Trigger when 50% of the image is visible
  });

  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'left' }}>
      <img
        src={image}
        alt="Jumping Image"
        style={{
          transform: `translateX(${isVisible ? 0 : '-100vw'})`,
          transition: 'transform 1s',
          width: '200px',
          height: '200px',
          filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))'
        }}
      />
    </div>
  );
};

export default JumpingImage;
