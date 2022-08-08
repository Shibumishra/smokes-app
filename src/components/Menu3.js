import React from 'react';
import Data from '../Data/Data';
import Card from './Card';

const Menu3 = () => {
    return (
        <div>
            {Data?.slice(2, 3).map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Menu3;