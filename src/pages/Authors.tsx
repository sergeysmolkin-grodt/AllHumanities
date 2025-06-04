
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';

const Authors = () => {
  const authors = [
    {
      id: 1,
      name: "Автор 1",
      bio: "Краткая биография автора и его достижения в области развития человечества.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      projects: ["Проект 1", "Проект 2", "Проект 3"],
      articles: ["Статья 1", "Статья 2"],
      videos: ["Видео 1", "Видео 2"],
      socials: {
        youtube: "#",
        instagram: "#",
        facebook: "#",
        linkedin: "#"
      },
      communities: ["Комьюнити 1", "Комьюнити 2"]
    },
    // Добавьте больше авторов по необходимости
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Наши Авторы
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Познакомьтесь с создателями и авторами проекта ALLHUMANITY
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Card key={author.id} className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={author.photo} 
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white text-xl">{author.name}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-white/80 text-sm leading-relaxed">
                  {author.bio}
                </p>

                {/* Проекты */}
                <div>
                  <h4 className="text-white font-medium mb-2">Проекты:</h4>
                  <div className="flex flex-wrap gap-2">
                    {author.projects.map((project, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Статьи */}
                <div>
                  <h4 className="text-white font-medium mb-2">Статьи:</h4>
                  <div className="flex flex-wrap gap-2">
                    {author.articles.map((article, index) => (
                      <Badge key={index} variant="outline" className="border-white/30 text-white/80">
                        {article}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Социальные сети */}
                <div>
                  <h4 className="text-white font-medium mb-3">Социальные сети:</h4>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Youtube size={16} className="text-red-400" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Instagram size={16} className="text-pink-400" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Facebook size={16} className="text-blue-400" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2 hover:bg-white/10">
                      <Linkedin size={16} className="text-blue-300" />
                    </Button>
                  </div>
                </div>

                {/* Комьюнити */}
                <div>
                  <h4 className="text-white font-medium mb-2">Созданные комьюнити:</h4>
                  <div className="space-y-1">
                    {author.communities.map((community, index) => (
                      <Button key={index} variant="link" className="text-blue-300 p-0 h-auto">
                        {community}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Authors;
