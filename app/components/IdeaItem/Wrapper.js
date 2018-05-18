import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  display: flex;
  float: left;
  flex-direction: column;
  flex-basis: auto;
  flex-grow: 1;
  margin-right: 10px;
  margin-top: 10px;
  border: 1px solid #E7EBEB;
  background-color: #fff;
  padding: 10px;
  -webkit-box-shadow: 2px 2px 7px 0px rgba(231,235,235,1);
  -moz-box-shadow: 2px 2px 7px 0px rgba(231,235,235,1);
  box-shadow: 2px 2px 7px 0px rgba(231,235,235,1);
  position: relative;

  &:hover{
    -webkit-box-shadow: 7px 7px 17px 0px rgba(231,235,235,1);
    -moz-box-shadow: 7px 7px 17px 0px rgba(231,235,235,1);
    box-shadow: 7px 7px 17px 0px rgba(231,235,235,1);
  }
`;

export default Wrapper;
