
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, BookOpen, Play, Users } from 'lucide-react';

const Strategies = () => {
  const strategies = [
    {
      id: 1,
      title: "Стратагема единства сознания",
      description: "Комплексный подход к объединению человеческого сознания через практики и философию",
      level: "Основная",
      topics: 12,
      participants: 847,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Стратегия глобального развития",
      description: "Пути развития человечества как единой цивилизации",
      level: "Продвинутая",
      topics: 8,
      participants: 432,
      color: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Основы гармоничного существования",
      description: "Фундаментальные принципы жизни в гармонии с собой и миром",
      level: "Базовая",
      topics: 15,
      participants: 1203,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Стратегии и Стратагемы
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Комплексные системы знаний и практик для развития сознания и достижения единства человечества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy) => (
            <Card key={strategy.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 group">
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant="secondary" 
                      className={`bg-gradient-to-r ${strategy.color} text-white border-0`}
                    >
                      {strategy.level}
                    </Badge>
                    <Target className="text-white/60" size={24} />
                  </div>
                  
                  <CardTitle className="text-white text-xl leading-tight">
                    {strategy.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  {strategy.description}
                </p>
                
                <div className="flex items-center justify-between text-white/60 text-sm">
                  <div className="flex items-center space-x-1">
                    <BookOpen size={16} />
                    <span>{strategy.topics} тем</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{strategy.participants}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Play size={16} className="mr-2" />
                    Начать изучение
                  </Button>
                  
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    <BookOpen size={16} className="mr-2" />
                    Подробнее о стратегии
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-white mb-4">
                Что такое Стратагемы ALLHUMANITY?
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Стратагемы — это комплексные системы знаний, практик и философских концепций, 
                разработанные для гармоничного развития человечества. Каждая стратагема содержит 
                теоретические основы, практические упражнения и методы применения в повседневной жизни.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Узнать больше о философии проекта
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Strategies;
