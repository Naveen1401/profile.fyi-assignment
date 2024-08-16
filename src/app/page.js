"use client"

import { useEffect } from "react";
import ProductCard from "@/app/component/ProductCard/ProductCard";
import { useStateContext } from "./context/StateContext";
import Link from "next/link";

export default function Home() {
  const { state, dispatch } = useStateContext();

  useEffect(() => {
    fetchProductData();
  }, [])

  const fetchProductData = async () => {
    const responce = await fetch(process.env.NEXT_PUBLIC_PRODUCT_API_URL);
    const json = await responce.json();

    dispatch({
      type: "setDisplayProduct",
      payload: json.products
    })
  }

  return (
    <>
      <div className="header flex justify-center p-5">
        <div className="logo">
          <svg width="82" height="41" viewBox="0 0 82 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41 30.75V41L0 10.25V0L41 30.75Z" fill="white" />
            <path d="M82 0V10.25L61.5 25.625L41 10.25V0L61.5 15.375L82 0Z" fill="white" />
            <path d="M5.125 41C7.95546 41 10.25 38.7055 10.25 35.875C10.25 33.0445 7.95546 30.75 5.125 30.75C2.29454 30.75 0 33.0445 0 35.875C0 38.7055 2.29454 41 5.125 41Z" fill="white" />
            <path d="M82 30.4571V41H67.9429L82 30.4571Z" fill="white" />
          </svg>
        </div>
        <Link className="absolute right-0 pr-5" href="/cart">
          <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5 25.5H12.5C11.6667 25.5 10 25 10 23C10 20.5 12 20.5 12.5 20.5M12.5 20.5H32.5L36.5 5.5H9M12.5 20.5L7.5 1H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="14.5" cy="30" r="2.5" stroke="white" stroke-width="2" />
            <circle cx="29.5" cy="30" r="2.5" stroke="white" stroke-width="2" />
          </svg>
          {state.cartProduct.length > 0 ? <div className="absolute bg-red-400 text-black w-fit px-[6px] rounded-full top-[-2px] right-[16px]">{state.cartProduct.length}</div> : null}
        </Link>
      </div>
      <main className="flex flex-wrap justify-center">
        {state.displayProduct?.map((product) => (
          <ProductCard key={product.id} productDetials={product} state={state} dispatch={dispatch} />
        ))}
      </main>
    </>
  );
}
