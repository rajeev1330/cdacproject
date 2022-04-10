import Items from "../data/Items"
import '../css/Products.css'
import { Link, Route } from "react-router-dom";

const Products = () => {
    // console.log(Items);
    const itemsList = Items.map((data) =>
        <div className="col-lg-4 col-md-6 col-sm-12 card_block" key={data.id}>
            <img src={data.image} />
            <h4>{data.name}</h4>
            <h6>{data.currency}{data.cost}</h6>
            <h6>{data.descrption}</h6>
            <Link to={`/products/${data.id}`} className="btn">Details</Link>
        </div>
    )
    return (
        <div className="container-fluid product_body">
            <div className="row product_row">
                {itemsList}
            </div>
        </div>
    )
}

export default Products;