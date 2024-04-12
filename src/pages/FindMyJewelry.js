import React from 'react';
import JewelryBox from '../JewelryBox';
import './FindMyJewelry.css';
import earring from '../assets/earring.jpeg'

const data = [
    {
        id: 1,
        imgSrc: 'https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/g/egdsno102_c.jpg',
        txt: "silver earrings"
    },
    {
        id: 2,
        imgSrc: 'https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/g/egdsno102_c.jpg',
        txt: "gold earrings"
    },
    {
        id: 3,
        imgSrc: 'https://www.orra.co.in/media/catalog/product/cache/a062e776095ada03f265202079309f18/o/e/oer22102_1_jrysnutcof2uu1jd.jpg',
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
