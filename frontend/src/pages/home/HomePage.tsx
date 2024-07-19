import { useState } from "react";
import Product from "../../interfaces/Product";
import Navbar from "../../Utils/Navbar";
import Hero from "./components/Hero";
import StoreListing from "./components/Listing";
import ProductModal from "./components/ProductModal";
import Order from "../../interfaces/Order";

const HomePage = () => {


    const [productList, setProductList] = useState<Product[]>([
        {
            id: 0,
            name: "Test 1",
            photoUrl: "",
            price: 25
        },
        {
            id: 0,
            name: "Test 2",
            photoUrl: "",
            price: 10
        }
    ])

    
    const [purchasedProducts,setPurchasedProducts] = useState<Product[]>([]) 
    const [order ,setOrder] = useState<Order[]>([]);



    const addToCart = (productID: number, quantity: number) => {

        const matchingProduct = productList.find((product:Product)=>product.id == productID);

        if(matchingProduct){
            setOrder((prev)=>[...prev,{  quantity:quantity,product:matchingProduct}])
        }

        
    };


    return (
        <>
            <Navbar purchasedProducts={purchasedProducts} />
            <Hero />
            <StoreListing products={productList} addToCart={addToCart} />
            
        </>
    );
}

export default HomePage;