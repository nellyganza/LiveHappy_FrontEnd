import React, { useState } from 'react';

import img1 from '../../../public/img/ferurwafa icon.jpeg'
import img2 from '../../../public/img/ferwaba.jpeg'
import img3 from '../../../public/img/kigali covention.jpeg'
import img4 from '../../../public/img/missrwanda.jpeg'

function ourClients(props) {
    const [clients, setClients] = useState([
        {
            id: 1,
            title: "FERWAFA",
            image: img1,
        },
        {
            id: 2,
            title: "FERWABA",
            image: img2,
        },
        {
            id: 3,
            title: "Kigali convetion",
            image: img3
        },
        {
            id: 4,
            title: "Miss Rwanda",
            image: img4
        }
    ]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3 m-3">
            {
                clients.map((client,index)=>{
                    return <div key={index}>
                        <img src={client.image} className="w-full"/>
                    </div>
                })
            }
        </div>
    );
}

export default ourClients;