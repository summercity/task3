import React from 'react';
import './style.css';

export default class Loader extends React.Component {
    render() {
        const { loading } = this.props;
        return (
         <div className="Loader">
            {loading ? <div className="load-bar">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="Loader-overlay"></div> 
            </div> 
            : ''}
        </div> 
        );
    }
}