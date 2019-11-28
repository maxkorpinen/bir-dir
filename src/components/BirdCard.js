import React, { Component } from 'react';

export default class BirdCard extends Component {

    render() {
        return (
            <div className="card">
                <p><b>{this.props.name}</b></p>
                <p><i>{this.props.date}</i></p>
                <p><b>Rarity:</b> {this.props.rarity}</p>
                <p><b>Notes:</b> {this.props.notes}</p>
                <p><b>X:</b> {this.props.latitude}, <b>Y:</b>{this.props.longitude}</p>
            </div>
        )
    }
}
