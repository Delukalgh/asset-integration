
"use client"
import { list } from "postcss";
import { useState } from "react";

export default function Page() {
// create a product page ✅
// create a header ✅
// create a button the requests data ✅
// request data
// store the data in my state (react state)
// output the data

const [products, setProducts] = useState(null);

const API_ENDPOINT = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

async function fetchProducts () {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json();
    setProducts(data)
}


const ProductList = () => {
    if (products) {
        let productsList = [];


        products.forEach((product, index) => {
            productsList.push(
                <li key={index}>{product.name}</li>
            )
        });
        return (
        <div className="border-4 border-black p-4 mb-4">
            <ul>{productsList}</ul>
        </div>
        )
    }

    return (
        <div className="border-4 border-black p-4 mb-4">
            No products right now!
        </div>
    )
    }


return (
    <div className="bg-purple-300 p-4">
        <header className="border-4 border-black p-4 mb-4">
            <h1 className="text-4xl mb-6">Welcome to my products page!</h1>
            <button onClick={fetchProducts} className="border-black border-2 p-2 bg-black text-purple-300">
                Fetch products!
            </button>
        </header>
        <ProductList/>
    </div>
);
}
