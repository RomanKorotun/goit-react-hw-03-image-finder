import { BtnSubmit, SearchForm, SearchFormInput } from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <SearchForm
        onSubmit={evt => {
          evt.preventDefault();
          const { searchQuery } = evt.target.elements;
          onSubmit(searchQuery.value);
          evt.target.reset();
        }}
      >
        <SearchFormInput
          name="searchQuery"
          type="text"
          placeholder="Search images and photos"
        />
        <BtnSubmit type="submit">Search</BtnSubmit>
      </SearchForm>
    </header>
  );
};
