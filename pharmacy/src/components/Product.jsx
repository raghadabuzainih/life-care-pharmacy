import React from 'react'
import '../css/Product.css'
import { Link } from 'react-router-dom'

export const Product = ({name, price, image, index}) => {
    return(
        <div className="product">
            <Link to={`/item/${index}`}>
                <img src={image} alt={`photo of ${name}`} className={`product-${index}-img`} />
                <div className="product-details">
                    <h2>{name}</h2>
                    <h3 className="product-price">$ {price}</h3>
                </div>
            </Link>
        </div>
    )

}