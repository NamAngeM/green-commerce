 import Link from 'next/link';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaLeaf className="text-green-pale text-2xl mr-2" />
              <span className="text-xl font-bold">Green<span className="text-green-pale">Commerce</span></span>
            </div>
            <p className="text-gray-200 mb-6">
              Des produits écologiques pour un avenir durable
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                 className="text-white hover:text-green-pale transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                 className="text-white hover:text-green-pale transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="text-white hover:text-green-pale transition-colors text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-pale pb-2">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-pale pb-2">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/boutique?category=Hygiène"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Hygiène
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique?category=Maison"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Maison
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique?category=Alimentation"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Alimentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/boutique?category=Mode"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Mode
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-pale pb-2">Contact</h3>
            <address className="not-italic text-gray-200 space-y-2">
              <p>123 Rue de l'Écologie</p>
              <p>75001 Paris, France</p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:contact@greencommerce.fr" className="hover:text-white transition-colors">
                  contact@greencommerce.fr
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-pale mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GreenCommerce. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/mentions-legales"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Mentions légales
            </Link>
            <Link 
              href="/confidentialite"
              className="text-gray-200 hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link 
              href="/cgv"
              className="text-gray-200 hover:text-white transition-colors"
            >
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
