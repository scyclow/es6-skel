import React from 'react';
import Thing from '../components/Thing';

import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Thing content={this.props.count} />
    );
  }
}

const select = (state) => {
  return { count: state.bleh.count };
};

export default connect(select)(App);
