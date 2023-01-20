import styled from 'styled-components';
import image from '../../../public/images/bg_image_large.png';
import { theme } from '../../style/theme';

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${image});
  background-size: 80px;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h2 {
    width: 100%;
    font-family: 'Exo2.0', sans-serif;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 1px 1px #000000;
    margin-bottom: 40px;
  }
  & ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
  @media (max-width: ${theme.screensWidth.tablet}) {
    height: 100%;
    & > h2 {
      margin-top: 40px;
    }
    & ul {
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
  @media (max-width: ${theme.screensWidth.mobile}) {
    height: 100%;
    & > h2 {
      margin-top: 40px;
    }
    & ul {
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
`;
