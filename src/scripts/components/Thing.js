import React from 'react';

class Thing extends React.Component {
  render() {
    return (
      <div className="thing">
        {this.props.content}
      </div>
    );
  }
}

export default Thing;
