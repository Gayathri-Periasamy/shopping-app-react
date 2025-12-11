import { useState } from "react";
import { useCart } from "../../context/CartContext";
import MiniCart from "../../components/MiniCart/MiniCart";
import { Link } from "wouter";

function ProductDetails({ product }) {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [showMiniCart, setShowMiniCart] = useState(false);

	const handleAdd = (qty = quantity) => {
		const finalQty = Math.max(1, parseInt(qty, 10) || 1);
		console.log("Adding to cart:", product.id, "qty:", finalQty);
		addToCart({ ...product, quantity: finalQty });
		setShowMiniCart(true);
		setTimeout(() => setShowMiniCart(false), 6000);
	};

	/*
	const handleAddToCart = (product) => {
		addToCart(product);
		setShowMiniCart(true);
		setTimeout(() => setShowMiniCart(false), 6000);
	};
	*/

	return (
		<div className="p-6 max-w-3xl mx-auto">
			{/* Two-column layout */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left column: Image */}
				<div>
					<img
						src={product.image}
						alt={product.name}
						className="w-full max-h-[600px] object-cover rounded shadow"
					/>
				</div>
				{/* Right column: Details */}
				<div className="flex flex-col justify-between">
					<div>
						<h3 className="text-2xl font-semibold mb-2 py-4">
							{product.name}
						</h3>
						<p className="text-lg text-gray-800 mb-4">
							€{product.price}
						</p>
						<p className="text-lg text-gray-800 mb-4">
							{product.description}
						</p>
						<label className="mr-2 font-medium mt-8">
							Quantity:
						</label>
						<input
							type="number"
							min={1}
							value={quantity}
							onChange={(e) =>
								setQuantity(
									Math.max(
										1,
										parseInt(e.target.value, 10) || 1,
									),
								)
							}
							className="border px-3 py-1 rounded w-20"
						/>
					</div>
				</div>
			</div>
			{/* Add to Cart button outside the layout */}
			<div className="mt-4 text-center">
				<button
					onClick={() => handleAdd(quantity)}
					className="!bg-yellow-300 hover:!bg-yellow-400 text-black"
				>
					Add to Cart
				</button>
			</div>

			<div className="mt-6">
				<Link href="/products">
					<span className="text-black text-lg hover:underline cursor-pointer">
						← Continue Shopping
					</span>
				</Link>
			</div>
			<>
				<MiniCart
					show={showMiniCart}
					onClose={() => setShowMiniCart(false)}
				/>
			</>
		</div>
	);
}

export default ProductDetails;
