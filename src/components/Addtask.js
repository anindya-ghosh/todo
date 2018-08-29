import React, {Component} from 'react';

class Addtask extends Component {
  constructor (props) {
    super(props);
    this.state = {
      taskDetail: ''
    }
  }
  addTaskHandler (e) {
    if (e.which == 13 || e.keyCode == 13) {
      this.props.taskInfo(e.target.value);
      e.target.value = '';
    }
  }
  reset () {
    this.setState({
      taskDetail: ''
    });
  }
  render () {
    return (
      <div className={this.props.className}>
        <input className='add' type='text' placeholder='What needs to be done?' onKeyPress={this.addTaskHandler.bind(this)}/>
      </div>
    );
  }
}

export default Addtask;