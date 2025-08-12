
import products from '../data/products.json'
import { Product } from '../components/Product'

export const MedicalDevices = () => {
    let title = 'Medical Devices'
    let items = products.filter(x => x.category == title)
    let cards = items.map(product => {
        return <Product 
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    description={product.description}
                    index={product.id}
               />
    })

    return(
        <div>
            <h2>{title}</h2>
            {cards}
        </div>
    )
}