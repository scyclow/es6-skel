import React from 'react';
import { connect } from 'react-redux';
import { doSomething } from '../actions';

@connect(state => state)
class App extends React.Component {
  click() {
    const { dispatch, something } = this.props;
    dispatch(doSomething(something.something + 'a'))
  }

  render() {
    const { something } = this.props;

    return (
      <div onClick={this.click.bind(this)}>
        + { something.something }
      </div>
    );
  }
}

export default App;
