
import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import '../css/Item.css'

//Item.jsx --> when clicking on item to show more info & grow image

export const Item = () => {
    const {t} = useTranslation()
    const products = t("products")
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