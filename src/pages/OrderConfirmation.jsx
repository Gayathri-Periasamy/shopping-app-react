import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout/Layout";

function OrderConfirmation() {
	const order = JSON.parse(localStorage.getItem("latestOrder"));

	const { clearCart } = useCart();

	useEffect(() => {
		clearCart();
	}, [clearCart]);

	const items = JSON.parse(localStorage.getItem("latestCart")) || [];

	return (
		<Layout>
			<div className="max-w-xl mx-auto p-6 text-center bg-yellow-50">
				<h2 className="text-2xl font-semibold text-green-700 mb-4">
					✅ Order Confirmed!
				</h2>
				<p className="mb-4">
					Thank you, <strong>{order?.name}</strong>!{" "}
				</p>
				<p className="mb-4">
					Your order will be ready for{" "}
					<strong>{order?.pickupTime}</strong>.
				</p>

				<p className="mb-4">
					For orders placed after 17:00 hours, pickup will be on the
					<strong> next business day</strong>.
				</p>

				<p className="text-center text-gray-500 mb-4">
					Order Reference:{" "}
					<span className="font-mono text-sm">{order.orderRef}</span>
				</p>
				{/*}
				<p className="text-lg font-semibold mt-2">
					{order?.pickupTime}
				</p>
				*/}
				<p className="mt-10 text-gray-900 mb-6 underline">
					We'll see you soon! Payment is due at pickup.
				</p>

				{/* Ordered Items */}
				<div className="bg-orange-50 rounded p-4">
					<h3 className="text-lg font-semibold mb-3">
						Order Summary
					</h3>
					{items.length === 0 ? (
						<p>No items found.</p>
					) : (
						<ul className="space-y-2">
							{items.map((item, index) => (
								<li
									key={index}
									className="flex justify-between"
								>
									<span>
										{item.name} x {item.quantity || 1}
									</span>
									<span className="text-sm text-gray-600">
										€
										{(
											item.price * (item.quantity || 1)
										).toFixed(2)}
									</span>
								</li>
							))}
						</ul>
					)}

					<div className="pt-4 mt-3 border-t text-right font-semibold">
						Total: €
						{items
							.reduce(
								(sum, item) =>
									sum + item.price * (item.quantity || 1),
								0,
							)
							.toFixed(2)}
					</div>
				</div>

				<p className="text-center text-gray-600 mt-10">
					We look forward to serving you at our Store in Spreestrasse
					10, Bernau! 🧑‍🍳
				</p>
			</div>
		</Layout>
	);
}

export default OrderConfirmation;
