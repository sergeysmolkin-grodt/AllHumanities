
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Plus, TrendingUp, Clock, Eye } from 'lucide-react';
import { useState } from 'react';

const Posts = () => {
  const [sortBy, setSortBy] = useState('new');

  const posts = [
    {
      id: 1,
      title: "Будущее человечества: к чему мы идем?",
      excerpt: "Размышления о том, какие вызовы ждут человечество в ближайшие десятилетия и как мы можем подготовиться к ним. Анализ современных тенденций и прогнозы развития.",
      author: "Александр Петров",
      date: "5 часов назад",
      category: "Философия",
      likes: 47,
      comments: 12,
      views: "1.2К",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      tags: ["Философия", "Будущее", "Развитие"],
      isNew: true
    },
    {
      id: 2,
      title: "Практики объединения сознания в современном мире",
      excerpt: "Исследование различных методов и практик, способствующих объединению человеческого сознания в эпоху глобализации.",
      author: "Мария Иванова",
      date: "13 часов назад",
      category: "Практики",
      likes: 89,
      comments: 24,
      views: "2.8К",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      tags: ["Практики", "Сознание", "Медитация"],
      isNew: false
    },
    {
      id: 3,
      title: "Индийский пилот готовится к историческому космическому путешествию",
      excerpt: "Шубханшу Шукла станет только вторым индийцем, который отправится в космос, и первым, кто посетит МКС.",
      author: "Космические новости",
      date: "13 часов назад",
      category: "Мир",
      likes: 156,
      comments: 45,
      views: "5.1К",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop",
      tags: ["Космос", "Достижения", "Индия"],
      isNew: false
    },
    {
      id: 4,
      title: "Певица Джесси Джей рассказала о раннем диагнозе рака груди",
      excerpt: "Певица говорит, что 'исчезнет на некоторое время', чтобы пройти операцию.",
      author: "Культурные новости",
      date: "4 часа назад",
      category: "Культура",
      likes: 78,
      comments: 19,
      views: "3.2К",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      tags: ["Музыка", "Здоровье", "Знаменитости"],
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
              Статьи и Посты
            </h1>
            <p className="text-white/70 text-lg">
              Новости, статьи и размышления от сообщества
            </p>
          </div>
          
          <div className="flex space-x-4">
            <div className="flex space-x-2">
              <Button 
                variant={sortBy === 'new' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('new')}
                className={sortBy === 'new' ? 'bg-blue-600 hover:bg-blue-700' : 'border-white/20 text-white hover:bg-white/10'}
              >
                <Clock size={16} className="mr-1" />
                Новые
              </Button>
              <Button 
                variant={sortBy === 'popular' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSortBy('popular')}
                className={sortBy === 'popular' ? 'bg-blue-600 hover:bg-blue-700' : 'border-white/20 text-white hover:bg-white/10'}
              >
                <TrendingUp size={16} className="mr-1" />
                Популярные
              </Button>
            </div>
            
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus size={16} className="mr-2" />
              Создать пост
            </Button>
          </div>
        </div>

        {/* Главная статья */}
        <div className="mb-12">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <div className="aspect-video md:aspect-[2/1]">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-600 text-white">{posts[0].category}</Badge>
                    {posts[0].isNew && (
                      <Badge className="bg-green-600 text-white">Новое</Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-white text-2xl leading-tight mb-4">
                    {posts[0].title}
                  </CardTitle>
                  
                  <p className="text-white/80 leading-relaxed mb-4">
                    {posts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>{posts[0].author}</span>
                    <span>{posts[0].date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1 text-white/60 text-sm">
                      <Eye size={14} />
                      <span>{posts[0].views}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-white/60 text-sm">
                      <Heart size={14} />
                      <span>{posts[0].likes}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-white/60 text-sm">
                      <MessageSquare size={14} />
                      <span>{posts[0].comments}</span>
                    </span>
                  </div>
                  
                  <Button variant="ghost" className="text-blue-300 hover:text-blue-200 hover:bg-white/10">
                    Читать далее
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Остальные статьи */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Card key={post.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                    {post.category}
                  </Badge>
                  {post.isNew && (
                    <Badge className="bg-green-600 text-white text-xs">Новое</Badge>
                  )}
                </div>
                
                <CardTitle className="text-white text-lg leading-tight mb-3 line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-white/60 text-xs mb-3">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1 text-xs">
                      <Eye size={12} />
                      <span>{post.views}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-xs">
                      <Heart size={12} />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-xs">
                      <MessageSquare size={12} />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-200 hover:bg-white/10 text-xs">
                    Читать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Кнопка "Больше новостей" */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            <TrendingUp size={16} className="mr-2" />
            Больше новостей
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Posts;
