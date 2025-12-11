function MiniCart({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-yellow-300 text-gray-900 px-4 py-2 rounded shadow-lg animate-fade-in">
      ✅ Item added to cart!
      <button onClick={onClose} className="ml-4 text-sm underline">
        Dismiss
      </button>
    </div>
  );
}

export default MiniCart;
