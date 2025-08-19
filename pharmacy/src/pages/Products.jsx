import { Product } from "../components/Product"
import '../css/Products.css'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Suspense, lazy } from "react"

const LazyProducts = lazy(() => import("../components/LazyProducts"))

export const Products = () => {
    const {t} = useTranslation()
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

    return(
        <div>
            <div className="categories">{categoriesLinks}</div>
            <Suspense fallback={<p>Loading....</p>}>
                <LazyProducts />
            </Suspense>
        </div>
    )
}
