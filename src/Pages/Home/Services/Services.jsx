
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <small className="text-[#FF3811] text-xl mb-2"> Service </small>
                <h2 className="text-lg text-black font-bold">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;