import { useState } from "react";
import { useLocation } from "wouter";

const isTomorrowPickup = () => {
  	const now = new Date();
  	const cutoffHour = 13; // 13 PM - Order cutoff for same-day pickup
  	return now.getHours() >= cutoffHour;
	};

const pickupDayLabel = isTomorrowPickup() ? "Tomorrow" : "Today";

function OrderForm({ onSubmit }) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [pickupTime, setPickupTime] = useState("");
	const [notes, setNotes] = useState("");
	const [, navigate] = useLocation();

	const handleSubmit = (e) => {
		e.preventDefault();

		const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");

		const orderData = {
			name,
			phone,
			email,
			pickupTime,
			pickupDayLabel,
			notes,
			orderRef: `ORD-${timestamp}`,
		};
		
		localStorage.setItem("latestOrder", JSON.stringify(orderData));
		onSubmit(orderData); // callback
		navigate("/order-confirmation");
	};

	

	return (
		<form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
			<input
				label="Name"
				type="text"
				placeholder="Your Name"
				required
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="w-full p-2 border rounded"
			/>
			<input
				type="tel"
				placeholder="Phone Number"
				required
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				className="w-full p-2 border rounded"
			/>

			<input
				type="email"
				placeholder="E-Mail Address"
				required
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="w-full p-2 border rounded"
			/>
			<select
				value={pickupTime}
				required
				onChange={(e) => setPickupTime(e.target.value)}
				className="w-full p-2 border rounded"
			>
				<option value="" disabled>Select Pickup time</option>
				<option value="at 14:00">14:00</option>
				<option value="at 14:30">14:30</option>
				<option value="at 15:00">15:00</option>
				<option value="at 15:30">15:30</option>
				<option value="at 16:00">16:00</option>
				<option value="at 16:30">16:30</option>
			</select>
			<p className="text-sm text-gray-600 mt-1">
  					ℹ️ Orders are prepared fresh and require 2–3 hours of preparation.
  					Same-day pickup is available for orders placed before 13:00 PM.
				</p>
			<textarea
				placeholder="Special requests or notes"
				value={notes}
				onChange={(e) => setNotes(e.target.value)}
				className="w-full p-2 border rounded"
			/>
			<button
				type="submit"
				className="!bg-yellow-300 hover:!bg-yellow-400 text-black px-4 py-2 mt-6"
			>
				Confirm Order
			</button>
		</form>
	);
}

export default OrderForm;
