import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -42%)',
  },
};

Modal.setAppElement('#root');

export const ModalContainer = ({
  isOpenModalOpen,
  onCloseModal,
  largeImageURL,
}) => {
  return (
    <Modal
      isOpen={isOpenModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt="" width="850" height="526"></img>
    </Modal>
  );
};
