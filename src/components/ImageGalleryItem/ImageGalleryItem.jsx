import { PhotoCard } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <PhotoCard>
      <img
        src={webformatURL}
        alt=""
        loading="lazy"
        width="334"
        height="270"
      ></img>
    </PhotoCard>
  );
};
