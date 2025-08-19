import { Product } from '../components/Product'
import { useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next"

export const Category = () => {
    const {t} = useTranslation()
    const { name } = useParams()
    const products = t("products")
    let items = products.filter(x => x['category-link'] == name)
    //select category name enough from one product
    let categoryName = items[0]['category']
    let cards = items.map(item => {
        return <Product 
                    key={item.id}
                    product={item}
               />
    })

    return(
        <div>
            <h2>{categoryName}</h2>
            <div style={{display: 'flex', gap: '1rem'}}>{cards}</div>
        </div>
    )
}