import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { Grid, MainContrainer, RightSide } from './Detail.style';
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';

function Detail() {
  const state = useSelector((state) => state.fullflix.movie);

  return (
    <MainContrainer>
      <Header />
      <Grid>
        <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt={state.title} />
        <RightSide>
          <p>
            <b>Titulo:</b> {state.title}
          </p>
          <p>
            <b>Sinopse:</b> {state.overview}
          </p>
          <p>
            <b>Data de Lançamento:</b> {state.release_date}
          </p>
          <p>
            <b>Nota:</b> {state.note_average}
          </p>
          <Link to={'/'}>Voltar Para Home </Link>
        </RightSide>
      </Grid>
      <Footer title={'Detail Footer'} />
    </MainContrainer>
  );
}

export default Detail;
