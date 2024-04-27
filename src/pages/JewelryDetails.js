import React from 'react';
import {useParams} from "react-router-dom";
import './JewelryDetails.css';

const img =  'https://lovediamonds.com/wp-content/uploads/2021/12/F400_55.jpg'
const txt = "silver neckless"

const JewelryDetails = () => {
    const {id} = useParams()
    return (
        <div>
        <div className="container">
            <div className="pane1"> <img src={img} className="Jewelry_detail-img" alt="Jewelry" /></div>
            <div className="pane2"> <h1>{txt} id - {id}</h1></div>
        </div>
        <div className="pane3"> <h1>bottom {id}</h1></div>
        </div>
    );
}
export default JewelryDetails;

