import React from 'react';
import JewelryBox from '../JewelryBox';
import './FindMyJewelry.css';

const data = [
    {
        id: 1,
        imgSrc: './assets/earring.jpeg',
        txt: "silver earrings"
    },
    {
        id: 2,
        imgSrc: './assets/earring.jpeg',
        txt: "gold earrings"
    },
    {
        id: 3,
        imgSrc: './assets/earring.jpeg',
        txt: "rose gold earrings"
    }
]

const FindMyJewelry = () => {
    return ( 
        <div id= "Jewelries">
            <JewelryBox/>
        </div>
        );
}
export default FindMyJewelry;