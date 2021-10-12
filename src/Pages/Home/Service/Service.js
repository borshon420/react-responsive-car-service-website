import React from 'react';
import './Service.css';

const Service = ({car}) => {
    const {name, img, description, price} = car
    return (
        <div className="service">
            <img style={{width: '100%', height: '300px'}} src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-5">{description}</p>
        </div>
    );
};

export default Service;