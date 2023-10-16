import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 100%;
  z-index: 100;
  background-image: linear-gradient(#00f, #ff0);
  justify-content: center;
  gap: 2px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SearchFormInput = styled.input`
  width: 300px;
  height: 34px;
`;

export const BtnSubmit = styled.button`
  transition: background-color 250ms;
  &:hover,
  :focus {
    background-color: darkgray;
  }
`;
