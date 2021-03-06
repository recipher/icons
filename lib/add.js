import React, { Component } from 'react';
import Icon from './icon';

@Icon()
export default class Add extends Component {
  render() {
    return (
      <g>
        <path d='M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8c4.4,0,8,3.6,8,8S16.4,20,12,20z'></path>
        <path d='M13,11V8h-2v3H8v2h3v3h2v-3h3v-2H13z'></path>
      </g>
    );
  }
};
