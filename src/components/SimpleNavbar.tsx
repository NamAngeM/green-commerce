"use client"

import Link from 'next/link'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { FiMenu, FiX, FiShoppingBag, FiHome, FiGrid, FiMail } from 'react-icons/fi'
import Image from 'next/image'

export default function SimpleNavbar() {
  const { cart } = useContext(CartContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
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
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card shadow-md py-2' 
        : 'bg-card/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-green-accent rounded-full opacity-20"></div>
              <div className="absolute inset-1 bg-green-accent rounded-full opacity-40 flex items-center justify-center">
                <FiShoppingBag className="text-green-dark w-4 h-4" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-primary to-green-accent bg-clip-text text-transparent">
              GreenCommerce
            </span>
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2 border-b-2 border-transparent hover:border-green-accent"
                >
                  <FiHome className="mr-1" />
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique" 
                  className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2 border-b-2 border-transparent hover:border-green-accent"
                >
                  <FiGrid className="mr-1" />
                  <span>Boutique</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2 border-b-2 border-transparent hover:border-green-accent"
                >
                  <FiMail className="mr-1" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Panier et Menu Mobile */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/panier" 
              className="relative p-2 text-text-medium hover:text-green-accent transition-colors"
              aria-label="Panier"
            >
              <FiShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {/* Bouton menu mobile */}
            <button 
              className="md:hidden p-2 text-text-medium hover:text-green-accent transition-colors"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="container mx-auto px-4 py-4 bg-card shadow-inner">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                href="/" 
                className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome className="mr-2" />
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/boutique" 
                className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiGrid className="mr-2" />
                <span>Boutique</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiMail className="mr-2" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/panier" 
                className="flex items-center text-text-medium hover:text-green-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiShoppingBag className="mr-2" />
                <span>Panier</span>
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-accent text-white text-xs rounded-full px-2 py-1">
                    {cartItemCount} article{cartItemCount > 1 ? 's' : ''}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}