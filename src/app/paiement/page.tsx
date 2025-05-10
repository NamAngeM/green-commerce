"use client";

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CartContext } from '@/contexts/CartContext';
import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';

export default function Paiement() {
  const router = useRouter();
  const { cart, getCartTotal, removeFromCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: 'France',
    numeroCarte: '',
    nomCarte: '',
    dateExpiration: '',
    cvc: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Rediriger vers la page du panier si le panier est vide
  useEffect(() => {
    if (cart.length === 0 && !isOrderComplete) {
      router.push('/panier');
    }
  }, [cart, router, isOrderComplete]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simuler un traitement de paiement
    setTimeout(() => {
      // Générer un numéro de commande aléatoire
      const randomOrderNumber = 'CMD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      setOrderNumber(randomOrderNumber);
      
      // Vider le panier (tous les articles)
      cart.forEach(item => removeFromCart(item.id));
      
      setIsProcessing(false);
      setIsOrderComplete(true);
    }, 2000);
  };

  if (isOrderComplete) {
    return (
      <main>
        <Navbar />
        
        <div className="min-h-screen flex flex-col items-center p-8">
          <div className="w-full max-w-3xl">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-20 h-20 bg-green-pale rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-green-primary mb-4">Commande confirmée !</h1>
              <p className="text-lg text-text-medium mb-6">
                Merci pour votre commande. Votre numéro de commande est : <span className="font-bold">{orderNumber}</span>
              </p>
              <p className="text-text-medium mb-8">
                Un email de confirmation a été envoyé à {formData.email}. Vous recevrez bientôt des informations sur la livraison de votre commande.
              </p>
              
              <Link 
                href="/boutique"
                className="btn-primary inline-block"
              >
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <SimpleNavbar />
      
      <div className="min-h-screen flex flex-col items-center p-8">
        <div className="w-full max-w-5xl">
          <h1 className="text-4xl font-bold text-green-primary text-center mb-12">Paiement</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire de paiement */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Informations de livraison</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="prenom" className="block text-text-medium mb-2 font-medium">Prénom</label>
                    <input 
                      type="text" 
                      id="prenom" 
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-text-medium mb-2 font-medium">Nom</label>
                    <input 
                      type="text" 
                      id="nom" 
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-text-medium mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="adresse" className="block text-text-medium mb-2 font-medium">Adresse</label>
                  <input 
                    type="text" 
                    id="adresse" 
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="ville" className="block text-text-medium mb-2 font-medium">Ville</label>
                    <input 
                      type="text" 
                      id="ville" 
                      name="ville"
                      value={formData.ville}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="codePostal" className="block text-text-medium mb-2 font-medium">Code postal</label>
                    <input 
                      type="text" 
                      id="codePostal" 
                      name="codePostal"
                      value={formData.codePostal}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="pays" className="block text-text-medium mb-2 font-medium">Pays</label>
                    <select 
                      id="pays" 
                      name="pays"
                      value={formData.pays}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    >
                      <option value="France">France</option>
                      <option value="Belgique">Belgique</option>
                      <option value="Suisse">Suisse</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div>
                
                <h2 className="text-2xl font-semibold mb-6 mt-8">Informations de paiement</h2>
                
                <div className="mb-6">
                  <label htmlFor="numeroCarte" className="block text-text-medium mb-2 font-medium">Numéro de carte</label>
                  <input 
                    type="text" 
                    id="numeroCarte" 
                    name="numeroCarte"
                    value={formData.numeroCarte}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="nomCarte" className="block text-text-medium mb-2 font-medium">Nom sur la carte</label>
                  <input 
                    type="text" 
                    id="nomCarte" 
                    name="nomCarte"
                    value={formData.nomCarte}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="dateExpiration" className="block text-text-medium mb-2 font-medium">Date d'expiration (MM/AA)</label>
                    <input 
                      type="text" 
                      id="dateExpiration" 
                      name="dateExpiration"
                      value={formData.dateExpiration}
                      onChange={handleChange}
                      placeholder="MM/AA"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-text-medium mb-2 font-medium">CVC</label>
                    <input 
                      type="text" 
                      id="cvc" 
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-8">
                  <Link 
                    href="/panier"
                    className="text-green-primary hover:text-green-light flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Retour au panier
                  </Link>
                  <button 
                    type="submit" 
                    className="btn-primary"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Traitement en cours...' : 'Confirmer la commande'}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Récapitulatif de commande */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h2 className="text-2xl font-semibold mb-6">Récapitulatif</h2>
                
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="h-16 w-16 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-text-medium">Quantité: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{(item.price * item.quantity).toFixed(2)} €</p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Sous-total</span>
                    <span>{getCartTotal().toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>{getCartTotal().toFixed(2)} €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SimpleFooter />
    </main>
  );
}