import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  background-color: cornflowerblue;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  /* margin-bottom: 10px; */

  transition: box-shadow 250ms, background-color 250ms;
  &:hover,
  :focus {
    box-shadow: 1px 1px 5px black;
    background-color: royalblue;
  }
`;
