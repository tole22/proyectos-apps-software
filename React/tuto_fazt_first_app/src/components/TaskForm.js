import React from "react";

export default class TaskForm extends React.Component {

    state = {
        title: '',
        descripcion: ''
    }

    onSubmit = (event) => {
        this.props.addTask(this.state.title, this.state.descripcion);
        event.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Write a Taks" onChange={this.onChange} value={this.state.title}/>
                <br/><br/>
                <textarea placeholder="Write a Description" name="descripcion" onChange={this.onChange} value={this.state.descripcion}/>
                <br/>
                <input type="submit" placeholder="Save a Task" />
            </form>
        )
    }
}