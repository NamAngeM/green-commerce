"use client"

import Image from "next/image"
import Link from "next/link"
import SimpleNavbar from "@/components/SimpleNavbar"
import SimpleFooter from "@/components/SimpleFooter"
import { products } from "../data/products"

export default function Home() {
  // Sélection de produits populaires (4 premiers)
  const featuredProducts = products.slice(0, 4)
  
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SimpleNavbar />
      
      {/* Hero section */}
      <section className="bg-gradient-to-br from-green-pale/30 to-cream-light py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-dark mb-4">
                Produits écologiques pour un mode de vie durable
              </h1>
              <p className="text-lg text-text-medium mb-8 max-w-xl">
                Découvrez notre sélection de produits respectueux de l'environnement pour un quotidien plus vert et responsable.
              </p>
              <Link href="/boutique" className="bg-green-accent hover:bg-green-dark text-white px-8 py-3 rounded-md inline-block transition-colors shadow-md">
                Découvrir nos produits
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-72 md:h-96 w-full rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src="/images/slider/slide1.jpg" 
                  alt="Produits écologiques" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-dark">Nos produits populaires</h2>
          <p className="text-text-medium text-center mb-12 max-w-2xl mx-auto">
            Découvrez notre sélection de produits éco-responsables les plus appréciés par notre communauté.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 relative bg-cream-light p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 text-text-dark">{product.name}</h3>
                  <p className="text-text-light text-sm mb-4">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-accent font-bold">{product.price.toFixed(2)} €</span>
                    <Link href={`/boutique`} className="text-green-primary hover:text-green-accent transition-colors">
                      Voir détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/boutique" className="text-green-primary hover:text-green-accent transition-colors font-medium inline-flex items-center">
              Voir tous nos produits
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Simple CTA */}
      <section className="bg-gradient-to-r from-green-dark to-green-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez notre mouvement écologique</h2>
          <p className="max-w-2xl mx-auto mb-8 text-green-pale/90">
            Ensemble, nous pouvons faire une différence pour notre planète. Découvrez nos produits écologiques dès aujourd'hui et participez à la construction d'un avenir plus durable.
          </p>
          <Link href="/boutique" className="bg-white text-green-dark hover:bg-cream hover:text-green-accent px-8 py-3 rounded-md inline-block transition-colors shadow-md">
            Commencer maintenant
          </Link>
        </div>
      </section>
      
      <SimpleFooter />
    </main>
  )
}