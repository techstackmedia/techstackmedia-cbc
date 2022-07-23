import modal from './Modal.module.css';
const Modal = ({ videoToggleStyle }) => {

  return (
    <section className={modal.section} style={videoToggleStyle}>
      <div className={modal.modal}>
        <video
          src="https://res.cloudinary.com/bizstak/video/upload/v1654334058/VideoAbout_o5royr.mp4"
          controls
        >
          Video not supported
        </video>
      </div>
    </section>
  );
};

export default Modal;
