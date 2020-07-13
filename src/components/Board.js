import React, {useState} from 'react';
import Card from './Card';

export default function Board(props) {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: 'This is card 1'
        },
        {
            id: 2, 
            title: 'This is card 2'
        }
    ])


    return (
        <div className="board-container">
            <h1 className="board-title">{props.title}</h1>
            <div className="card-container">
                {cards.map(card => {
                    return <Card key={card.id} title={card.title} />
                })}
            </div>
            <div className='board-button-container'>
                <button className='board-button'>+</button>
            </div>
        </div>
    )
}