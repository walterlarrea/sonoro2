"use client"

import { useState } from "react";

import Navigation from "@/components/radio/Nav";
import Products from "@/components/radio/Products";
import products from "@/utils/data";
import Recommended from "@/components/radio/Recommended";

import Card from "@/components/radio/Card";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== 
    -1
  );

 

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({  country,  title }) =>
          
          
          country === selected ||
          
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title,  station, url }) => (
        <Card
          key={Math.random()}
          img={img}
          name={title}
          url={url}
          
          station={station}
          
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;