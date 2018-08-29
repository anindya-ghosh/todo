import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <div className='status'>
          <div className='value'>{this.props.nActiveTasks}</div>
          <div className='stub'> item left</div>
        </div>
      </div>      
    );
  }
}
export default Footer;