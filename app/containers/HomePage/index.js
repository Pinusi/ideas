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
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

import NotificationCenter from 'components/NotificationCenter';
import IdeaItem from 'components/IdeaItem';
import Filter from 'components/Filter';
import Wrapper from './Wrapper';
import Ideas from './Ideas';
import Add from './Add';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { makeSelectIdeas, makeSelectLoading, makeSelectError, makeSelectAction, makeSelectFilter } from './selectors';
import { getIdeas, putIdea, deleteIdea, postIdea, filterIdeas } from './actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.saveIdea = this.saveIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
    this.addIdea = this.addIdea.bind(this);
    this.filterIdeas = this.filterIdeas.bind(this);
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

  addIdea() {
    const { onAddIdea } = this.props;

    onAddIdea();
  }

  filterIdeas(filter) {
    const { onFilterIdeas } = this.props;
    // console.log(filter)
    onFilterIdeas(filter);
  }

  render() {
    const { ideas, action, loading, filter } = this.props;
    // console.log('ideas', ideas)
    return (
      <Wrapper>
        <Add onClick={this.addIdea}>
          <FontAwesomeIcon className="icon" icon={faPlusCircle} />
        </Add>
        <NotificationCenter loadingData={loading} action={action} />
        <Ideas>
          <Filter
            filterSelected={filter}
            onFilter={this.filterIdeas}
            filterOptions={{
              title: 'Title',
              created_date: 'Creation Date',
            }}
          />
          {ideas &&
            ideas.toJS().map((idea, index) => {
              // console.log('idea', idea, index)
              return <IdeaItem key={`idea-${idea.id}`} idea={idea} action={action} saveIdea={this.saveIdea} deleteIdea={this.deleteIdea} />
            })
          }
        </Ideas>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  ideas: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  action: PropTypes.string,
  loading: PropTypes.bool,
  filter: PropTypes.string,
  onGetIdeas: PropTypes.func,
  onSaveIdea: PropTypes.func,
  onDeleteIdea: PropTypes.func,
  onAddIdea: PropTypes.func,
  onFilterIdeas: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onGetIdeas: () => dispatch(getIdeas()),
    onSaveIdea: (payload) => dispatch(putIdea(payload)),
    onDeleteIdea: (id) => dispatch(deleteIdea(id)),
    onAddIdea: () => dispatch(postIdea()),
    onFilterIdeas: (filter) => dispatch(filterIdeas(filter)),
  };
}

const mapStateToProps = createStructuredSelector({
  ideas: makeSelectIdeas(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  action: makeSelectAction(),
  filter: makeSelectFilter(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
