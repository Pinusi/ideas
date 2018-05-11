import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Wrapper from './Wrapper';
import Title from './Title';
import Body from './Body';
import Delete from './Delete';

class IdeaItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      data: {},
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    const { idea } = this.props;

    this.setState({ data: idea });
  }

  handleChange(key, value) {
    const newForm = Object.assign({}, this.state.data);
    newForm[key] = value;

    this.setState({ data: newForm });
  }

  handleBlur() {
    const { saveIdea } = this.props;

    saveIdea(this.state.data);
  }

  handleDelete() {
    const { deleteIdea } = this.props;

    deleteIdea(this.state.data.id);
  }

  handleOver(_hover) {
    this.setState({
      hover: _hover,
    });
  }

  render() {
    return (
      <Wrapper onMouseEnter={() => { this.handleOver(true); }} onMouseLeave={() => { this.handleOver(false); }}>
        <Delete visible={this.state.hover} onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTimes} style={{ height: '32px', width: '32px', padding: '7px', color: '#fff' }} />
        </Delete>
        <Title value={this.state.data.title} onChange={(event) => this.handleChange('title', event.target.value)} onBlur={this.handleBlur} />
        <Body value={this.state.data.body} onChange={(event) => this.handleChange('body', event.target.value)} onBlur={this.handleBlur} />
      </Wrapper>
    );
  }
}

IdeaItem.propTypes = {
  idea: PropTypes.object,
  saveIdea: PropTypes.any,
  deleteIdea: PropTypes.any,
};

export default IdeaItem;
