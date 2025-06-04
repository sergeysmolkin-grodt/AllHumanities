import Footer from "@/components/Footer";
import Header from '../components/Header';
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import Navigation from '../components/Navigation';
import StatsSection from "@/components/StatsSection";
import Earth3D from "@/components/Earth3D";

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
    <div className="min-h-screen bg-black">
      <Earth3D />
      <Header />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <MissionSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
