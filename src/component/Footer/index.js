import React from 'react';
import Social from './social'
import './style.css';

export default class Footer extends React.Component {
    render() {
        return (
        <div className="Footer">
            <span>Copyright © 2019, Jan Dave Arce </span>
            <Social />
        </div>
        );
    }
}