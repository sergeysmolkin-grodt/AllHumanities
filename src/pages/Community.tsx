
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, Plus, TrendingUp } from 'lucide-react';

const Community = () => {
  const communities = [
    {
      id: 1,
      name: "Философия единства",
      description: "Обсуждение философских аспектов развития человечества",
      members: 1247,
      topics: 89,
      category: "Философия"
    },
    {
      id: 2,
      name: "Практики развития",
      description: "Практические методы саморазвития и роста сознания",
      members: 892,
      topics: 156,
      category: "Развитие"
    }
  ];

  const topContributors = [
    { name: "Александр П.", points: 2340, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "Мария К.", points: 1876, avatar: "https://images.unsplash.com/photo-1494790108755-2616b95b2e2f?w=100&h=100&fit=crop&crop=face" },
    { name: "Дмитрий С.", points: 1654, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
              Комьюнити
            </h1>
            <p className="text-white/70 text-lg">
              Пространства для обсуждения и развития
            </p>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus size={16} className="mr-2" />
            Создать комьюнити
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Основные комьюнити */}
          <div className="lg:col-span-2 space-y-6">
            {communities.map((community) => (
              <Card key={community.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {community.category}
                    </Badge>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{community.members}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare size={16} />
                        <span>{community.topics}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{community.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {community.description}
                  </p>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <MessageSquare size={16} className="mr-2" />
                    Присоединиться к обсуждению
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Сайдбар */}
          <div className="space-y-6">
            {/* Лучшие контрибьюторы */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp size={20} className="mr-2" />
                  Лучшие контрибьюторы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={contributor.avatar} 
                        alt={contributor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{contributor.name}</p>
                      <p className="text-white/60 text-xs">{contributor.points} баллов</p>
                    </div>
                    <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                      #{index + 1}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Общие темы */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Общие темы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {['Книги', 'Музыка', 'Искусство', 'Философия', 'Наука'].map((topic, index) => (
                  <Button key={index} variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
                    {topic}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
