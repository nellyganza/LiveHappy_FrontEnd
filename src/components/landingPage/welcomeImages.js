import React from 'react';
import img1 from '../../../public/img/pexels-salah-alawadhi-382297.jpg'
import img2 from '../../../public/img/pexels-wendy-wei-1047940.jpg'
import img3 from '../../../public/img/pexels-josh-sorenson-976866.jpg'
import img4 from '../../../public/img/pexels-rodnae-productions-7005495.jpg'
import Searchevent from './searchevent';
import { Slideshow } from './slideImages';
const image = [
    img1, img2,img3,img4
]
const welcomeImages = (props) => {
    return (
        <div>
            <div>
                <Slideshow image={image} />
            </div>
            <Searchevent/>
        </div>
    );
}

export default welcomeImages;