import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const JumpingImage = ({ image, width, height, text, name }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9, // Trigger when 90% of the image is visible
    });

    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div ref={ref} style={{ display: 'flex', justifyContent: 'left' }}>
                <img
                    src={image}
                    className={`animate__animated ${isVisible ? 'animate__fadeInLeft' : ''}`}
                    style={{
                        transform: `translateX(${isVisible ? 0 : '-100vw'})`,
                        transition: 'transform 1s',
                        width: width || '200px',
                        height: height || '200px',
                        filter: 'drop-shadow(12px 10px 8px rgba(0, 0, 0, 0.8))'
                    }}
                />
            </div>
            <div className="text-block-glow" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 8s', marginLeft: '20px' }}>
                <h3><b>{name}</b></h3>
                {text}
            </div>
        </div>
    );
};

export default JumpingImage;
