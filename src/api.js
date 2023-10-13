import axios from 'axios';

export async function serviceSearch(currentPage, inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    q: inputValue,
    page: currentPage,
    key: '39170580-8c73c06b0fce5ecb6f9d6ab10',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}
