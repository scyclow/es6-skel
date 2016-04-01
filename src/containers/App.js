import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Thing from '../components/Thing';

@connect(
  state => ({ something: state.something.something }),
  dispatch => ({
    doSomething: bindActionCreators(actions.doSomething, dispatch)
  })
)
class App extends React.Component {
  click = () => {
    const { doSomething, something } = this.props;
    doSomething(something + 'a');
  }

  render() {
    const { something } = this.props;

    return (
      <Thing
        click={this.click}
        content={something}
      />
    );
  }
}

export default App;
