import React from 'react';
import './style.css';

export default class Reverse extends React.Component {
    openTaskFormModal = () => {
        const {task, modal} = this.props;
        modal(task, true);
    }

    render() {
        const { text } = this.props;
        return (
         <div className="Reverse">
            <div className="Reverse-container">
                <h1>{text.split("").reverse().join("")}</h1>
            </div>
        </div> 
        );
    }
}