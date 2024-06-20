import axios from 'axios';
export async function fetchImages(searchDescription, page, limit) {

    const response = await axios.get('https://pixabay.com/api/', {
    
      params: {
      key: '44326586-33d8e1982942c3360c5af8426',
      q: encodeURIComponent(searchDescription),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: limit,
      },
    });
    return response.data;
};

    