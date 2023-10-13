import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>;
};
