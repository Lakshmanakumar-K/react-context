import Product from "./Product.jsx"
//import products from "./Products.json"
import { useContext } from "react";
import { ProductContext } from "./App.jsx";

const Products = () => {

    const ProductObject = useContext(ProductContext);

    //console.log(ProductObject.prs);

    return (<>
        {ProductObject.prs.map((obj) => (
            <Product key={obj.id}
                id={obj.id}
                title={obj.title}
                description={obj.description}
                image={obj.image}
                qty={obj.qty}
                rating={obj.rating.rate}
                price={obj.price}
            />
        ))}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            <p style={{ marginLeft: "20%" }}><b>TOTAL PRICE : </b></p>
            <p style={{ marginRight: "20%" }}><b>${ProductObject.TotalPrice}</b></p>
        </div>
    </>);
}

export default Products