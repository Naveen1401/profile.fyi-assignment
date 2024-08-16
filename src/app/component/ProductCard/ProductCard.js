import Image from "next/image";
const ProductCard = ({ productDetials, state, dispatch }) => {

    const addToCartHandler = () => {
        dispatch({
            type: "addToCart",
            payload: productDetials
        })
    }

    const removeToCartHandler = () => {
        dispatch({
            type: "removeToCart",
            payload: productDetials
        })
    }

    return (
        <div className="productCardContainer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image className="productImg object-cover" src={productDetials.images[0]} width={50} height={100} alt={productDetials.name} />
            <div className="productDetials flex flex-col justify-center items-center">
                <h1>{productDetials.title}</h1>
                <p>{process.env.NEXT_PUBLIC_CURRENCY + Math.round(productDetials.price * 10)}</p>
            </div>
            {state.cartProduct.some(e => e.id === productDetials.id) ?
                <button className="removeBtn cartBtn" onClick={removeToCartHandler}>
                    Remove from Cart
                </button> :
                <button className="addBtn cartBtn" onClick={addToCartHandler}>
                    Add to Cart
                </button>
            }
        </div>
    )
}

export default ProductCard;