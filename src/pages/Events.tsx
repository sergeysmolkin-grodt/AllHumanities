
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Video, Users, ExternalLink } from 'lucide-react';

const Events = () => {
  const onlineEvents = [
    {
      id: 1,
      title: "Еженедельная медитация единства",
      description: "Совместная практика медитации для объединения сознания",
      date: "Каждое воскресенье",
      time: "19:00 - 20:00",
      organizer: "Мария Иванова",
      platform: "Zoom",
      participants: 156,
      link: "#"
    },
    {
      id: 2,
      title: "Лекция: Будущее человечества",
      description: "Обсуждение перспектив развития цивилизации",
      date: "25 ноября 2024",
      time: "18:00 - 19:30",
      organizer: "Александр Петров",
      platform: "YouTube Live",
      participants: 89,
      link: "#"
    }
  ];

  const offlineEvents = [
    {
      id: 1,
      title: "Конференция \"Единство в многообразии\"",
      description: "Международная конференция по развитию человечества",
      date: "15-17 декабря 2024",
      time: "10:00 - 18:00",
      location: "Киев, Украина",
      address: "ул. Крещатик, 1",
      organizer: "Команда ALLHUMANITY",
      price: "50€",
      participants: 234
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Мероприятия
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Онлайн и офлайн события для развития и объединения сообщества
          </p>
        </div>

        {/* Онлайн мероприятия */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <Video className="text-blue-400" size={28} />
            <h2 className="text-2xl font-light text-white">Онлайн мероприятия</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {onlineEvents.map((event) => (
              <Card key={event.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-600 text-white">Онлайн</Badge>
                    <div className="flex items-center space-x-1 text-white/60 text-sm">
                      <Users size={16} />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/70 text-sm">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70 text-sm">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70 text-sm">
                      <Video size={16} />
                      <span>{event.platform}</span>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-white/60 text-sm mb-3">Организатор: {event.organizer}</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink size={16} className="mr-2" />
                      Присоединиться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Офлайн мероприятия */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <MapPin className="text-green-400" size={28} />
            <h2 className="text-2xl font-light text-white">Офлайн мероприятия</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {offlineEvents.map((event) => (
              <Card key={event.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-green-600 text-white">Офлайн</Badge>
                    <div className="flex items-center space-x-4">
                      {event.price && (
                        <span className="text-green-400 font-semibold">{event.price}</span>
                      )}
                      <div className="flex items-center space-x-1 text-white/60 text-sm">
                        <Users size={16} />
                        <span>{event.participants}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/70 text-sm">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/70 text-sm">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start space-x-3 text-white/70 text-sm">
                      <MapPin size={16} className="mt-0.5" />
                      <div>
                        <p>{event.location}</p>
                        <p className="text-white/50">{event.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-white/60 text-sm mb-3">Организатор: {event.organizer}</p>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Зарегистрироваться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;
