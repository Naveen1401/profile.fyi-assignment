import Link from "next/link";

const CheckOut = () => {
    return (
        <div className="checkoutDiv flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="43" cy="43" r="40" stroke="#48C733" stroke-width="6" />
                    <path d="M26 43.3115L37.4565 55L60 32" stroke="#48C733" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h1 className="text-xl my-3">Your Cart is added to the CheckOut</h1>
            </div>
            <div>
                <Link className="text-green-700" href="/">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default CheckOut;