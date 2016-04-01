import React from 'react';

class Thing extends React.Component {
  render() {
    const { click, content } = this.props;

    return (
      <div className="thing" onClick={click}>
        <span className="bleh">+++</span> {content}
      </div>
    );

  }
}

export default Thing;
