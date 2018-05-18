import styled from 'styled-components';

const Delete = styled.div`
  background-color: #D8585C;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  position: absolute;
  top: -15px;
  left: -15px;
  cursor: pointer;
  display: ${(props) => props.visible ? 'block' : 'none'};
`;

export default Delete;
