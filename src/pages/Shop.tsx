
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Shirt, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const { toast } = useToast();
  
  const products = [
    {
      id: 1,
      name: "Футболка ALLHUMANITY",
      price: "25€",
      category: "Мерч",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      description: "Качественная футболка с символикой проекта",
      icon: Shirt
    },
    {
      id: 2,
      name: "Книга: Единство сознания",
      price: "15€",
      category: "Книга",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
      description: "Основополагающий труд о развитии человечества",
      icon: BookOpen
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} добавлен в корзину`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Магазин
          </h1>
          <p className="text-white/70 text-lg">
            Мерч и книги проекта ALLHUMANITY
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {product.category}
                  </Badge>
                  <span className="text-green-400 font-semibold">{product.price}</span>
                </div>
                <CardTitle className="text-white text-xl">{product.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
