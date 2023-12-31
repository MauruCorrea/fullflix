import Footer from '../../components/footer/Footer';
import { useEffect, useState } from 'react';
import { getList } from '../../api/api';
import { Grid, MainContrainer, HomeTitle, HomeImage } from './Home.style';
import { Card } from '../../components/cards/Card';

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => getList(setList), 2000);
  }, []);

  return (
    <MainContrainer>
      <HomeImage />

      <HomeTitle>
        <p>Filmes Populares</p>
      </HomeTitle>
      <Grid>
        {list.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </Grid>
      <div>
        <Footer title={'Home'} />
      </div>
    </MainContrainer>
  );
}
// {/* <h1>grid de filmes</h1>
//         {list.map((movie) => (
//           <h2>{movie.title}</h2>
//         ))} */}
export default Home;
