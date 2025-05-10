"use client";

import SimpleNavbar from '@/components/SimpleNavbar';
import SimpleFooter from '@/components/SimpleFooter';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SimpleNavbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-dark mb-4">Contactez-nous</h1>
          <p className="text-text-medium max-w-2xl mx-auto">
            Une question ? Un conseil ? N'hésitez pas à nous contacter. Notre équipe est là pour vous répondre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-green-primary mb-6">Nos coordonnées</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-pale/20 p-3 rounded-full mr-4">
                  <FiMail className="text-green-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-text-dark mb-1">Email</h3>
                  <p className="text-text-medium">contact@greencommerce.fr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-pale/20 p-3 rounded-full mr-4">
                  <FiPhone className="text-green-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-text-dark mb-1">Téléphone</h3>
                  <p className="text-text-medium">+33 (0)1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-pale/20 p-3 rounded-full mr-4">
                  <FiMapPin className="text-green-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-text-dark mb-1">Adresse</h3>
                  <p className="text-text-medium">123 Rue de l'Écologie<br />75001 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white rounded-lg shadow-md p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-pale/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-green-primary mb-2">Message envoyé !</h2>
                <p className="text-text-medium mb-6">
                  Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-green-primary hover:text-green-dark transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-text-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-text-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-text-medium mb-2">Sujet</label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-primary focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-primary hover:bg-green-dark text-white font-medium py-3 rounded-md transition-colors shadow-md"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <SimpleFooter />
    </main>
  );
}