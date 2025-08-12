
import { useParams } from "react-router-dom"
import products from '../data/products.json'
import '../css/Item.css'

export const Item = () => {
    const { id } = useParams()
    //in Product.jsx -> <Link to={`/item/${index}`}> :
    //index -> start from 1 
    //in products -> index start from 0
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