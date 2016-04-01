import React from 'react';
import look from 'react-look';
import styles from './ThingStyles';

@look
class Thing extends React.Component {
  render() {
    const { click, content } = this.props;

    return (
      <div className={styles.thing} onClick={click}>
        <span className={styles.bleh}>+++</span>
        <span className={styles.bleh}>+++</span>
        {content}
        <span className={styles.bleh}>+++</span>
      </div>
    );

  }
}

export default Thing;
