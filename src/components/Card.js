import React from 'react'

const Card = ({ item }) => {
    console.log(item.id, item.name)

    return (
        <div className='card-container'>
            <div className='main-card'>
                <div className='img-card'>
                    <img src={item.img} alt={item.name} />
                </div>
                <div className='item-card'>
                    <div>
                        <h1>{item.name}</h1>
                        <p>By <span className='title'>{item.title}</span></p>
                        <p><span className='dist'>{item.discription}</span><span className='read-more'>Read More</span></p>
                        <img src={item.rating} alt="rating" /><img src={item.rating} alt="rating" /><img src={item.rating} alt="rating" /><img src={item.rating} alt="rating" /><img src={item.rating} alt="rating" />
                        <p><span className='price'>{item.price}</span> USD</p>
                    </div>
                    <div className='like-comment'>
                        <div><img src={item.hand} alt='' /></div>
                        <div><img src={item.comment} alt='' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;