import React, {useState} from 'react';
import HeaderItem from './HeaderItem';
import logo from '../../src/boardoo-logo.png';

export default function Header() {
    const [headerItems, setHeaderItems ] = useState([
        {
            id: 1,
            title: 'Boards',
            link:  '.Boards'
        }
    ]);

    const updateItems = (items) => {
        setHeaderItems(items)
    }
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} />
            </div>
            <div className='header-item-container'>
            {headerItems.map(item => {
                return <HeaderItem key={item.id} title={item.title} link={item.link}/>
            })}
            </div>
        </div> 
    )
}