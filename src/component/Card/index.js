import React from 'react';
import './style.css';

export default class Card extends React.Component {
    openTaskFormModal = () => {
        const {task, modal} = this.props;
        modal(task, true);
    }

    handleDelete = () => {
        const {task} = this.props;
        this.props.delete(task);
    }

    render() {
        const { task, user } = this.props;
        return (
         <div className="Card" key={task.id}>
            <div className="Card-container">
                <div className="Card-title">
                    <span>{task.taskName} -- #{task.id}</span>
                    <button className="Card-btn" onClick={this.openTaskFormModal}>Edit</button>
                </div>
                <div>
                    <img className="Card-image" src ={task.gallery.primary} alt="Task" />
                </div>
                <div className="Card-text-details">
                    <div className="label">Assigned to:</div>
                    <div>{user.name}</div>
                </div>
                <button className="Card-btn-delete" onClick={this.handleDelete}>Delete</button>
            </div>
        </div> 
        );
    }
}