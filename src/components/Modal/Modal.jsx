import { useState } from 'react';
import modal from './Modal.module.css';
const Modal = ({ videoToggleStyle }) => {
  const [isControlled, setIsControlled] = useState(false);
  const handleVideoControlMouseEnter = () => {
    if (isControlled === true) {
      setIsControlled(false);
    }
  };

  const handleVideoControlMouseLeave = () => {
    if (isControlled === false) {
      setIsControlled(true);
    }
  };

  return (
    <section
      className={modal.section}
      style={videoToggleStyle}
      onMouseLeave={handleVideoControlMouseLeave}
      onMouseEnter={handleVideoControlMouseEnter}
    >
      <div className={modal.modal}>
        <video
          src="https://res.cloudinary.com/bizstak/video/upload/v1654334058/VideoAbout_o5royr.mp4"
          controls={!isControlled}
          muted={isControlled}
        >
          Video not supported
        </video>
      </div>
    </section>
  );
};

export default Modal;
