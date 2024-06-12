import { Fade, IconButton, Slide } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
const Modal = ({
  children,
  closeModal,
  openModal = true,
  isCancel = true,
  title,
  className = "",
}) => {
  return (
    <Fade in={openModal}>
      <div
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        className="pd-modal"
      >
        <Slide direction="up" in={openModal} mountOnEnter unmountOnExit>
          <div className={`popBox2 ${className}`}>
            <p className="title">{title}</p>
            {isCancel && (
              <IconButton className="close-modal-icon" onClick={closeModal}>
                <ClearIcon />
              </IconButton>
            )}
            {children}
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default Modal;
