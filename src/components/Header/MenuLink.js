import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import All from '../../assets/images/All.png';
import Menu from '../../assets/images/Menu.png'
import Rectangle1 from '../../assets/images/Rectangle1.png'

const MenuLink = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (id) => () => {
        setSelected(id);
    };

    const items = [
        {
            id: 0,
            link: '/',
            img: All,
        },
        {
            id: 1,
            link: '/menu1',
            name: 'Menu 1',
            img: Menu
        },
        {
            id: 2,
            link: '/menu2',
            name: 'Menu 2',
            img: Menu
        },
        {
            id: 3,
            link: '/menu3',
            name: 'Menu 3',
            img: Menu
        },
        {
            id: 4,
            link: '/menu4',
            name: 'Menu 4',
            img: Menu
        },
    ];

    return (
        <div>
            <div className='menu-container'>
                {items.map((item) => (
                    <NavLink key={item.id} to={item.link} className={selected == item.id ? 'menu-icon-active' : 'menu-icon'} onClick={handleClick(item.id)}>
                        <img src={item.img} alt='' />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
                <div className='rectangle'>
                    <img src={Rectangle1} alt='' />
                </div>
            </div>
        </div>
    )
}

export default MenuLink;