import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            username: ''
        }

        this.updateInput = this.updateInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateInput(event) {
        this.setState ({
            username: event.target.value
        })
    }

    handleSubmit() {
        console.log(
            'Your Input Value Is:' + this.state.username
        )
        // Send State to the Server Code
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.updateInput}></input>
                <button type="submit" onClick={this.handleSubmit}></button>
                <p>{this.state.username}</p>
            </div>
        )
    }

}

export default Form;