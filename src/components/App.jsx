import React from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { serviceSearch } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Error, Info } from './Message';
import { Layout } from './Layout';

export class App extends React.Component {
  state = {
    page: 1,
    query: '',
    galleryItems: [],
    loading: false,
    error: false,
    isEmpty: false,
    showLoadMode: false,
  };

  handlerSubmit = inputValue => {
    this.setState({
      query: inputValue,
      page: 1,
      galleryItems: [],
      showLoadMode: false,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const { page, query } = this.state;
        this.setState({
          loading: true,
          error: false,
          isEmpty: false,
        });

        const data = await serviceSearch(page, query);

        if (data.hits.length === 0) {
          this.setState({
            isEmpty: true,
          });
        }

        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...data.hits],
          showLoadMode: page < Math.ceil(data.totalHits / 12),
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handlerLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { galleryItems, loading, error, isEmpty, showLoadMode } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handlerSubmit} />

        {error && <Error>Error! Try reloading the page...</Error>}
        {isEmpty && (
          <Info>Your search did not match anything. Please try again.</Info>
        )}
        {galleryItems.length > 0 && (
          <ImageGallery galleryItems={galleryItems} />
        )}
        {(loading && <Loader />) ||
          (showLoadMode && <Button onLoadMore={this.handlerLoadMore} />)}
      </Layout>
    );
  }
}
