
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Video, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const todayHighlights = [
    {
      type: "Статья",
      title: "Философия единства в современном мире",
      author: "Александр П.",
      time: "2 часа назад",
      link: "/posts"
    },
    {
      type: "Эфир",
      title: "Живое обсуждение: Будущее человечества",
      author: "Канал ALLHUMANITY",
      time: "Сегодня в 20:00",
      link: "/events"
    }
  ];

  const latestVideos = [
    {
      title: "Основы медитации единства",
      channel: "ALLHUMANITY",
      duration: "15:32",
      views: "1.2K",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      title: "Интервью с философом о развитии сознания",
      channel: "UkrLife",
      duration: "45:18", 
      views: "2.8K",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      
      {/* Тема дня и основные блоки */}
      <section className="py-16 bg-gradient-to-br from-blue-900/50 via-purple-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Сегодня в центре внимания
            </h2>
            <p className="text-white/70 text-lg">
              Актуальные темы и события дня
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Основные события дня */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-light text-white mb-4 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Важное сегодня
              </h3>
              
              {todayHighlights.map((item, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-blue-600 text-white">
                        {item.type}
                      </Badge>
                      <span className="text-white/60 text-sm">{item.time}</span>
                    </div>
                    <h4 className="text-white font-medium mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm mb-3">{item.author}</p>
                    <Link to={item.link}>
                      <Button variant="ghost" className="text-blue-300 hover:text-blue-200 hover:bg-white/10 p-0 h-auto">
                        Подробнее <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Новые видео */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-light text-white mb-4 flex items-center">
                <Video className="mr-2" size={20} />
                Новые видео
              </h3>
              
              {latestVideos.map((video, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <div className="relative w-24 h-16 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-white/60 text-xs mb-1">{video.channel}</p>
                        <p className="text-white/50 text-xs">{video.views} просмотров</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/posts" className="group">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <FileText className="mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-medium mb-2">Новые статьи</h3>
                  <p className="text-white/60 text-sm">Читайте свежие материалы</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/events" className="group">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-medium mb-2">Мероприятия</h3>
                  <p className="text-white/60 text-sm">Присоединяйтесь к событиям</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/community" className="group">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-medium mb-2">Обсуждения</h3>
                  <p className="text-white/60 text-sm">Участвуйте в диалоге</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/strategies" className="group">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <Video className="mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-medium mb-2">Стратегии</h3>
                  <p className="text-white/60 text-sm">Изучайте методы развития</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <MissionSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
