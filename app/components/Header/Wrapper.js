import styled from 'styled-components';
import sky from '../../images/sky.png';

const Wrapper = styled.div`
  width: 100%;
  height: 425px;
  padding-left: 40px;
  background-color: #000000;
  background-image: url(${sky});
  background-repeat: repeat;
  padding-left: 82px;
  padding-right: 82px;
  padding-top: 100px;
  position: relative;
  overflow: hidden;

  span{
    font-size: 72px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    color: #fff;
  }
`;

export default Wrapper;
