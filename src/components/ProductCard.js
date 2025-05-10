import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1);
  };
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 relative overflow-hidden bg-gray-200">
        <img
          src={product.image || '/images/products/placeholder.jpg'}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-green-primary font-bold">{product.price.toFixed(2)} €</span>
          
          <button 
            className="bg-green-light hover:bg-green-primary text-white py-2 px-3 rounded-md flex items-center gap-1 transition-colors"
            onClick={handleAddToCart}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <FaShoppingCart className="text-sm" />
            <span className="text-sm">Ajouter</span>
          </button>
        </div>
      </div>
    </div>
  );
}