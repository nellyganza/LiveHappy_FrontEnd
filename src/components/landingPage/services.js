import React, { useState } from 'react';

import img1 from '../../../public/img/28874187.jpg'
import img2 from '../../../public/img/card.jpeg'
import img3 from '../../../public/img/ticktesicons.jpg'

function servicesPage(props) {
    const [services, setServicees] = useState([
        {
            id: 1,
            title: "Tapping Devices",
            image: img1,
            description: "Entrance Tapping Devices."
        },
        {
            id: 2,
            title: "Event Cards",
            image: img2,
            description:"Event card, we produce card for event."
        },
        {
            id: 3,
            title: "Selling Tickets",
            image: img3,
            description:"Buying ticket online, for any event."
        }
    ]);

    return (
        <div className="gap-4 p-3 m-3 servicediv">
            {
                services.map((service,index)=>{
                    return <div key={index}>
                        <img src={service.image}/>
                        <p className="text-sm text-center">{service.description}</p>
                    </div>
                })
            }
        </div>
    );
}

export default servicesPage;