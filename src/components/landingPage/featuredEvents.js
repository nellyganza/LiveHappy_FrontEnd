import React, { useEffect, useState } from 'react';
import EventBox from '../event/eventBox';
import img1 from '../../../public/img/pexels-salah-alawadhi-382297.jpg'
import img2 from '../../../public/img/pexels-wendy-wei-1047940.jpg'
import img3 from '../../../public/img/pexels-josh-sorenson-976866.jpg'
import img4 from '../../../public/img/pexels-rodnae-productions-7005495.jpg'
import { Link } from 'react-router-dom';
import { httpRequest } from '../../helpers/httpRequest';

function featuredEvents(props) {
    const [events,setEvents] = useState([
       
    ])

    const getEvents = async()=>{
        const {response,error} = await httpRequest("GET","/events?page=1&limit=100&status=Pending");
        setEvents([...events,...response.data.data.result])
    }
    useEffect(() => {
        getEvents();
      }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-3 m-3">
            {
                events.map((event, index) =>  
                    <Link key={event.id} to={{pathname:"/event",state:{event}}}> <EventBox event={event}/></Link>
                )
            }
        </div>
    );
}

export default featuredEvents;