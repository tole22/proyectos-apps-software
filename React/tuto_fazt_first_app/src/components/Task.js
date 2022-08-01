import React from "react";

import './Task.css';

class Task extends React.Component {
    render() {
        const { task } = this.props;
        return <p className={this.styleCompleted()}>
            {task.title} - {task.description} - {task.done} - {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button onClick={this.props.deleteTask.bind(this, task.id)}>X</button>
        </p>
    }

    styleCompleted(){
        return 'completed'
    }
}

export default Task