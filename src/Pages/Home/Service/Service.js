import React from 'react';

const Service = ({car}) => {
    const {name, img, description, price} = car
    return (
        <div>
            <img style={{width: '400px'}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;