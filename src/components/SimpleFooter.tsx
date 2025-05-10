import Link from 'next/link'

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-green-dark text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-green-pale mb-2">GreenCommerce</h3>
            <p className="text-green-pale/80 max-w-md">
              Votre boutique en ligne de produits écologiques et durables pour un mode de vie respectueux de l'environnement.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <Link href="/mentions-legales" className="text-green-pale hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-green-pale hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/contact" className="text-green-pale hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/a-propos" className="text-green-pale hover:text-white transition-colors">
              À propos
            </Link>
          </div>
        </div>
        
        <div className="border-t border-green-light/20 mt-8 pt-6 text-center text-green-pale/70">
          <p>
            &copy; {currentYear} GreenCommerce. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}