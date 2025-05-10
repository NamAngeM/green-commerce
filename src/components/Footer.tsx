"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Logique d'inscription à la newsletter
    alert(`Merci de vous être inscrit à notre newsletter avec l'email: ${email}`)
    setEmail('')
  }
  
  return (
    <footer className="bg-green-dark text-white">
      {/* Bannière newsletter */}
      <div className="bg-green-primary py-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Inscrivez-vous à notre newsletter</h3>
              <p className="text-white/90">Recevez nos offres exclusives et nos conseils écologiques</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 rounded-full text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit"
                className="bg-white text-green-primary hover:bg-gray-100 font-medium px-6 py-3 rounded-full transition-colors"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Contenu principal du footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 - À propos */}
          <div>
            <h4 className="text-xl font-bold mb-4">À propos de GreenCommerce</h4>
            <p className="text-white/80 mb-4">
              GreenCommerce est votre boutique en ligne dédiée aux produits écologiques et durables. 
              Notre mission est de rendre accessibles des alternatives respectueuses de l'environnement 
              pour un mode de vie plus responsable.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-pale transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-pale transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-pale transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-pale transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Colonne 2 - Informations */}
          <div>
            <h4 className="text-xl font-bold mb-4">Informations</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/a-propos" className="text-white/80 hover:text-white transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="text-white/80 hover:text-white transition-colors">
                  Livraison et retours
                </Link>
              </li>
              <li>
                <Link href="/conditions-generales" className="text-white/80 hover:text-white transition-colors">
                  Conditions générales de vente
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-white/80 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-white/80 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 3 - Catégories */}
          <div>
            <h4 className="text-xl font-bold mb-4">Nos catégories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/boutique/maison" className="text-white/80 hover:text-white transition-colors">
                  Maison écologique
                </Link>
              </li>
              <li>
                <Link href="/boutique/cosmetiques" className="text-white/80 hover:text-white transition-colors">
                  Cosmétiques naturels
                </Link>
              </li>
              <li>
                <Link href="/boutique/alimentation" className="text-white/80 hover:text-white transition-colors">
                  Alimentation bio
                </Link>
              </li>
              <li>
                <Link href="/boutique/mode" className="text-white/80 hover:text-white transition-colors">
                  Mode éthique
                </Link>
              </li>
              <li>
                <Link href="/boutique/nouveautes" className="text-white/80 hover:text-white transition-colors">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link href="/boutique/promotions" className="text-white/80 hover:text-white transition-colors">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Colonne 4 - Contact et paiement */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">
                  123 Rue de l'Écologie<br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-white/80">01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-white/80">contact@greencommerce.fr</span>
              </li>
            </ul>
            
            <h4 className="text-xl font-bold mb-4">Moyens de paiement</h4>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                <Image src="/images/payment/visa.svg" alt="Visa" width={30} height={20} />
              </div>
              <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={30} height={20} />
              </div>
              <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                <Image src="/images/payment/paypal.svg" alt="PayPal" width={30} height={20} />
              </div>
              <div className="bg-white p-2 rounded-md w-12 h-8 flex items-center justify-center">
                <Image src="/images/payment/apple-pay.svg" alt="Apple Pay" width={30} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Barre de copyright */}
      <div className="bg-green-darker py-4">
        <div className="container-custom text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} GreenCommerce. Tous droits réservés.</p>
          <p className="mt-2">
            Conçu avec 💚 pour un monde plus durable
          </p>
        </div>
      </div>
    </footer>
  )
}