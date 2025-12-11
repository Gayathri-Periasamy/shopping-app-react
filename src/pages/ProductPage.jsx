import { useRoute } from "wouter";
import products from "../data/products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Layout from "../components/Layout/Layout";

function ProductPage() {
  const [match, params] = useRoute("/product/:id");

  if (!match) return <p>Product not found</p>;

  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <ProductDetails product={product} />
    </Layout>
  );
}

export default ProductPage;
