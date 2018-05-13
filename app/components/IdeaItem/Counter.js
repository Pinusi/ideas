import styled from 'styled-components';

const Counter = styled.div`
  font-size: 12px;
  color: grey;
  text-align: right;
  line-height: 20px;
  display: ${(props) => props.count > 125 ? 'block' : 'none'};
`;

export default Counter;
