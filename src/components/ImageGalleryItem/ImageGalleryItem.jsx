import React from 'react';
import { PhotoCard } from './ImageGalleryItem.styled';
import { ModalContainer } from 'components/Modal/Modal';

export class ImageGalleryItem extends React.Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <PhotoCard>
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          alt={tags}
          loading="lazy"
          width="334"
          height="270"
        />
        <ModalContainer
          largeImageURL={largeImageURL}
          isModalOpen={isModalOpen}
          onCloseModal={this.toggleModal}
          tags={tags}
        />
      </PhotoCard>
    );
  }
}
