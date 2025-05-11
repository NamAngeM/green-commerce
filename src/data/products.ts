import { Product } from '@/contexts/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Brosse à dents en bambou",
    price: 4.99,
    image: "/images/products/brosse-dents-bambou.jpg",
    shortDescription: "Brosse à dents écologique en bambou biodégradable",
    category: "Hygiène"
  },
  {
    id: 2,
    name: "Gourde en inox",
    price: 19.99,
    image: "/images/products/gourde-inox.jpg",
    shortDescription: "Gourde réutilisable en inox 500ml",
    category: "Cuisine"
  },
  {
    id: 3,
    name: "Sac en coton bio",
    price: 9.99,
    image: "/images/products/sac-coton.jpg",
    shortDescription: "Sac réutilisable en coton biologique",
    category: "Accessoires"
  },
  {
    id: 4,
    name: "Savon solide",
    price: 5.99,
    image: "/images/products/savon-solide.jpg",
    shortDescription: "Savon solide naturel sans emballage",
    category: "Hygiène"
  }
]; 