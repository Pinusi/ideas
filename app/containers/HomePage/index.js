/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';

import IdeaItem from 'components/IdeaItem';
import Wrapper from './Wrapper';
import Add from './Add';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { makeSelectIdeas, makeSelectLoading, makeSelectError } from './selectors';
import { getIdeas, putIdea, deleteIdea } from './actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.saveIdea = this.saveIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
  }

  componentDidMount() {
    const { onGetIdeas } = this.props;

    onGetIdeas();
  }

  saveIdea(newData) {
    const { onSaveIdea } = this.props;

    onSaveIdea(newData);
  }

  deleteIdea(id) {
    const { onDeleteIdea } = this.props;

    onDeleteIdea(id);
  }

  render() {
    const { ideas } = this.props;

    return (
      <Wrapper>
        {
          ideas.map((idea) =>
            <IdeaItem key={`idea-${idea.id}`} idea={idea} saveIdea={this.saveIdea} deleteIdea={this.deleteIdea} />
          )
        }
        <Add>
          <FontAwesomeIcon icon={faPlus} style={{ height: '60px', width: '60px', padding: '15px', color: '#fff' }} />
        </Add>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  ideas: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  onGetIdeas: PropTypes.func,
  onSaveIdea: PropTypes.func,
  onDeleteIdea: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onGetIdeas: () => dispatch(getIdeas()),
    onSaveIdea: (payload) => dispatch(putIdea(payload)),
    onDeleteIdea: (id) => dispatch(deleteIdea(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  ideas: makeSelectIdeas(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
