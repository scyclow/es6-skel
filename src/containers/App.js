import React from 'react';
import { connect } from 'react-redux';
import { doSomething } from '../actions';

@connect(state => ({ something: state.something.something }))
class App extends React.Component {
  click() {
    const { dispatch, something } = this.props;
    dispatch(doSomething(something + 'a'))
  }

  render() {
    const { something } = this.props;

    return (
      <div className="thing" onClick={this.click.bind(this)}>
        <span className="bleh">+++</span> { something }
      </div>
    );
  }
}

export default App;
