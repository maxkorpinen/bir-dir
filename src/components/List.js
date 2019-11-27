import React, { Component } from 'react'

export default class List extends Component {

    render() {

    const items = this.props.list.map(i => <li key={i.name}>{i.name}, {i.rarity}</li>)

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}
