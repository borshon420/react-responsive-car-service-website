import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [cars, setCar] = useState([])
    useEffect(()=> {
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCar(data))
    
    },[])
    return (
        <div>
            <h1>This is services: {cars.length}</h1>
            {
                cars.map(car => <Service
                key={car.id}
                car={car}
                ></Service>)
            }
        </div>
    );
};

export default Services;