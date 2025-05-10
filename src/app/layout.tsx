import '../styles/globals.css';
import type { Metadata } from 'next'
import { CartProvider } from '@/contexts/CartContext'

export const metadata: Metadata = {
  title: 'Green Commerce - Produits écologiques',
  description: 'Boutique en ligne de produits écologiques et durables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-50 text-gray-800 min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}