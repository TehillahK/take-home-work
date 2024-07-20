import { useEffect, useState } from "react";
import Product from "../../interfaces/Product";
import Navbar from "../../Utils/Navbar";
import Hero from "./components/Hero";
import StoreListing from "./components/Listing";

import Order from "../../interfaces/Order";

const HomePage = () => {

    const [selectedProduct, setSelectedProduct] = useState<number>(0);
    const [productList, setProductList] = useState<Product[]>([
        {
            id: 0,
            name: "Test 1",
            photoUrl: "",
            price: 25
        },
        {
            id: 1,
            name: "Test 2",
            photoUrl: "",
            price: 10
        }
    ])




    const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);
    const [order, setOrder] = useState<Map<string | number, Order>>(new Map());
    const [cost, setCost] = useState<number>(0);



    const addToCart = (productID: number, quantity: number) => {

        const matchingProduct = productList.find((product: Product) => product.id == selectedProduct);

        if (matchingProduct) {
            const orderMap = order;
            if (order.has(productID)) {

                orderMap.set(selectedProduct, { quantity: order.get(selectedProduct)?.quantity as number + 1, product: matchingProduct });
            } else {
                orderMap.set(selectedProduct, { quantity: 1, product: matchingProduct });

            }
            console.log(orderMap)
            setCost(cost + matchingProduct.price)
            setPurchasedProducts((prev) => [...prev, matchingProduct])
            setOrder(orderMap)
        }


    };

    const clickProduct = (productID: number) => setSelectedProduct(productID);

    useEffect(
        () => {

        }
        , [purchasedProducts])

    return (
        <>
            <Navbar
                purchasedProducts={purchasedProducts}
                order={order}
                cost={cost}
            />
            <Hero />
            <StoreListing
                products={productList}
                addToCart={addToCart}
                clickProduct={clickProduct}
                selectedProductID={selectedProduct}
            />

        </>
    );
}

export default HomePage;