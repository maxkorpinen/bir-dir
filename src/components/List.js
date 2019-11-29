import React, { Component } from 'react';
import BirdCard from './BirdCard';
import Sort from './Sort';

export default class List extends Component {

    render() {

    const birds = this.props.list.map(i => <BirdCard key={i.date} latitude={i.location.latitude} longitude={i.location.longitude} date={i.date} name={i.name} rarity={i.rarity} notes={i.notes} />)

        return (
            <div className="centerAlign">
                <Sort sortByDate={this.props.sortByDate} sortByName={this.props.sortByName}/>
                <div className="flexContainer">
                    {birds}
                </div>
                <button onClick={this.props.clearAll} className="clearBtn">Clear all</button>
            </div>
        )
    }
}
