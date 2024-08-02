import Products from "./Products.jsx"
//import Product from "./Product.jsx"
import products from "./Products.json"
import './App.css'
import { createContext, useState } from "react";

const PricePerProduct = products.map((pr) => pr.price);

const Price = products.reduce((acc, cv) => acc + cv.price, 0);

export const ProductContext = createContext(null);

function App() {

  const [prs, setProducts] = useState(products);

  const [TotalPrice, setTotalPrice] = useState(Price);

  const handleInc = (details) => {
    console.log(details.qty);
    const indx = prs.findIndex((obj) => obj.id == details.id);
    console.log(indx);

    const tmp = [...prs];
    tmp[indx] = { ...tmp[indx], qty: details.qty + 1, price: details.price + PricePerProduct[indx] }
    console.log(tmp[indx]);
    setProducts(tmp);

    const Price = tmp.reduce((acc, cv) => acc + cv.price, 0);
    setTotalPrice(Price);
  }

  const handleDec = (details) => {
    if (details.qty > 1) {
      console.log(details.qty);
      const indx = prs.findIndex((obj) => obj.id == details.id);
      console.log(indx);

      const tmp = [...prs];
      tmp[indx] = { ...tmp[indx], qty: details.qty - 1, price: details.price - PricePerProduct[indx] }
      console.log(tmp[indx]);
      setProducts(tmp);

      const Price = tmp.reduce((acc, cv) => acc + cv.price, 0);
      setTotalPrice(Price);
    }
    else {
      const tmp = prs.filter((obj) => obj.id != details.id);
      setProducts(tmp);

      const Price = tmp.reduce((acc, cv) => acc + cv.price, 0);
      setTotalPrice(Price);
    }
  }

  return (
    <div className="pr">
      <ProductContext.Provider value={{ prs, handleInc, handleDec, TotalPrice }}>
        <Products />
      </ProductContext.Provider>
    </div>
  )
}

export default App
