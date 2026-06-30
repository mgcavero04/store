import type { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);//receives the data and updates state: setProducts(data)
  useEffect(() => {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
  
    }, [])
  
  return (
    <>
   <ProductList products={products} />
    
    </>
  )
}