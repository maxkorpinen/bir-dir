import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            notes: "",
            rarity: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveObservation = this.saveObservation.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    saveObservation() {
        const newObservation = {
            name: this.state.name,
            notes: this.state.notes,
            rarity: this.state.rarity
        }
        this.props.handleSubmit(newObservation);
    }

    render() {
        return (
            <div>
                Name: <input name="name" onChange={this.handleChange}></input><br></br>
                Notes: <input name="notes" onChange={this.handleChange}></input><br></br>
                Rarity: <input name="rarity" onChange={this.handleChange}></input><br></br>
                <button onClick={this.saveObservation}>Send</button>
            </div>
        )
    }
}
