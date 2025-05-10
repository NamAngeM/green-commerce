"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "@/contexts/CartContext"
import { products } from "../../data/products"
import SimpleNavbar from "@/components/SimpleNavbar"
import SimpleFooter from "@/components/SimpleFooter"

export default function Boutique() {
  const { addToCart } = useCart()
  const [category, setCategory] = useState("all")
  
  // Filtrer les produits par catégorie
  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.category === category)
  
  // Extraire les catégories uniques
  const categories = ["all", ...new Set(products.map(product => product.category))]
  
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-dark mb-4">Nos produits écologiques</h1>
          <p className="text-text-medium max-w-2xl mx-auto">
            Découvrez notre sélection de produits respectueux de l'environnement, 
            soigneusement choisis pour leur qualité et leur impact écologique minimal.
          </p>
        </div>
        
        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat 
                  ? "bg-green-primary text-white shadow-md" 
                  : "bg-cream hover:bg-green-pale/30 text-text-medium"
              }`}
            >
              {cat === "all" ? "Tous les produits" : cat}
            </button>
          ))}
        </div>
        
        {/* Liste des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-52 relative bg-cream-light p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-green-pale/80 text-green-dark text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-text-dark group-hover:text-green-primary transition-colors">{product.name}</h3>
                <p className="text-text-light text-sm mb-4">{product.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-accent font-bold">{product.price.toFixed(2)} €</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-green-primary hover:bg-green-dark text-white px-4 py-2 rounded-md text-sm transition-colors shadow-sm"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-cream rounded-lg">
            <p className="text-text-medium text-lg">Aucun produit trouvé dans cette catégorie.</p>
            <button 
              onClick={() => setCategory("all")}
              className="mt-4 text-green-primary hover:text-green-accent"
            >
              Voir tous les produits
            </button>
          </div>
        )}
      </div>
      
      <SimpleFooter />
    </main>
  )
}
