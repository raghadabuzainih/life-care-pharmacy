
import { useParams } from "react-router-dom"
import products from '../data/products.json'
import '../css/Item.css'

export const Item = () => {
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