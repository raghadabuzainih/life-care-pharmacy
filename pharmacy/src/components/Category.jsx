import products from '../data/products.json'
import { Product } from '../components/Product'
import { useParams } from 'react-router-dom'

export const Category = () => {
    const { name } = useParams()
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