import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const items = await data.json();
        // console.log("items", items);
        setItems(items.slice(0, 10));
    }

    console.log(items.id);
    
    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.url} alt="" />
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Shop;
