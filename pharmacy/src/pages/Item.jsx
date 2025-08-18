
import { useParams } from "react-router-dom"
import arProducts from '../data/ar-products.json'
import enProducts from '../data/en-products.json'
import '../css/Item.css'

//Item.jsx --> when clicking on item to show more info & grow image

export const Item = ({lang}) => {
    const products = lang == 'ar' ? arProducts : enProducts
    const { id } = useParams()
    //because id start from 1 & to access index in array --> id-1
    let clickedItem = products[id-1]

    return(
        <div className="item">
            <img src={clickedItem.image} alt={`${clickedItem.name}-photo`} />
            <div className="info">
                <h1>{clickedItem.name}</h1>
                <h2 className="category">- {clickedItem.category} -</h2>
                <h2>{clickedItem.description}</h2>
                <h1 className="price">$ {clickedItem.price}</h1>
            </div>
        </div>
    )
}