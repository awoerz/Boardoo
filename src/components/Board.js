import React, {useState} from 'react';

export default function Board(props) {
    return (
        <div className="board-container">
            <h1 className="board-title">{props.title}</h1>
            <div className='board-button-container'>
                <button className='board-button'>+</button>
            </div>
        </div>
    )
}