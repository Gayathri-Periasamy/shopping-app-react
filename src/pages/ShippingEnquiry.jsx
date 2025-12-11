import React from "react";
import Layout from "../components/Layout/Layout";

function ShippingEnquiry() {
  return (
    <Layout>
      <div className="text-left p-8">
        <h1 className="mb-4">Shipping Enquiry</h1>
        <p>
          We ship within Germany! Please WhatAapp at +91 1234567890 or email
          mmfoods@mailsac.com.
        </p>
        <br />
        <p>Name: </p>
        <p>Email ID: </p>
        <p>Phone (WhatsApp): +49 01234567890</p>
        <p>Shipping Address: </p>
        <p>Please list the items you want to order: </p>
        <p classname="mb-4">Other Comments or Queries </p>
        <br />
        <p>We will contact you by WhatsApp on the number you provided.</p>
      </div>
    </Layout>
  );
}

export default ShippingEnquiry;
