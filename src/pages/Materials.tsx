
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const Materials = () => {
  const materials = [
    {
      id: 1,
      title: "Основы философии единства",
      type: "Статья",
      description: "Фундаментальные принципы объединения человечества",
      link: "#",
      icon: FileText
    },
    {
      id: 2,
      title: "Видеокурс: Путь к гармонии",
      type: "Видео",
      description: "Серия обучающих видео о развитии сознания",
      link: "#",
      icon: Video
    },
    {
      id: 3,
      title: "Книга: Будущее человечества",
      type: "Книга",
      description: "Комплексное руководство по развитию цивилизации",
      link: "#",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Материалы для изучения
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Коллекция образовательных материалов для развития и роста
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => (
            <Card key={material.id} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <material.icon className="text-blue-400" size={24} />
                  <span className="text-white/60 text-sm">{material.type}</span>
                </div>
                <CardTitle className="text-white text-xl">{material.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-white/80 text-sm leading-relaxed">
                  {material.description}
                </p>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink size={16} className="mr-2" />
                  Изучить материал
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

export default Materials;
