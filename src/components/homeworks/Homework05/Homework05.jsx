import React from "react";
//import Product from "../../components/Product/Product";
import Product from "../../../components/Product/Product";

import "./styles.css";

const products = [
  { id: 1, name: "Apple", price: 1.5 },
  { id: 2, name: "Banana", price: 1.0 },
  { id: 3, name: "Orange", price: 2.0 },
];

function Homework05() {
  return (
    <div className="homework05-wrapper">
      <h2>Products List</h2>
      <div className="products-list">
        {products.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default Homework05;