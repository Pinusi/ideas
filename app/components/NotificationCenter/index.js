import React from 'react';
import PropTypes from 'prop-types';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Wrapper from './Wrapper';

class NotificationCenter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loadingData && nextProps.action !== 'loaded') {
      this.toggleVisibility();
      setTimeout(() => {
        this.toggleVisibility();
      }, 1000);
    }
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <Wrapper visible={this.state.visible}>Your ideas have been updated!</Wrapper>
    );
  }
}

NotificationCenter.propTypes = {
  action: PropTypes.string,
  loadingData: PropTypes.bool,
};

export default NotificationCenter;
