import React from 'react';
import HeaderItem from './HeaderItem';

// export default function Header(props) {
//     const [headerItems, setHeaderItems ] = useState([
//         {
//             id: 1,
//             title: 'Home',
//             link: '/Home'
//         }
//     ]);
//     return (
//         <div className='header'>
//             {state.headerItem.map(item => {
//                 return <HeaderItem key={item.id} title={item.title} link={item.link}/>
//             })}
//         </div> 
//     )
// }

export default class Header extends React.Component {
    state = {
        headerItems: [
            {
                id: 1,
                title: 'Home',
                link: './Home'
            }
        ]
    }

    render() {
        return (
            <div className='header'>
                {this.state.headerItems.map(item => {
                    return <HeaderItem key={item.id} title={item.title} link={item.link} />
                })}
            </div>
        )
    }

}