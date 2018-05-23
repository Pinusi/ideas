import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Wrapper from './Wrapper';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setFilter(filter) {
    const { onFilter } = this.props;

    this.toggleVisibility();
    onFilter(filter);
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.visible) {
      this.toggleVisibility();
    }
  }

  render() {
    const { filterSelected, filterOptions } = this.props;

    return (
      <Wrapper innerRef={(node) => { this.wrapperRef = node; }} visible={this.state.visible}>
        <div tabIndex="0" role="button" onClick={this.toggleVisibility}>
          <span className="filterName">{filterOptions[filterSelected]}</span>
          <span className="arr"></span>
        </div>
        <ul>
          {
            Object.keys(filterOptions).map((filter) =>
              <li key={`filter-${filter}`}><a tabIndex="0" role="button" onClick={() => this.setFilter(filter)}>{filterOptions[filter]}</a></li>
            )
          }
        </ul>
      </Wrapper>
    );
  }
}

Filter.propTypes = {
  filterSelected: PropTypes.string,
  onFilter: PropTypes.any,
  filterOptions: PropTypes.any,
};

export default Filter;
