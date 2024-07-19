import Product from "../../../interfaces/Product";
import ProductCard from "../../../Utils/ProductCard";
import ProductModal from "./ProductModal";

const StoreListing = ({ products ,addToCart }: { products: Product[] ,addToCart:(productID:number, quantity:number)=>void }) => {
    return (
        <div className="px-10 py-10">
            <ul className="grid grid-cols-3">
                {
                    products?.map(
                        (product: Product) => (
                            <>
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                photoUrl={product.photoUrl}
                            />
                            <ProductModal productID={product.id}  addCart={addToCart}/>
                            </>

                        )
                    )
                }
            </ul>
              
        </div>
    );
}

export default StoreListing;