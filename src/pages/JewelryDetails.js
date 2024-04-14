import React from 'react';
import {useParams} from "react-router-dom";

const JewelryDetails = () => {
    const {id} = useParams()
    return (
    <div>
        <h1>Jewlery details {id}</h1>
    </div>
    );
}
export default JewelryDetails;
