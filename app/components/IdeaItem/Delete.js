import styled from 'styled-components';

const Delete = styled.div`
  background-color: #F88C75;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  position: absolute;
  top: -10px;
  left: -10px;
  cursor: pointer;
  display: ${(props) => props.visible ? 'block' : 'none'};
`;

export default Delete;
