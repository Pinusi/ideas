import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Title from './Title';
import Body from './Body';

function IdeaItem(props) {
  return (
    <Wrapper>
      <Title>{props.idea.title}</Title>
      <Body>{props.idea.body}</Body>
    </Wrapper>
  );
}

IdeaItem.propTypes = {
  idea: PropTypes.any,
};

export default IdeaItem;
