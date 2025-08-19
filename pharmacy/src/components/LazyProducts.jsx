import { Product } from "../components/Product"
import { useTranslation } from "react-i18next"

const LazyProducts = () => {
    const {t} = useTranslation()
    const products = t("products")
    let items = products.map(product => {
        return <Product 
                    key = {product.id}
                    product = {product}
               />
    })

    return(
        <div className="products">
            {items}
        </div>
    )
}

export default LazyProducts