import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

require('../styles/application.scss');

class App extends React.Component {
  render() {
    return (
      <div className="thing">
        {this.props.number}
      </div>
    );
  }
}

render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <App number="fuck ye"/>,

  document.getElementById('app')
);
