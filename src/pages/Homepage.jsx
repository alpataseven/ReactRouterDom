import { useEffect, useState } from "react"
import ProductCards from "../products/ProductCards"

export default function Homepage() {
    const [last10Product, setLast10Product] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=10")
        .then(res => res.json())
        .then(res => setLast10Product(res))
    }, [])
    return (
        <>
            <h1>Homepage</h1>
            <h2>Ürünler:</h2>
            <div className="row row-cols-sm-3 row-cols-md-4">
                {last10Product.map(item => <ProductCards key={item.id} item={item} />)}
            </div>
            <ul>
            </ul>
        </>
    )
}