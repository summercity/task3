import React from 'react';
import './style.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                id: 1,
                username: '',
                password:'',
            }
        };
    }

    handleOnChange = (e) => {
        let { formData } = this.state;
        formData[e.target.name] = e.target.value
        this.setState({formData});
    }

    handleClickLogin = () => {
        const { formData } = this.state;
        this.props.login(true, {formData});
    }

    handleClickLogout = () => {
        const { formData } = this.state;
        this.props.login(false, {formData});
    }

    render() {
        const { token } = this.props;
        const { formData } = this.state;
        return (
        <div className="Header">
            <div className="Header-logo"><a href="/">LOGO</a></div>
            {!token.authenticated ? <div className="Header-form-user">
                <label>
                    <span>Username</span>
                    <input 
                        type="text" 
                        name="username"
                        maxLength="12"
                        onChange={this.handleOnChange} 
                        value={formData.username}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input 
                        type="password" 
                        name="password" 
                        maxLength="12"
                        onChange={this.handleOnChange} 
                        value={formData.password}
                    />
                </label>
                <button onClick={this.handleClickLogin}>Login</button>
            </div>:
            <div className="Header-user-info">
                <img src="http://placekitten.com/960/690" alt="Avatar" className="avatar"/> 
                <span>{token.name}</span>
                <button onClick={this.handleClickLogout}>Logout</button>
            </div>}
        </div>
        );
    }
}