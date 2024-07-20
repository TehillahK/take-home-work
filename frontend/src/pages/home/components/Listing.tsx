import Product from "../../../interfaces/Product";
import ProductCard from "../../../Utils/ProductCard";
import ProductModal from "./ProductModal";

const StoreListing = ({ products, selectedProductID ,addToCart ,clickProduct}: { products: Product[] ,selectedProductID: number|undefined|null,addToCart:(productID:number, quantity:number)=>void ,clickProduct:(productID:number)=>void }) => {
    return (
        <div className="px-10 py-10">
            <ul className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                {
                    products?.map(
                        (product: Product) => (
                            
                            <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    price={product.price}
                                    photoUrl={product.photoUrl} 
                                    id={product.id}          
                                    clickProduct={clickProduct}                  
                            />
                            

                        )
                    )
                }
            </ul>
            <ProductModal productID={selectedProductID}  addCart={addToCart}/>
                            
        </div>
    );
}

export default StoreListing;