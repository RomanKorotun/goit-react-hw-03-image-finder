import React from 'react';
import { PhotoCard } from './ImageGalleryItem.styled';
import { ModalContainer } from 'components/Modal/Modal';

// export const ImageGalleryItem = ({ webformatURL }) => {
//   return (
//     <PhotoCard>
//       <img
//         src={webformatURL}
//         alt=""
//         loading="lazy"
//         width="334"
//         height="270"
//       ></img>
//     </PhotoCard>
//   );
// };

export class ImageGalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { webformatURL } = this.props;
    const { isModalOpen } = this.state;
    return (
      <PhotoCard onClick={this.openModal}>
        <img
          onClick={this.openModal}
          src={webformatURL}
          alt=""
          loading="lazy"
          width="334"
          height="270"
        ></img>
        <ModalContainer
          isOpenModalOpen={isModalOpen}
          onCloseModal={this.closeModal}
        />
      </PhotoCard>
    );
  }
}
