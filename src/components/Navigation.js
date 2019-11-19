import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    NavLink
} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add">Add</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
