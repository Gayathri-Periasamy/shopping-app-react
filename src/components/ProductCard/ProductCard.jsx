import { Link } from "wouter";

function ProductCard({ product }) {
  return (
    <div className="p-4 shadow hover:shadow-md transition font-semibold ">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-sm w-75 h-90"
      />
      <h3 className="text-lg ">{product.name}</h3>
      <p className="text-sm text-gray-800 mb-2">€{product.price}</p>

      <Link href={`/product/${product.id}`}>
        <button className="!bg-yellow-200 hover:!bg-yellow-300 text-gray-800 px-4 py-2 rounded">
          To Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;
