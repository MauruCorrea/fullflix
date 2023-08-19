import styled from 'styled-components';
import backgroundImage from '../../img/fullflixImage.png';

export const MainContrainer = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  height: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2vw;
  p {
    font-size: 2vw;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    width: 14vw;
    border-radius: 1.5vw;
    background-color: #c62924;
    color: #fff;
    font-size: 1.5vw;
    text-decoration: none;
    :hover {
      opacity: 0.9;
    }
  }
`;

// export const Grid = styled.div`
//   display: grid;
//   width: 80%;
//   justify-content: center;
//   align-items: center;
//   min-height: 20vh;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   margin: auto;
//   gap: 3vw;
// `;