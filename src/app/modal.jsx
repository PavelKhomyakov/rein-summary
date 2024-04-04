import React, { useState } from 'react';

const LatestNewsButton = () => {
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
                    <div className="text-block">В Клетке герои встречают старика. Он рассказывает, что уже очень долгое время ждёт свою маму и просит посадить его обратно в историю, как это было с чёрным монстром. Увы, Мама ничем не может ему помочь. По её словам он был изгнан из истории. Старик явно знал девочку и чёрного монстра и разговаривал словно ребёнок.</div>
                </div>
            )}
        </div>
    );
};

export default LatestNewsButton;