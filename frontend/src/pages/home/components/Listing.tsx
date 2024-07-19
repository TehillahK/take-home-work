import Product from "../../../interfaces/Product";

const StoreListing = ({products}:{products: Product[]}) => {
    return ( 
        <div>
            <ul>
                {
                    products?.map(
                        (product:Product)=>(
                            <div key={product.id}>
                                {product.name}
                            </div>
                        )
                    )
                }
            </ul>

        </div>
     );
}
 
export default StoreListing;