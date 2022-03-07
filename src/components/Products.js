import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      console.log(res);
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
        console.log(filter);
      }
      return () => { 
        componentMounted = false;
      }
    };
    getProducts();
  }, []);
  return <div>Products</div>;
}

export default Products;
