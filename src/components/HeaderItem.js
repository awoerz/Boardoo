import React from 'react';

export default function HeaderItem(props) {
    return (
        <div className="header-item">
            <a href={props.link}>{props.title}</a>
        </div>
    )
}