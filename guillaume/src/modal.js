import './style/modal.css';

const Modal = ({ handleClose, show, show2, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const showHideClassName2 = show2 ? "modal display-block" : "modal display-none";

  return (
    <div>
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button id="button_modal" type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
};

export default Modal;