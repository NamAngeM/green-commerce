 import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { cart } = useCart();
  
  // Calculer le nombre total d'articles dans le panier
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Détecter le défilement pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-gray-800">
            Green<span className="text-green-primary">Commerce</span>
          </Link>
        </div>
        
        <nav className={`fixed md:relative top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 md:transition-none z-50 md:z-auto flex items-center justify-center md:justify-start`}>
          <ul className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 text-lg md:text-base">
            <li>
              <Link 
                href="/" 
                className={`font-medium hover:text-green-primary transition-colors ${
                  router.pathname === '/' ? 'text-green-primary' : 'text-gray-700'
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/boutique"
                className={`font-medium hover:text-green-primary transition-colors ${
                  router.pathname === '/boutique' ? 'text-green-primary' : 'text-gray-700'
                }`}
              >
                Boutique
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className={`font-medium hover:text-green-primary transition-colors ${
                  router.pathname === '/contact' ? 'text-green-primary' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="/panier"
            className="text-gray-700 hover:text-green-primary transition-colors relative"
          >
            <FaShoppingCart className="text-xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          <button 
            className="text-gray-700 hover:text-green-primary transition-colors text-xl md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
