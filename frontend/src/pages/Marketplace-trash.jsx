import { useEffect, useState } from "react";
import axios from "axios";
import TrendingCollections from "../cards/TrendingCollections"

export default function Marketplace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/products");

      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
        <TrendingCollections
          key={product._id}
          title={product.productName}
          bgImage="https://picsum.photos/300/400"
        />
      ))}
    </div>
  );
}
