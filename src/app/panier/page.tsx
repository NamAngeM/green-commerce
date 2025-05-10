"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import SimpleNavbar from "@/components/SimpleNavbar"
import SimpleFooter from "@/components/SimpleFooter"
import { CartContext } from '@/contexts/CartContext'

export default function Panier() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext)
  
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-dark mb-4">Votre Panier</h1>
          <p className="text-text-medium max-w-2xl mx-auto">
            Vérifiez vos articles et procédez au paiement quand vous êtes prêt.
          </p>
        </div>
        
        {cart.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-pale mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-xl text-text-medium mb-6">Votre panier est vide</p>
            <Link 
              href="/boutique"
              className="bg-green-primary hover:bg-green-dark text-white px-6 py-3 rounded-md inline-block transition-colors shadow-md"
            >
              Découvrir nos produits
            </Link>
          </div>
        ) : (
          <div>
            <div className="bg-card rounded-lg shadow-md overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-cream">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">Produit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">Prix</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">Quantité</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">Total</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream">
                  {cart.map(item => (
                    <tr key={item.id} className="hover:bg-cream-light transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 relative mr-4 bg-cream-light rounded-md p-1">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-text-dark">{item.name}</div>
                            <div className="text-xs text-text-light mt-1">{item.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-text-medium">
                        {item.price.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center border border-cream rounded-md w-fit">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-text-medium hover:text-green-primary px-2 py-1 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-text-dark border-x border-cream">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-text-medium hover:text-green-primary px-2 py-1 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-green-accent">
                        {(item.price * item.quantity).toFixed(2)} €
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-text-light hover:text-accent transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-text-dark mb-4">Livraison</h3>
                <p className="text-text-medium mb-4">
                  Nous proposons une livraison gratuite pour toutes les commandes.
                </p>
                <div className="flex items-center text-green-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h5a1 1 0 001-1v-6a1 1 0 00-.293-.707l-2-2A1 1 0 0014 4H3zM14 7h2l-2-2v2z" />
                  </svg>
                  <span className="font-medium">Livraison gratuite</span>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-text-dark mb-4">Résumé de la commande</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-text-medium">Sous-total</span>
                    <span className="text-text-dark">{getCartTotal().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-medium">Livraison</span>
                    <span className="text-green-primary">Gratuite</span>
                  </div>
                </div>
                <div className="border-t border-cream pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-text-dark">Total</span>
                    <span className="text-green-accent">{getCartTotal().toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-4">
              <Link 
                href="/boutique"
                className="bg-cream hover:bg-cream-light text-text-dark px-6 py-3 rounded-md inline-block transition-colors text-center"
              >
                Continuer mes achats
              </Link>
              <Link 
                href="/paiement"
                className="bg-green-accent hover:bg-green-dark text-white px-6 py-3 rounded-md inline-block transition-colors shadow-md text-center"
              >
                Passer la commande
              </Link>
            </div>
          </div>
        )}
      </div>
      
      <SimpleFooter />
    </main>
  )
}