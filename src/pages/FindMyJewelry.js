import React from 'react';
import JewelryBox from '../JewelryBox';
import './FindMyJewelry.css';
import earring from '../assets/earring.jpeg'

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
        imgSrc: './src/assets/earring.jpeg',
        txt: "rose gold earrings"
    }
]

const FindMyJewelry = () => {
    return ( 
        <div id= "Jewelries">
             {data.map(item => ( 
            <JewelryBox key={item.id} id={item.id} imgSrc={item.imgSrc} txt={item.txt} />
            ))}
        </div>
        );
}
export default FindMyJewelry;