import React from 'react';
import Data from '../Data/Data';
import Card from './Card';


const All = () => {
   
    return (
        <div>
            {Data?.map((item) => (
                <Card item={item} key={item.id} />
            ))}
        </div>
    )
}

export default All;