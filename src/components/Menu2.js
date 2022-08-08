import React from 'react';
import Data from '../Data/Data';
import Card from './Card';

const Menu2 = () => {
    return (
        <div>
            {Data?.slice(1, 2).map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Menu2;