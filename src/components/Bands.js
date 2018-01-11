import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const list = this.props.store.getState().bands.map((band, index) => (
      <li key={index}>{band}</li>
    ))
    return (
      <ul>
        {list}
      </ul>
    );
  }
};

export default Bands;
