import React, { Component } from 'react';
import Icon from './icon';

@Icon({ defaultColour: '#fa9b39', viewBox: [ 430, 430 ] })
export default class Rss extends Component {
  render() {
    return (
      <path d='M97.493,332.473c10.419,10.408,16.755,24.525,16.794,40.244c-0.04,15.687-6.375,29.809-16.755,40.17l-0.04,0.019
        c-10.398,10.352-24.603,16.681-40.398,16.681c-15.775,0-29.944-6.348-40.34-16.699C6.384,402.526,0,388.422,0,372.717
        c0-15.719,6.384-29.869,16.754-40.253v0.009c10.401-10.36,24.57-16.735,40.34-16.735C72.89,315.738,87.081,322.131,97.493,332.473z
         M97.493,332.464v0.009c0.019,0,0.019,0,0.019,0L97.493,332.464z M16.754,412.906c0,0,0,0,0-0.019c-0.019,0-0.019,0-0.019,0
        L16.754,412.906z M0.046,146.259v82.129c53.618,0.033,104.328,21.096,142.278,59.104c37.943,37.888,58.917,88.675,59.003,142.477
        h0.028v0.149h82.467c-0.065-78.233-31.866-149.099-83.279-200.549C149.122,178.126,78.285,146.308,0.046,146.259z M0.196,0v82.089
        c191.661,0.14,347.464,156.184,347.594,348.028h82.327c-0.056-118.571-48.248-225.994-126.132-303.932
        C226.073,48.274,118.721,0.051,0.196,0z'/>
    );
  }
};