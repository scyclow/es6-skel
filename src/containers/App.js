import React from 'react';

class App extends React.Component {
  state = { bleh: 0 }

  click() {
    console.log('clicked')
    let bleh = this.state.bleh + 20;
    this.setState({ bleh })
  }

  render() {
    return (
      <div onClick={this.click.bind(this)}>
        {this.props.thing} + { this.state.bleh }
      </div>
    );
  }
}

export default App;
