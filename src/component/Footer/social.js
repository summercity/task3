import React from 'react';
import { settings } from '../../settings'
import './style.css';

const Social = (props) => {
    return (
        <div className="Social">
            <a href={settings.social.facebook.link} target="_blank" rel="noreferrer noopener">
                <img className="Social-img" src ={settings.social.facebook.icon} alt="Facebook" />
            </a> 
            <a href={settings.social.twitter.link} target="_blank" rel="noreferrer noopener">
                <img className="Social-img" src ={settings.social.twitter.icon} alt="Facebook" />
            </a>
            <a href={settings.social.instagram.link} target="_blank" rel="noreferrer noopener">
                <img className="Social-img" src ={settings.social.instagram.icon} alt="Facebook" />
            </a>
            <a href={settings.social.pinterest.link} target="_blank" rel="noreferrer noopener">
                <img className="Social-img" src ={settings.social.pinterest.icon} alt="Facebook" />
            </a> 
        </div>
    )
}

export default Social;
