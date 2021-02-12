import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const items = await data.json();
        // console.log("items", items);
        setItems(items.slice(0, 100));
    }

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <Link to={`/about/${item.albumId}`}>
                        {/* {console.log(item.albumId)} */}
                        <img src={item.url} alt="" />
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default About;
