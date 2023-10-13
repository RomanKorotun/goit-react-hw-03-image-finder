import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ galleryItems }) => {
  return (
    <Gallery>
      {galleryItems.map(({ id, webformatURL }) => (
        <li key={id}>
          <ImageGalleryItem webformatURL={webformatURL} />
        </li>
      ))}
    </Gallery>
  );
};
