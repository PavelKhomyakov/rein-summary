import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const JumpingImage = ({ image, width, height, text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9, // Trigger when 50% of the image is visible
    });

    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <div ref={ref} style={{ display: 'flex', justifyContent: 'left' }}>
                <img
                    src={image}
                    style={{
                        transform: `translateX(${isVisible ? 0 : '-100vw'})`,
                        transition: 'transform 1s',
                        width: width || '200px',
                        height: height || '200px',
                        filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))'
                    }}
                />
            </div>
            <div className="text-block-glow" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 8s', marginLeft: '20px' }}>
                {text}
            </div>
        </div>
    );
};

export default JumpingImage;
