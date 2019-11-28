import React, { Component } from 'react';

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
        this.clearFields = this.clearFields.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    clearFields() {
        document.getElementById("nameField").value = "";
        document.getElementById("notesField").value = "";
        
        this.setState({
            rarity: ""
        })
    }

    saveObservation() {
        // const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: 'numeric' };

        let newObservation = {
            name: this.state.name,
            notes: this.state.notes,
            rarity: this.state.rarity,
            // date: new Date().toLocaleDateString('fi-FI', dateOptions)
            date: new Date().toUTCString(),
            location: {
                latitude: "",
                longitude: ""
            }
        }

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(savePosition);
            } else {
                console.log("Your browser doesn't support the HTML Geolocation API.");
            }
        }

        function savePosition(position) {
            newObservation.location.latitude = position.coords.latitude;
            newObservation.location.longitude = position.coords.longitude
        }

        getLocation();
        
        this.props.handleSubmit(newObservation);

        this.clearFields();
    }

    render() {
        return (
            <div>
                Name: <input id="nameField" name="name" onChange={this.handleChange}></input><br></br>
                Notes: <input id="notesField" name="notes" onChange={this.handleChange}></input><br></br>

                Rarity:
                <div className="radio">
                    <label>
                        <input type="radio" name="rarity" value="common" onChange={this.handleChange} checked={this.state.rarity === 'common'} />
                        Common
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="rarity" value="rare" onChange={this.handleChange} checked={this.state.rarity === 'rare'} />
                        Rare
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="rarity" value="extremelyRare" onChange={this.handleChange} checked={this.state.rarity === 'extremelyRare'} />
                        Extremely rare
                    </label>
                </div>

                <button onClick={this.saveObservation}>Send</button>
            </div>
        )
    }
}
