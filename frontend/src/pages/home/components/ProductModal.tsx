const ProductModal = ({ addCart ,productID}:{productID:number|undefined|null , addCart:(productID:number , quantity:number)=>void}) => {
    return (
        <dialog id="product_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-xl">Product Name</h3>
                <div className="flex flex-row items-center justify-between py-4 w-1/2">
                    <p className="text-lg">Quantity : 1</p>
                    <button className="btn glass">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        Add Item
                    </button>
                </div>
                <button
                    className="btn w-full"
                    onClick={
                        ()=>{
                            addCart(productID as number, 0);
                            const modalElement = document.getElementById("product_modal") as HTMLDialogElement;
                            if(modalElement){
                                modalElement?.close() ;
                            }
                        }

                    }
                >
                    Add to Cart
                </button>

            </div>
        </dialog>
    );
}

export default ProductModal;