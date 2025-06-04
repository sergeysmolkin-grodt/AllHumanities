
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

interface CartSliderProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSlider = ({ isOpen, onClose }: CartSliderProps) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Футболка ALLHUMANITY",
      price: 25,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Cart Slider */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-gray-900 border-l border-white/20 backdrop-blur-sm z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Корзина</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X size={20} />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-white/70 text-center py-8">
                Корзина пуста
              </div>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="bg-white/10 border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium text-sm">{item.name}</h3>
                        <p className="text-green-400 font-semibold">{item.price}€</p>
                        
                        <div className="flex items-center space-x-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-white/20 text-white hover:bg-white/10"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={12} />
                          </Button>
                          <span className="text-white text-sm px-2">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-white/20 text-white hover:bg-white/10"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={12} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-400 hover:bg-red-400/10 ml-2"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-white/20 pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Итого:</span>
                <span className="text-green-400 font-bold text-lg">{total}€</span>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Оформить заказ
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSlider;
