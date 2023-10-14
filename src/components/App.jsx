import React from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { serviceSearch } from 'api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

import { Error } from './Error';
import { Layout } from './Layout';

export class App extends React.Component {
  state = {
    page: 1,
    query: '',
    galleryItems: [],
    loading: false,
    error: false,
    totalHitsCounter: 0,
  };

  handlerSubmit = inputValue => {
    this.setState({
      query: inputValue,
      page: 1,
      galleryItems: [],
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        const { page, query } = this.state;
        this.setState({ loading: true, error: false });
        const data = await serviceSearch(page, query);
        console.log(data);
        this.setState(prevState => ({
          galleryItems: [...prevState.galleryItems, ...data.hits],
          totalHitsCounter: data.totalHits,
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

  hitsCounter = lengthItems => {
    let count = 0;
    return count + lengthItems;
  };

  render() {
    const { query, galleryItems, loading, error, totalHitsCounter } =
      this.state;
    const currentHitsCounter = this.hitsCounter(galleryItems.length);
    return (
      <Layout>
        <SearchBar onSubmit={this.handlerSubmit} />
        {loading && <Loader />}
        {error && <Error>Error! Try reloading the page...</Error>}
        {query !== '' &&
          loading === false &&
          error === false &&
          galleryItems.length === 0 && (
            <Error>Your search did not match anything. Please try again.</Error>
          )}
        {galleryItems.length > 0 && (
          <ImageGallery galleryItems={galleryItems} />
        )}
        {currentHitsCounter > 0 && currentHitsCounter < totalHitsCounter && (
          <Button onLoadMore={this.handlerLoadMore} />
        )}
      </Layout>
    );
  }
}
