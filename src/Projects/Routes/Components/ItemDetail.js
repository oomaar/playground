import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ItemDetail = ({ match }) => {

    useEffect(() => {
        fetchItem();
        // console.log("match",match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);

        // console.log("item", item);
    }
    return (
        <div>
            <img src={item.url} alt=""/>
            <h1>{item.title}</h1>
        </div>
    )
}

export default ItemDetail;
