import React, { Component } from 'react';

export default class BirdCard extends Component {

    render() {

        let rarity;

        if (this.props.rarity === "common") {
            rarity = "Common";
        } else if (this.props.rarity === "rare") {
            rarity = "Rare";
        } else if (this.props.rarity === "extremelyRare") {
            rarity = "Extremely rare"
        } else {
            rarity = "No data";
        }

        return (
            <div className="card">
                <p className="birdName"><b>{this.props.name}</b></p>
                <p><i>{this.props.date}</i></p>
                <p><b>Rarity:</b> {rarity}</p>
                <p><b>Notes:</b> {this.props.notes}</p>
                <p><b>X:</b> {this.props.latitude}, <b>Y:</b>{this.props.longitude}</p>
            </div>
        )
    }
}
