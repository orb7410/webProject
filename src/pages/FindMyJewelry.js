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

        {data.map(item => ( 
        <JewelryBox key={item.id} id={item.id} imgSrc={item.imgSrc} txt={item.txt} />
        ))}
        </div>
        );
}
export default FindMyJewelry;

