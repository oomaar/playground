import React from 'react';
import UserComp from './UserComp';

const App = () => {
  return (
    <div>
      <UserComp />
    </div>
  )
}

export default App;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchGallery } from './dataSlice';

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchGallery());
//   }, []);
//   const images = useSelector((state) => state.gallery.items)
//   return (
//     <div>

//     </div>
//   )
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import Fuse from "fuse.js";

// const App = () => {

  // useEffect(() => {
  //   fetchItems();
  // }, []);
  // const fetchItems = async () => {
  //   const data = await fetch('https://jsonplaceholder.typicode.com/photos');
  //   const items = await data.json();
  //   // console.log("items", items);
  //   setItems(items.slice(0,100));
  // }

  // const [items, setItems] = useState([]);

  //search
  // const [query, setQuery] = useState('');
  // const fuse = new Fuse(items, { keys: ['id'], includeScore: true });
  // const results = fuse.search(query);
  // const imgResults = query ? results.map(result => result.item) : items;
  // console.log(query);
  // function handleSearch({ currentTarget = {} }) {
  //   const { value } = currentTarget;
  //   setQuery(value);
  // } 

//   return (
//     <div>
//       {/* <input type="text" value={query} onChange={handleSearch} /> */}
//       {images.map(item => (
//         <div key={item.id}>
//             <img src={item.url} alt="" />
//             {item.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App;


// import React from "react";
// import About from "./About";
// import "./App.css";
// import Nav from "./Nav";
// import Shop from "./Shop";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ItemDetail from "./ItemDetail";
// import ItemDetailTwo from "./ItemDetailTwo";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route exact path="/shop" component={Shop} />
//           <Route path="/shop/:id" component={ItemDetail} />
//           <Route path="/about/:albumId" component={ItemDetailTwo} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// export default App;
