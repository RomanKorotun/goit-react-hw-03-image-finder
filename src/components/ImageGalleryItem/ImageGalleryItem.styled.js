import styled from 'styled-components';

export const PhotoCard = styled.div`
  border-radius: 5px;
  border: 1px solid #000000;
  overflow: hidden;
  transition: box-shadow 250ms, transform 250ms;
  &:hover,
  :focus {
    box-shadow: 1px 1px 20px black;
    transform: scale(1.03);
  }
`;
