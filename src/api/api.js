import axios from 'axios';

export const getList = (setState) => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=87e1e2afc9747ccde6f65bfc167be302&language=pt&page=1'
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDetail = (id, setState) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=87e1e2afc9747ccde6f65bfc167be302&language=pt&page=1`
    )
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
