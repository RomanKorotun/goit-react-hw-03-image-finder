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
  isModalOpen,
  onCloseModal,
  largeImageURL,
  tags,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt={tags} width="850" height="526"></img>
    </Modal>
  );
};
