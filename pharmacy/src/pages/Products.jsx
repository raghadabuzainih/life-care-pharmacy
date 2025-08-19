import { Product } from "../components/Product"
import '../css/Products.css'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

export const Products = () => {
    const {t} = useTranslation()
    const products = t("products")
    let items = products.map(product => {
        return <Product 
                    key = {product.id}
                    product = {product}
               />
    })
    let categories = t("categories")
    let linksToCategories= ['medications-and-treatment', 'vitamins-and-supplements'
                            ,'personal-care-products' ,'medical-devices']

    let categoriesLinks = categories.map((categoryName, index) => {
        return <Link to={`/category/${linksToCategories[index]}`} 
                    key={`category-${index}`}
                >
                    {categoryName}
                </Link>        
    })

    const [visibleCount, setVisibleCount] = useState(8)

    useEffect(()=>{
        const handleScroll = () => {
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 2){
                setVisibleCount(old => old + 4)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div>
            <div className="categories">{categoriesLinks}</div>
            <div className="products">
                {items.slice(0, visibleCount).map(item=> item)}
            </div>
        </div>
    )
}