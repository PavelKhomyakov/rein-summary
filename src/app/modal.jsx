import React, { useState } from 'react';

const OpenWindow = ({text}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleNewsModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div>
            <button onClick={toggleNewsModal}>
                {showModal ? "Закрыть" : "Странное происшествие"}
            </button>
            {showModal && (
                <div>
                    <div className="text-block">{text}</div>
                </div>
            )}
        </div>
    );
};

export default OpenWindow;