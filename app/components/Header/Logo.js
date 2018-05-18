import styled from 'styled-components';

const Logo = styled.div`
  background-color: #000;
  flex-direction: row;
  display: inline-flex;

  img{
    width: 121px;
    height: 63px;
  }

  div{
    align-self: center;
    margin-right: 15px;
  }

  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

export default Logo;
