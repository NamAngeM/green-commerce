"use client";

import Image from "next/image";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function APropos() {
  return (
    <main>
      <Navbar />
      
      <div className="container-custom py-16">
        <h1 className="section-title mb-12">Notre engagement écologique</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-green-primary mb-4">Notre mission</h2>
            <p className="text-text-medium mb-4">
              Chez GreenCommerce, notre mission est de rendre les produits écologiques accessibles à tous. 
              Nous croyons qu'en facilitant l'accès à des alternatives durables, nous pouvons collectivement 
              réduire notre impact environnemental.
            </p>
            <p className="text-text-medium mb-4">
              Chaque produit que nous proposons est soigneusement sélectionné pour sa qualité, sa durabilité 
              et son impact minimal sur l'environnement. Nous travaillons directement avec des fabricants 
              et artisans qui partagent nos valeurs.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-medium">
            <Image
              src="/images/products/ecofond.jpg"
              alt="Notre mission écologique"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        
        <div className="bg-cream dark:bg-secondary p-8 rounded-xl mb-16">
          <h2 className="text-2xl font-bold text-green-primary mb-6 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white dark:bg-text-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
              <p className="text-text-medium">Nous privilégions les produits durables qui réduisent les déchets et la consommation de ressources.</p>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-text-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparence</h3>
              <p className="text-text-medium">Nous sommes transparents sur l'origine de nos produits et leur impact environnemental.</p>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-text-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
              <p className="text-text-medium">Nous rendons les produits écologiques accessibles à tous, tant par leur prix que par leur disponibilité.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-green-primary mb-6 text-center">Notre démarche écologique</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-text-dark p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Sélection rigoureuse des produits</h3>
              <p className="text-text-medium">Chaque produit est évalué selon des critères stricts : matériaux utilisés, processus de fabrication, empreinte carbone, durabilité et fin de vie du produit.</p>
            </div>
            <div className="bg-white dark:bg-text-dark p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Emballages éco-responsables</h3>
              <p className="text-text-medium">Nous utilisons des emballages recyclés, recyclables ou compostables. Nous réduisons au maximum les emballages superflus.</p>
            </div>
            <div className="bg-white dark:bg-text-dark p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold mb-2">Livraison à faible impact</h3>
              <p className="text-text-medium">Nous optimisons nos livraisons pour réduire l'empreinte carbone et proposons des options de livraison écologique.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-primary mb-4">Rejoignez notre mouvement</h2>
          <p className="text-text-medium max-w-2xl mx-auto mb-8">
            En choisissant GreenCommerce, vous participez à un mouvement plus large pour un avenir plus durable.
            Chaque achat est un pas vers un mode de vie plus respectueux de notre planète.
          </p>
          <a href="/boutique" className="btn-primary inline-block">Découvrir nos produits</a>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}