import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class User extends Component {
  render() {
    return (
      <path d='M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,5c1.7,0,3,1.3,3,3c0,1.7-1.3,3-3,3c-1.7,0-3-1.3-3-3C9,6.3,10.3,5,12,5z M12,19.2c-2.5,0-4.7-1.3-6-3.2c0-2,4-3.1,6-3.1c2,0,6,1.1,6,3.1C16.7,17.9,14.5,19.2,12,19.2z'></path>
    );
  }
};
