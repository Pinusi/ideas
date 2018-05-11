import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';

import messages from './messages';

function Header() { // eslint-disable-line react/prefer-stateless-function
  return (
    <Wrapper>
      <FormattedMessage {...messages.title} />
    </Wrapper>
  );
}

export default Header;
