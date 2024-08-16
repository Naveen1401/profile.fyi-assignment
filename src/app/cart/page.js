"use client"
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import CartProductCard from "../component/CartProductCard/CartProductCard";

export default function Cart() {
    const { state, dispatch } = useStateContext();

    //No need of useState and useEffect because whenever my cart product will change this will re-render 
    const subtotal = state.cartProduct.reduce((sum, p) => sum + (p.qty * (Math.round(p.price * 10))), 0);
    const subtotalAfterFixedDiscount = subtotal - (process.env.NEXT_PUBLIC_FIXED_DISCOUNT / 100 * subtotal);

    const clearTheCart = () => {
        dispatch({
            type: "clearTheCart"
        })
    }

    return (
        <>
            <div className="p-5">
                <Link href="/">
                    <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 10.5H25.5M1.5 10.5L10.5 1.5M1.5 10.5L10.5 19.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
            {state.cartProduct.length === 0 ?
                <div className="flex flex-row justify-center items-center height-[80vh]">
                    <svg width="142" height="129" viewBox="0 0 142 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.062 97.4923H46.2923C43.0103 97.4923 36.4462 95.5231 36.4462 87.6461C36.4462 77.8 44.3231 77.8 46.2923 77.8M46.2923 77.8H125.062L140.815 18.7231H32.5077M46.2923 77.8L26.6 1H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <circle cx="54.1693" cy="115.215" r="12.7846" stroke="white" stroke-width="2" />
                        <circle cx="113.246" cy="115.215" r="12.7846" stroke="white" stroke-width="2" />
                    </svg>
                    <div className="flex flex-col justify-center m-5">
                        <span className="text-xl">Cart is emply :(</span>
                        <span className="text-xl">Please add some item :(</span>
                    </div>
                </div> :
                <div className="cartPageContainer">
                    <div className="m-auto">
                        {state.cartProduct.map((product) => (
                            <CartProductCard key={product.id} productDetails={product} />
                        ))}
                    </div>
                    <div className="cartSummary pl-5 mx-5">
                        <div className="flex justify-between">
                            <h3>Total MRP : </h3>
                            <span>{process.env.NEXT_PUBLIC_CURRENCY + subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <h3>Discount on MRP  {process.env.NEXT_PUBLIC_FIXED_DISCOUNT}% : </h3>
                            <span className="text-green-700">-{process.env.NEXT_PUBLIC_CURRENCY}{subtotal - subtotalAfterFixedDiscount}</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between">
                            <h2>Total Amount </h2>
                            <span>{process.env.NEXT_PUBLIC_CURRENCY + subtotalAfterFixedDiscount}</span>
                        </div>
                        <div className="flex justify-center mt-[2rem]">
                            <Link href="/checkout"><button onClick={clearTheCart} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Check Out
                                </span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
