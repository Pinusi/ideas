import React from 'react';

import Wrapper from './Wrapper';
import Houses from './Houses';
import Logo from './Logo';

import planet from '../../images/planet.png';

function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <Wrapper>
      <Logo>
        <div>
          <img alt="Ideas" src={planet} />
        </div>
        <span>ideas</span>
      </Logo>
      <Houses></Houses>
    </Wrapper>
  );
}

export default Header;
