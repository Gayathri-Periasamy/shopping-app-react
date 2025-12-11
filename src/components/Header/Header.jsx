import React from "react";
import { Link } from "wouter";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function Header() {
	const { getTotalQuantity } = useCart();
	const totalQty = getTotalQuantity();
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto flex justify-between items-center text-lg">
				{/* Logo */}
				<Link href="/" className="block">
					<img
						src="/images/products/MMFoods_logo2.png"
						alt="MM Foods Logo"
						className="h-8 sm:h-10 md:h-12 lg:h-30 w-auto object-contain"
						aria-label="Homepage"
					/>
				</Link>

				{/* Hamburger Icon - mobile only */}
				<div className="md:hidden ml-4">
					<button onClick={toggleMenu} aria-label="Toggle Menu">
						{menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>

				{/* Nav Links (desktop) */}
				<div className="hidden md:flex items-center space-x-6">
					<Link href="/">Home</Link>
					<Link href="/products">Products</Link>
					<Link href="/about">About</Link>
					<Link href="/contact">Contact</Link>
				</div>

				{/* Right: Cart icon (always visible) */}
				<Link
					href="/cart"
					className="ml-4 relative hover:text-yellow-300"
				>
					<FiShoppingCart size={22} className="inline" />
					Cart{" "}
					{totalQty > 0 && (
						<span className="ml-1 text-sm font-semibold text-red-600">
							{totalQty}
						</span>
					)}
				</Link>
			</div>

			{/* Mobile Menu */}

			{menuOpen && (
				<div className="md:hidden mt-2 space-y-2 px-4">
					<Link
						href="/"
						className="block hover:text-yellow-600"
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						href="/products"
						className="block hover:text-yellow-600"
						onClick={toggleMenu}
					>
						Products
					</Link>
					<Link
						href="/about"
						className="block hover:text-yellow-600"
						onClick={toggleMenu}
					>
						About
					</Link>
					<Link
						href="/contact"
						className="block hover:text-yellow-600"
						onClick={toggleMenu}
					>
						Contact
					</Link>
					<Link
						href="/cart"
						className="block hover:text-yellow-600"
						onClick={toggleMenu}
					>
						<FiShoppingCart className="inline mr-1" />
						Cart{" "}
						{totalQty > 0 && (
							<span className="text-red-600">({totalQty})</span>
						)}
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Header;
