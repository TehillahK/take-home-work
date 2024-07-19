import Product from "../../../interfaces/Product";
import ProductCard from "../../../Utils/ProductCard";

const StoreListing = ({ products }: { products: Product[] }) => {
    return (
        <div className="px-10 py-10">
            <ul className="grid grid-cols-3">
                {
                    products?.map(
                        (product: Product) => (
                            <ProductCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                photoUrl={product.photoUrl}
                            />


                        )
                    )
                }
            </ul>

        </div>
    );
}

export default StoreListing;