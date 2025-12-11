import { useCart } from "../context/CartContext";
import { useLocation } from "wouter";
import Layout from "../components/Layout/Layout";
import { Link } from "wouter";

function CartPage() {
	const { cartItems, removeFromCart, updateQuantity } = useCart();

	const total = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const [, navigate] = useLocation();

	const handlePlaceOrder = () => {
		navigate("/checkout");
	};

	return (
		<Layout>
			<div className="p-6 max-w-3xl mx-auto bg-white rounded shadow">
				<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

				{cartItems.length === 0 ? (
					<div>
						<p className="text-gray-600 mb-8">
							Your cart is empty.
						</p>
						<Link
							href="/products"
							className="bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400 transition mt-4"
						>
							Continue Shopping
						</Link>
					</div>
				) : (
					<div className="space-y-4">
						{cartItems.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center border-b pb-2"
							>
								<div>
									<p className="font-semibold">{item.name}</p>
									<p className="text-gray-500 text-sm">
										€{item.price}
									</p>
								</div>

								<div className="flex items-center space-x-2">
									<input
										type="number"
										min={1}
										value={item.quantity}
										onChange={(e) =>
											updateQuantity(
												item.id,
												parseInt(e.target.value),
											)
										}
										className="w-16 text-center border rounded"
									/>
									<button
										onClick={() => removeFromCart(item.id)}
										className="text-red-600 hover:underline text-sm"
									>
										Remove
									</button>
								</div>
							</div>
						))}

						<div className="pt-4 mt-4 border-t flex justify-between">
							<span className="font-bold text-lg">Total</span>
							<span className="text-lg font-semibold">
								€{total.toFixed(2)}
							</span>
						</div>

						<button
							className="!bg-yellow-400 hover:!bg-yellow-500 text-black px-4 py-2 mt-4"
							onClick={handlePlaceOrder}
						>
							Place Order
						</button>

						<div className="mt-6">
							<Link href="/products">
								<span className="text-black text-lg hover:underline cursor-pointer">
									← Continue Shopping
								</span>
							</Link>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}

export default CartPage;
