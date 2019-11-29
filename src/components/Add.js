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
            name: this.state.name.toUpperCase(),
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
            newObservation.location.longitude = position.coords.longitude;

        }

        getLocation();

        if(this.state.name !== "") {
            /* Seems like I have a problem with asynchronicity, but for now I have solved it with timeout... */
            setTimeout((this.props.handleSubmit(newObservation)), 500)
            this.clearFields();
            document.getElementById("successMessage").innerHTML = "Observation recorded!"
        } else {
            window.alert("Don't forget to add the name of the species :)")
        }
    }

    render() {
        return (
            <div className="flexContainer">
            <div className="card">
                <div className="inputItem">
                    Name: <input className="textInput" id="nameField" required="required" name="name" onChange={this.handleChange}></input><br></br>
                </div>

                <div className="inputItem">
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
                </div>

                <div className="inputItem">
                Notes: <input className="textInput" id="notesField" name="notes" onChange={this.handleChange}></input><br></br>
                </div>

                <button onClick={this.saveObservation}>Add</button>
                <button onClick={this.clearFields}>Clear</button>
                <div id="successMessage"></div>
            </div>
            </div>
        )
    }
}
