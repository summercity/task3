import React from 'react';
import Hourglass from '../../component/Loader/Hourglass'

import './style.css';

const Modal = (props) => {
    return (
        <div>
            {props.show ?
            <div className="Modal-overlay">
                <div className="modal-wrapper"
                    style={{
                        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h3>{props.title}</h3>
                        <span className="close-modal-btn" onClick={props.close}>×</span>
                    </div>
                    <div className="modal-body">
                        <div>
                            {props.children}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button disabled={props.isLoading}  className="btn-cancel" onClick={props.close}>Cancel</button>
                        <button disabled={props.isLoading} className="btn-continue" onClick={props.submit}>Submit</button>
                        {props.isLoading ? <Hourglass loadingMsg={props.loadingMsg} /> : ''}
                    </div>
                </div>
        </div>: ''}
        </div>
    )
}

export default Modal;
