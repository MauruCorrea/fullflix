import { useState } from 'react';
import { MainContrainer } from './Card.style';
import { useDispatch } from 'react-redux';
import { getMovieInfo } from '../../redux/fullflixSlice';
import { getDetail } from '../../api/api';
import { useEffect } from 'react';

export const Card = ({ movie }) => {
  const [movieDetail, setMovieDetail] = useState();
  const dispatch = useDispatch();

  dispatch(getMovieInfo());

  const onHoverDetail = (e) => {
    getDetail(e.target.id, setMovieDetail);
  };

  useEffect(() => {
    dispatch(getMovieInfo(movieDetail));
  }, [movieDetail]);

  return (
    <MainContrainer to={'detail'} id={movie.id} onMouseEnter={onHoverDetail}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        id={movie.id}
      />
      <div className='infoContainer'>
        <h4>Titulo: {movie.title}</h4>
        <h4>Nota: {movie.vote_average}</h4>
      </div>
    </MainContrainer>
  );
};
