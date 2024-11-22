"use client";

import Link from "next/link";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import { useCartStore } from "@/store/cart/cart-store";
import { useState } from "react";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);

  return (
    <nav className="flex px-1 justify-between items-center w-full navbar">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Damian
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="flex items-center">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <button
          onClick={openSideMenu}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>

      {/* Search, Cart, Menu */}
      {/* <div className="flex items-center">

      </div> */}
    </nav>
  );
};
