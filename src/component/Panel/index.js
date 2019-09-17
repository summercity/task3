import React from 'react';
import './style.css';

export default class Panel extends React.Component {

    openTaskFormModal = () => {
        const {task, modal} = this.props;
        modal(task, false);
    }

    render() {
        const { title } = this.props;
        return (
        <div className="Panel">
            <div className="Panel-header">
                <span className="Panel-title">{title}</span>
            </div>
            <div>
                <button 
                    onClick={this.openTaskFormModal}>
                    Add new task
                </button> 
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
        );
    }
}