import Image from "next/image"
import { useStateContext } from "@/app/context/StateContext";

const CartProductCard = ({ productDetails }) => {
    const { dispatch } = useStateContext();

    const changeQuantity = (id, updatedQuantity) => {
        dispatch({
            type: "changeQuantity",
            payload: {
                id, updatedQuantity
            }
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: "removeFromCart",
            payload: id
        })
    }

    return (
        <div className="cartProductDiv relative">
            <Image src={productDetails.thumbnail} width={50} height={50} alt={productDetails.title} />
            <div className="p-5">
                <h1 className= "text-base w-11/12">{productDetails.title}</h1>
                <h3>{process.env.NEXT_PUBLIC_CURRENCY + Math.round(productDetails.price*10)}</h3>
                <div className="quantityDiv my-2">
                    <button className="qtyBtn px-2 text-black rounded" onClick={() => changeQuantity(productDetails.id, productDetails.qty - 1)}>-</button>
                    <span className="mx-2">{productDetails.qty}</span>
                    <button className="qtyBtn px-2 text-black rounded" onClick={() => changeQuantity(productDetails.id, productDetails.qty + 1)}>+</button>
                </div>
            </div>
            <div className="removeFromCartDiv absolute right-3 top-3">
                <button className="text-red-700" onClick={()=>removeFromCart(productDetails.id)}>x</button>
            </div>
        </div>
    )
}

export default CartProductCard