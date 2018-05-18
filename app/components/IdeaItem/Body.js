import styled from 'styled-components';

const Body = styled.textarea`
  font-size: 14px;
  font-weight: 300;
  resize: none;
  height: 95px;

  &:focus{
    border: solid 1px grey;
    outline:0;
  }
`;

export default Body;
