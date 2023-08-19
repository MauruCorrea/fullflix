import styled from 'styled-components';
import backgroundImage from '../../img/fullflixImage.png';

export const MainContrainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  font-size: 2vw;
`;

export const Part1 = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
`;

export const Part2 = styled.div`
  height: 10vh;
  font-size: 4vh;
  padding-left: 2vw;
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  justify-content: center;
  align-items: center;
  min-height: 20vh;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  gap: 3vw;
`;
