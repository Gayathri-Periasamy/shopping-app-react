import Orderform from "../components/OrderForm/OrderForm";
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout/Layout";
import { Link } from "wouter";

function Checkout() {
	const { cartItems } = useCart();
	if (cartItems.length === 0) {
		return (
			<div>
				<p className="text-center">
					Your cart is Empty. Please add some products!
				</p>
				<Link
					href="/products"
					className="bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400 transition"
				>
					Continue Shopping
				</Link>
			</div>
		);
	}

	const handleOrderSubmit = (orderData) => {
		localStorage.setItem("latestCart", JSON.stringify(cartItems));
		console.log("Order Placed: ", orderData, cartItems);
	};

	return (
		<Layout>
			<div>
				<h2 className="text-2xl text-gray-900 font-semibold p-4">
					{" "}
					Place your Order{" "}
				</h2>
				<Orderform onSubmit={handleOrderSubmit} />
			</div>
		</Layout>
	);
}

export default Checkout;
