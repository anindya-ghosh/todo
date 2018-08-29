import React, {Component} from 'react';

export default class Task extends Component {
  constructor (props) {
    super(props);
    this.state = {
      task: this.props.task
    };
  }
  onCompleteTask (e) {
    let task = this.state.task;
    task.complete = e.target.checked;
    this.setState({
      task
    });
    this.props.pendingTaskCount(e.target.checked ? -1 : 1);
  }
  onDestroy () {
    this.props.destroyTask(this.state.task);
  }
  render () {
    return (
      <div className='todo'>
        <input className='toggle' type='checkbox' defaultChecked={this.state.task.complete} onChange={this.onCompleteTask.bind(this)}/>
        <div className='task'>{this.state.task.detail}</div>
        <div className='destroy' onClick={this.onDestroy.bind(this)}>X</div>
      </div>
    );
  }
}