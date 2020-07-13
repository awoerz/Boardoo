import React,  {useState} from 'react';
import Board from './Board';

export default function Boards(props) {
    const [boards, setBoard] = useState([
        {
            id: 1,
            title: 'To Do'
        },
        {
            id: 2,
            title: 'Doing'
        },
        {
            id: 3,
            title: 'Done'
        }
    ])
    return (
        <div className='boards-container'>
            {boards.map(board => {
                return <Board key={board.id} title={board.title} />
            })}
        </div>
    )
}