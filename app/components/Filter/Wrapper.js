import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  font-size: 16px;
  right: 20px;
  top: 20px;
  outline: none;
  cursor: pointer;
  border: solid 2px #D8585C;
  text-transform: uppercase;
  line-height: 40px;
  background: #D8585C;
  z-index: 100000;

  ul{
    margin: 0px;
    padding: 0px;
    display: ${(props) => props.visible ? 'block' : 'none'};
  }

  .filterName{
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    padding-right: 40px;
  }

  li{
    list-style: none;
    color: #000;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;

    &:hover{
      background-color: #D8585C;
      color: #fff;
    }
  }

  a{
    display: block;
  }

  .arr {
    background: #D8585C;
    position: absolute;
    right: -10px;
    top: 15px;
    pointer-events: none;
    height: 10px;
  }

  .arr:before {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    margin-top: -5px;
    pointer-events: none;
    border-top: 10px solid #fff;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }

  .arr:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 28px;
    margin-top: -5px;
    pointer-events: none;
    border-top: 6px solid #D8585C;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
`;

export default Wrapper;
