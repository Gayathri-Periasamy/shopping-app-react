import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "wouter";

function Home() {
	return (
		<Layout>
			{/* Hero Section */}

			<section className="bg-yellow-50 py-12">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h2 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800">
						Authentic Homemade South Indian Snacks
					</h2>
					<p className="text-lg text-gray-700 mb-6">
						Made fresh with love and tradition. Local pickup only.
					</p>
					<Link
						href="/products"
						className="inline-block bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400 transition"
					>
						Explore Menu
					</Link>
				</div>
			</section>

			{/* How It Works */}
			<section className="bg-orange-50 py-12">
				<div className="max-w-4xl mx-auto px-4">
					<h3 className="text-xl font-semibold text-center mb-6 text-gray-800">
						How It Works
					</h3>
					<div className="grid sm:grid-cols-3 gap-6 text-center">
						<div>
							<h4 className="text-lg font-semibold mb-2">
								1. Browse Menu
							</h4>
							<p className="text-sm text-gray-700">
								Pick from our selection of traditional snacks.
							</p>
						</div>
						<div>
							<h4 className="text-lg font-semibold mb-2">
								2. Place Order
							</h4>
							<p className="text-sm text-gray-700">
								Add to cart and confirm your pickup time.
							</p>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-2">
								3. Pickup & Enjoy
							</h3>
							<p className="text-sm text-gray-700">
								Collect from our store. Pay in person.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Bestsellers Preview */}
			<section className="py-12 bg-yellow-50">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-xl font-semibold mb-6 text-gray-800">
						Customer Favorites
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						{/* Example static previews */}
						<div className="p-4 border rounded shadow-sm bg-white text-center">
							<h3 className="font-semibold text-lg mb-1">
								Thenkuzhal
							</h3>
							<p className="text-sm text-gray-700">
								Crispy, golden, and irresistibly crunchy.
							</p>
						</div>
						<div className="p-4 border rounded shadow-sm bg-white text-center">
							<h3 className="font-semibold text-lg mb-1">
								Adhirasam
							</h3>
							<p className="text-sm text-gray-700">
								Sweet jaggery rice delight — festival favorite.
							</p>
						</div>
						<div className="p-4 border rounded shadow-sm bg-white text-center">
							<h3 className="font-semibold text-lg mb-1">
								Lemon Pickle
							</h3>
							<p className="text-sm text-gray-700">
								Tangy and bold — perfect with curd rice.
							</p>
						</div>
					</div>

					<div className="text-center mt-6">
						<Link
							href="/products"
							className="text-black hover:underline text-md font-medium"
						>
							View Full Menu →
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
}

export default Home;
