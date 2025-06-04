
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, FileText, MessageSquare, Heart, Settings, Edit } from 'lucide-react';

const Profile = () => {
  const userStats = {
    articles: 12,
    comments: 47,
    likes: 234,
    communities: 5
  };

  const userArticles = [
    {
      id: 1,
      title: "Путь к единству сознания",
      date: "10 ноября 2024",
      likes: 45,
      comments: 12,
      status: "Опубликовано"
    },
    {
      id: 2,
      title: "Философия развития человечества",
      date: "5 ноября 2024",
      likes: 67,
      comments: 18,
      status: "Опубликовано"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      <Navigation />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок профиля */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <h1 className="text-3xl font-light text-white mb-2">Александр Петров</h1>
            <p className="text-white/70">Член сообщества с марта 2024</p>
            <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
              <Edit size={16} className="mr-2" />
              Редактировать профиль
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Основная информация */}
            <div className="lg:col-span-2 space-y-8">
              {/* Статистика */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Активность</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-blue-600">
                        <FileText size={20} className="text-white" />
                      </div>
                      <p className="text-2xl font-semibold text-white">{userStats.articles}</p>
                      <p className="text-white/60 text-sm">Статей</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-green-600">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <p className="text-2xl font-semibold text-white">{userStats.comments}</p>
                      <p className="text-white/60 text-sm">Комментариев</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-red-600">
                        <Heart size={20} className="text-white" />
                      </div>
                      <p className="text-2xl font-semibold text-white">{userStats.likes}</p>
                      <p className="text-white/60 text-sm">Лайков</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-purple-600">
                        <User size={20} className="text-white" />
                      </div>
                      <p className="text-2xl font-semibold text-white">{userStats.communities}</p>
                      <p className="text-white/60 text-sm">Комьюнити</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Мои статьи */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Мои статьи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userArticles.map((article) => (
                    <div key={article.id} className="border-b border-white/10 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium">{article.title}</h3>
                        <Badge className="bg-green-600 text-white">
                          {article.status}
                        </Badge>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{article.date}</p>
                      <div className="flex items-center space-x-6 text-white/60 text-sm">
                        <div className="flex items-center space-x-1">
                          <Heart size={14} />
                          <span>{article.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare size={14} />
                          <span>{article.comments}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-300 hover:text-blue-200 hover:bg-white/10 p-0 h-auto">
                          Редактировать
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Сайдбар */}
            <div className="space-y-6">
              {/* Настройки */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings size={20} className="mr-2" />
                    Настройки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
                    Изменить пароль
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
                    Уведомления
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10">
                    Приватность
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20">
                    Удалить аккаунт
                  </Button>
                </CardContent>
              </Card>

              {/* Достижения */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Достижения</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                      <span className="text-white text-xs">🏆</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Активный автор</p>
                      <p className="text-white/60 text-xs">10+ статей</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">💬</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Коммуникатор</p>
                      <p className="text-white/60 text-xs">50+ комментариев</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
