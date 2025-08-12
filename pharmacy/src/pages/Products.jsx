import { Product } from "../components/Product"
import products from '../data/products.json'
import '../css/Products.css'
import { Link } from "react-router-dom"

export const Products = () => {
    let items = products.map(product => {
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
    let categories = ['Medications and Treatment', 'Vitamins and Supplements',
                        'Personal Care Products', 'Medical Devices']
    
    let linksToCategories= ['medications-and-treatment', 'vitamins-and-supplements'
                            ,'personal-care-products' ,'medical-devices']
    
    let buttons = categories.map((x, index) => {
        return <Link to={`/${linksToCategories[index]}`} key={`category-${index}`}>{x}</Link>        
    })

    return(
        <div>
            <div className="categories">{buttons}</div>
            <div className="products">
                {items}
            </div>
        </div>
    )
}