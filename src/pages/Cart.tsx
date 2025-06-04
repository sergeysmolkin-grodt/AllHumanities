
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-12 tracking-wide text-center">
          Корзина
        </h1>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white">Товары в корзине</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-white/70 text-center py-8">
                Корзина пуста
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Trash2 size={16} className="mr-2" />
              Очистить корзину
            </Button>
            
            <div className="text-right">
              <p className="text-white text-lg mb-4">Итого: 0€</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
