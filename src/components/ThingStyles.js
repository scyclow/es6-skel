import { StyleSheet } from 'react-look';
import base from '../styles/base';
import sample from 'lodash';

export default StyleSheet.create({
  thing: {
    backgroundColor: base.blue,
  },

  bleh: {
    color: 'blue',

    ':nth-child(2)': {
      color: base.green
    }
  }
});
