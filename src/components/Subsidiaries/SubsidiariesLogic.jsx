import { useState } from 'react';

const SubsidiariesLogic = () => {
  const [cardFlip, setCardFlip] = useState({
    transform: 'rotateY(0)',
    transformStyle: 'preserve-3d',
    backgroundColor: undefined,
  });
  const [isCardFlip, setIsCardFlip] = useState(false);

  const handleCardClickFlip = () => {
    setCardFlip((prev) => {
      return {
        ...prev,
        transform: 'rotateY(180deg)',
        backgroundColor: 'transparent',
      };
    });
  };

  const handleCardClickIsFlipped = () => {
    setIsCardFlip((prev) => {
      return !prev;
    });
  };

  const flipped = isCardFlip ? <h3>CBC GEDU TECHNOLOGIES</h3> : <h3>Hello</h3>;
  return <div>SubsidiariesLogic</div>;
};

export default SubsidiariesLogic;
