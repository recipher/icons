import React, { Component } from 'react';
import Icon from './icon';

@Icon({ viewBox: [ 100, 100 ] })
export default class Spinner extends Component {
  render() {
    return (
      <g transform='translate(50 50)'>
        <g transform='rotate(0) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(45) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.12s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.12s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(90) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.25s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.25s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(135) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.37s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.37s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(180) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.5s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.5s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(225) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.62s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.62s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(270) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.75s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.75s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
        <g transform='rotate(315) translate(34 0)'>
          <circle cx='0' cy='0' r='8' fill='#000'>
            <animate attributeName='opacity' from='1' to='0.1' begin='0.87s' dur='1s' repeatCount='indefinite'></animate>
            <animateTransform attributeName='transform' type='scale' from='1.5' to='1' begin='0.87s' dur='1s' repeatCount='indefinite'></animateTransform>
          </circle>
        </g>
      </g>
    );
  }
};
