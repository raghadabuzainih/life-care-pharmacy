import { Product } from "../components/Product"
import arProducts from "../data/ar-products.json"
import enProducts from "../data/en-products.json"
import '../css/Products.css'
import { Link } from "react-router-dom"

export const Products = ({lang}) => {
    const products = lang == 'ar' ? arProducts : enProducts
    let items = products.map(product => {
        return <Product 
                    key = {product.id}
                    product = {product}
               />
    })
    let categories = [
        { en: 'Medications and Treatment', ar: 'الأدوية والعلاجات' },
        { en: 'Vitamins and Supplements', ar: 'الفيتامينات والمكملات' },
        { en: 'Personal Care Products', ar: 'منتجات العناية الشخصية' },
        { en: 'Medical Devices', ar: 'الأجهزة الطبية' }
    ]
    
    let linksToCategories= ['medications-and-treatment', 'vitamins-and-supplements'
                            ,'personal-care-products' ,'medical-devices']

    let categoriesLinks = categories.map((categoryName, index) => {
        return <Link to={`/category/${linksToCategories[index]}`} 
                    key={`category-${index}`}
                >
                    {lang == 'ar' ? categoryName.ar : categoryName.en}
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