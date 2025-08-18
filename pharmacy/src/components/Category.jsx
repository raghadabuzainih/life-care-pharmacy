import arProducts from '../data/ar-products.json'
import enProducts from '../data/en-products.json'
import { Product } from '../components/Product'
import { useParams } from 'react-router-dom'

export const Category = ({lang}) => {
    const { name } = useParams()
    const products = lang == 'ar' ? arProducts : enProducts
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
            {cards}
        </div>
    )
}