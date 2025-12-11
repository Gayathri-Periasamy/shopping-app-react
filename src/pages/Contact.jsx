import React from "react";
import Layout from "../components/Layout/Layout";

function Contact() {
	return (
		<Layout>
			{/* Contact */}
			<section className="bg-yellow-50 py-12">
				<div className="max-w-4xl mx-auto px-4 text-left py-4">
					<h2 className="text-2xl text-center font-semibold mb-8 text-gray-800">
						Welcome to MM Foods!
					</h2>
					<p className="mb-2">
						Store Location: <strong>Spreestrasse 10,</strong> 16321
						- Bernau
					</p>
					<p className="mb-2">Phone: +49 01234567890</p>
					<p className="mb-2">Email: mmfoods@mailsac.com</p>
					<p className="mb-2">WhatsApp: +91 1234567890</p>
					<p className="mb-4 py-8 text-center">
						We are reachable on all weekdays except Public holidays,
						between 8:00 hours and 17:00 hours. Ordered goods can be
						picked up from 14:00 hours!
					</p>
				</div>
			</section>
		</Layout>
	);
}

export default Contact;
