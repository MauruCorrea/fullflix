import { useSelector } from 'react-redux';
import { MainContrainer } from './Header.style';

export const Header = () => {
  const state = useSelector((state) => state.fullflix.movie);

  return (
    <MainContrainer>
      <p>{state.title}</p>
    </MainContrainer>
  );
};

export default Header;
