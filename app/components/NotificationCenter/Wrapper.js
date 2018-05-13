import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${(props) => props.visible ? 'block' : 'none'};
  opacity: ${(props) => props.visible ? '1' : '0'};
  width: 100%;
  color: white;
  background-color: #29A1F7;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  border-bottom: 1px solid #E7EBEB;
  -webkit-transition: opacity 2s; /* Safari */
  transition: opacity 2s;
`;

export default Wrapper;
