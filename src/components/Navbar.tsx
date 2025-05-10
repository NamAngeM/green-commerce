"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '@/contexts/CartContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cart } = useContext(CartContext)
  
  // Calculer le nombre total d'articles dans le panier
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  
  // Détecter le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Logique de recherche à implémenter
    console.log('Recherche:', searchQuery)
    setIsSearchOpen(false)
  }
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Barre supérieure */}
      <div className="bg-green-primary text-white py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="text-sm">
            <span className="hidden md:inline">Livraison gratuite à partir de 49€ d'achat</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <Link href="/a-propos" className="hover:underline">À propos</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/mon-compte" className="hover:underline flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Mon compte
            </Link>
          </div>
        </div>
      </div>
      
      {/* Barre principale */}
      <div className="bg-white py-3">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-green-primary text-2xl font-bold">GreenCommerce</span>
          </Link>
          
          {/* Barre de recherche (desktop) */}
          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
          
          {/* Actions (desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-text-medium hover:text-green-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            
            <Link href="/panier" className="flex items-center space-x-1 text-text-medium hover:text-green-primary relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              </svg>
              <span>Panier</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Menu burger (mobile) */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/panier" className="text-text-medium hover:text-green-primary relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-text-medium hover:text-green-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-medium hover:text-green-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation principale */}
      <nav className="bg-green-pale hidden md:block">
        <div className="container-custom">
          <ul className="flex justify-center space-x-8 py-3">
            <li>
              <Link href="/boutique" className="font-medium hover:text-green-primary transition-colors">
                Tous les produits
              </Link>
            </li>
            <li>
              <Link href="/boutique/maison" className="font-medium hover:text-green-primary transition-colors">
                Maison écologique
              </Link>
            </li>
            <li>
              <Link href="/boutique/cosmetiques" className="font-medium hover:text-green-primary transition-colors">
                Cosmétiques naturels
              </Link>
            </li>
            <li>
              <Link href="/boutique/alimentation" className="font-medium hover:text-green-primary transition-colors">
                Alimentation bio
              </Link>
            </li>
            <li>
              <Link href="/boutique/mode" className="font-medium hover:text-green-primary transition-colors">
                Mode éthique
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Barre de recherche mobile */}
      {isSearchOpen && (
        <div className="bg-white p-4 md:hidden border-t border-gray-200">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
              autoFocus
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        </div>
      )}
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/boutique" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tous les produits
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique/maison" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Maison écologique
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique/cosmetiques" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cosmétiques naturels
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique/alimentation" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Alimentation bio
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique/mode" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mode éthique
                </Link>
              </li>
              <li className="pt-4 border-t border-gray-200">
                <Link 
                  href="/mon-compte" 
                  className="block font-medium hover:text-green-primary transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Mon compte
                </Link>
              </li>
              <li>
                <Link 
                  href="/a-propos" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block font-medium hover:text-green-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

// Mettre à jour l'affichage du panier dans la navigation
// Par exemple, remplacer "Panier" par "Panier (cartItemCount)"
