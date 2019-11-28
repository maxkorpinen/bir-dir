import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.sortByDate}>Sort by date</button>
                <button onClick={this.props.sortByName}>Sort by name</button>
            </div>
        )
    }
}
