import '../css/Product.css'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {
    const {id, name, price, image} = product
    return(
        <div className="product">
            <Link to={`/item/${id}`}>
                <img src={image} alt={`photo of ${name}`} className={`product-${id}-img`} />
                <div className="product-details">
                    <h2>{name}</h2>
                    <h3 className="product-price">$ {price}</h3>
                </div>
            </Link>
        </div>
    )

}