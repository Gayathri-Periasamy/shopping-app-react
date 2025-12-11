import productsdata from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import Layout from "../components/Layout/Layout";

function Products() {
  return (
    <Layout>
      <h2 className="text-2xl text-gray-900 font-semibold p-4">
        {" "}
        Our Products{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {productsdata.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Products;
