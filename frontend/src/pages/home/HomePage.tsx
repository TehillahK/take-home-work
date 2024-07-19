import Product from "../../interfaces/Product";
import Navbar from "../../Utils/Navbar";
import Hero from "./components/Hero";
import StoreListing from "./components/Listing";

const HomePage = () => {
    const productList:Product[] = [
        {
            id:0,
            name:"Test 1",
            photoUrl:"",
            price:25
        },
        {
            id:0,
            name:"Test 2",
            photoUrl:"",
            price:10
        }
    ]
    return (
        <>
            <Navbar />
            <Hero />
            <StoreListing products={productList}/>
        </>
    );
}

export default HomePage;