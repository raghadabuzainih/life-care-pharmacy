import products from '../data/products.json'
import { Product } from '../components/Product'

export const Category = ({title}) => {
    let items = products.filter(x => x.category == title)
    let cards = items.map(({id, name, price, category, image, description}) => {
        return <Product 
                    key={id}
                    name={name}
                    price={price}
                    category={category}
                    image={image}
                    description={description}
                    index={id}
               />
    })

    return(
        <div>
            <h2>{title}</h2>
            {cards}
        </div>
    )
}