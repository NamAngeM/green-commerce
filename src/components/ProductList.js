 import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  const [filter, setFilter] = useState('all');
  
  // Extraire les catégories uniques des produits
  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  // Filtrer les produits par catégorie
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category 
                  ? 'bg-green-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Tous les produits' : category}
            </button>
          ))}
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
