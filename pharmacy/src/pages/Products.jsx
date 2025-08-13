import { Product } from "../components/Product"
import products from '../data/products.json'
import '../css/Products.css'
import { Link } from "react-router-dom"

export const Products = () => {
    let items = products.map(product => {
        return <Product 
                    key = {product.id}
                    product = {product}
               />
    })
    let categories = ['Medications and Treatment', 'Vitamins and Supplements',
                        'Personal Care Products', 'Medical Devices']
    
    let linksToCategories= ['medications-and-treatment', 'vitamins-and-supplements'
                            ,'personal-care-products' ,'medical-devices']

    let categoriesLinks = categories.map((categoryName, index) => {
        return <Link to={`/category/${linksToCategories[index]}`} 
                    key={`category-${index}`}
                >
                    {categoryName}
                </Link>        
    })

    return(
        <div>
            <div className="categories">{categoriesLinks}</div>
            <div className="products">
                {items}
            </div>
        </div>
    )
}