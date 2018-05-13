import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

import Wrapper from './Wrapper';
import Title from './Title';
import Body from './Body';
import Delete from './Delete';
import Counter from './Counter';

class IdeaItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      data: props.idea,
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.checkBody = this.checkBody.bind(this);
  }

  componentDidMount() {
    const { action } = this.props;
    // console.log(this.title)
    if (action === 'new') {
      // focus
      this.title.focus();
    }
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

  checkBody(event) {
    if (event.target.value.length > 140) {
      return;
    }
    this.handleChange('body', event.target.value);
  }

  render() {
    return (
      <Wrapper onMouseEnter={() => { this.handleOver(true); }} onMouseLeave={() => { this.handleOver(false); }}>
        <Delete visible={this.state.hover} onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTimes} style={{ height: '32px', width: '32px', padding: '7px', color: '#fff' }} />
        </Delete>
        <Title innerRef={(title) => { this.title = title; }} placeholder="Title" value={this.state.data.title} onChange={(event) => this.handleChange('title', event.target.value)} onBlur={this.handleBlur} />
        <Body placeholder="Your text..." value={this.state.data.body} onChange={this.checkBody} onBlur={this.handleBlur} />
        <Counter count={this.state.data.body ? this.state.data.body.length : 0}>{this.state.data.body ? (140 - this.state.data.body.length) : 0} left</Counter>
      </Wrapper>
    );
  }
}

IdeaItem.propTypes = {
  idea: PropTypes.object,
  action: PropTypes.string,
  saveIdea: PropTypes.any,
  deleteIdea: PropTypes.any,
};

export default IdeaItem;
