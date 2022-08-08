import React from 'react';
import Data from '../Data/Data';
import Card from './Card';

const Menu1 = () => {
    return (
        <div>
            {Data?.slice(0, 1).map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Menu1;