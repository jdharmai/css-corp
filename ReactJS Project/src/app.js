import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  static defaultProps = {
    caption: 'Great day...',
  };

  test() {}

  render() {
    const { title, caption } = this.props;
    return (
      <>
        <h1>{title}</h1>
        <h2>{caption}</h2>
      </>
    );
  }
}

export default App;
