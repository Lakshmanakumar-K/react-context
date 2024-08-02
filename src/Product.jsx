import "./Product.css"
import PropTypes from "prop-types"
import { useContext } from "react"
import { ProductContext } from "./App"

const Product = ({ id, title, description, image, rating, qty, price }) => {

    const FunctionObject = useContext(ProductContext);

    return (<>
        <div className="parent">
            <div className="child1">
                <img style={{ width: "50%", height: "300px", objectFit: "contain" }} src={image} alt=""></img>
            </div>
            <div className="child2">
                <h4 style={{}}>{title}</h4>
                <p style={{ fontSize: "15px", marginTop: "50px" }}>{description}</p>
                <p style={{ fontSize: "15px", marginTop: "50px" }}>Rating: {rating}</p>
            </div>
            <div className="child3">
                <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", justifyContent: "end", }}>
                    <p><button onClick={() => FunctionObject.handleInc({ id, qty, price })} style={{ color: "green", backgroundColor: "rgb(190, 194, 196)", cursor: "pointer" }}>+</button></p>
                    <p style={{ margin: "20px", }}>qty: <b style={{ padding: "5px" }}>{qty}</b></p>
                    <p><button onClick={() => FunctionObject.handleDec({ id, qty, price })} style={{ color: "green", backgroundColor: "rgb(190, 194, 196)", cursor: "pointer" }}>-</button></p>
                    <p style={{ margin: "20px", width: "30%" }}><b>${price}</b></p>
                </div>
                {/* <div onClick={() => FunctionObject.handleInc({ id, qty, price })} style={{ marginTop: "5px", padding: "25px", textAlign: "right" }}><button style={{ border: "none", color: "orange", backgroundColor: "rgb(190, 194, 196)", cursor: "pointer" }}>Add</button></div>
                <div onClick={() => FunctionObject.handleDec({ id, qty, price })} style={{ marginTop: "5px", padding: "25px", textAlign: "right" }}><button style={{ border: "none", color: "orange", backgroundColor: "rgb(190, 194, 196)", cursor: "pointer" }}>Remove</button></div> */}
            </div>
        </div >
        <hr></hr>
    </>);
}

Product.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    qty: PropTypes.number,
    price: PropTypes.number,
}

export default Product