
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Plus, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';

const Posts = () => {
  const [sortBy, setSortBy] = useState('new');

  const posts = [
    {
      id: 1,
      title: "Будущее человечества: к чему мы идем?",
      excerpt: "Размышления о том, какие вызовы ждут человечество в ближайшие десятилетия и как мы можем подготовиться к ним.",
      author: "Александр Петров",
      date: "15 ноября 2024",
      likes: 47,
      comments: 12,
      tags: ["Философия", "Будущее", "Развитие"],
      isNew: true
    },
    {
      id: 2,
      title: "Практики объединения сознания",
      excerpt: "Исследование различных методов и практик, способствующих объединению человеческого сознания.",
      author: "Мария Иванова",
      date: "12 ноября 2024",
      likes: 89,
      comments: 24,
      tags: ["Практики", "Сознание", "Медитация"],
      isNew: false
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

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-white/60 text-xs">{post.date}</p>
                      </div>
                    </div>
                    {post.isNew && (
                      <Badge className="bg-green-600 text-white">Новое</Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-white text-xl leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-white/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/20 text-white text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-white/60 hover:text-red-400 transition-colors">
                        <Heart size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-white/60 hover:text-blue-400 transition-colors">
                        <MessageSquare size={16} />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                    </div>
                    
                    <Button variant="ghost" className="text-blue-300 hover:text-blue-200 hover:bg-white/10">
                      Читать далее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Сайдбар */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Философия', 'Развитие', 'Сознание', 'Будущее', 'Практики', 'Медитация'].map((tag, index) => (
                    <Badge key={index} variant="outline" className="border-white/30 text-white/80 hover:bg-white/10 cursor-pointer">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Posts;
