import React from 'react';
import JewelryBox from '../JewelryBox';
import './FindMyJewelry.css';
import { useQuery } from "react-query";


const FindMyJewelry = () => {
    const fetchUsers = async () => {
        const res = await fetch("http://localhost:2900/products");
        return res.json();
      };
    const { data, isLoading, error } = useQuery('products', fetchUsers);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return ( 
        <div id= "Jewelries">    
            <div id="serch-container"> 
                <label id="serch-label" htmlFor="search">search</label>
                <input type="text" name="search" id="serch"/>
            </div>
            <div id="gap">  </div>
            <div id= "Jewelries-items">
            {data.map(item => ( 
            <JewelryBox key={item.id} id={item.id} imgSrc={item.imgSrc} txt={item.txt} />
            ))}
            </div>
        </div>
        );
}
export default FindMyJewelry;

