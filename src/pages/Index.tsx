
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BunnyTip = ({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) => (
  <div className="flex gap-3 border rounded-lg p-4 shadow-sm">
    <div className="shrink-0 bg-[#FDE1D3] rounded-full h-10 w-10 flex items-center justify-center">
      <Icon name={icon} className="text-orange-600" />
    </div>
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{children}</p>
    </div>
  </div>
);

const BunnyFeatureCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <Card className="h-full">
    <CardHeader className="pb-2">
      <div className="w-10 h-10 rounded-full bg-[#E5DEFF] flex items-center justify-center mb-3">
        <Icon name={icon} className="text-purple-600" />
      </div>
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Index = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("все");
  
  const navLinks = [
    { title: "Питание", icon: "UtensilsCrossed", path: "/nutrition" },
    { title: "Здоровье", icon: "HeartPulse", path: "/health" },
    { title: "Уход", icon: "Brush", path: "/care" },
    { title: "Разведение", icon: "Baby", path: "/breeding" },
    { title: "Игрушки", icon: "Gamepad2", path: "/toys" },
  ];

  const categories = ["все", "питание", "здоровье", "уход", "разведение"];

  const featuredArticles = [
    { 
      title: "Основы правильного питания кроликов", 
      category: "питание",
      description: "Узнайте, какие продукты необходимы для сбалансированного рациона вашего питомца.",
      icon: "Apple"
    },
    { 
      title: "Ежегодные прививки", 
      category: "здоровье",
      description: "График прививок и необходимая профилактика для поддержания здоровья кролика.",
      icon: "Syringe"
    },
    { 
      title: "Как правильно стричь когти", 
      category: "уход",
      description: "Пошаговая инструкция и советы по безопасной стрижке когтей у кроликов.",
      icon: "Scissors"
    },
    { 
      title: "Обустройство клетки", 
      category: "уход",
      description: "Как создать комфортное и безопасное пространство для вашего кролика.",
      icon: "Home"
    },
    { 
      title: "Признаки болезней", 
      category: "здоровье",
      description: "На что обратить внимание, чтобы вовремя заметить проблемы со здоровьем.",
      icon: "Stethoscope"
    },
    { 
      title: "Подготовка к потомству", 
      category: "разведение",
      description: "Советы для начинающих заводчиков по подготовке к появлению крольчат.",
      icon: "Baby"
    },
  ];

  const filteredArticles = currentCategory === "все" 
    ? featuredArticles 
    : featuredArticles.filter(article => article.category === currentCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐰</span>
            <h1 className="text-xl font-medium">КроликГид</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                <Icon name={link.icon} size={16} />
                {link.title}
              </Link>
            ))}
          </div>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">Войти</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-[#E5DEFF] to-[#FAFAFA]">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair leading-tight">
              Забота о вашем <span className="text-[#9b87f5]">пушистом</span> друге
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Всё, что нужно знать о содержании и уходе за кроликами в одном месте
            </p>
            <div className="flex gap-3">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                Полезные статьи
              </Button>
              <Button variant="outline">Подобрать породу</Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Милый кролик"
              className="rounded-lg shadow-lg max-w-md w-full object-cover h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 font-playfair">Важно знать</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BunnyTip icon="Apple" title="Правильное питание">
              Основу рациона должно составлять сено (80%). Дополняйте его свежими овощами и специальным кормом.
            </BunnyTip>
            <BunnyTip icon="AlertTriangle" title="Токсичные продукты">
              Избегайте давать кроликам авокадо, шоколад, лук, чеснок и продукты с высоким содержанием крахмала.
            </BunnyTip>
            <BunnyTip icon="ThermometerSun" title="Температурный режим">
              Оптимальная температура для содержания кроликов — от 15 до 24 градусов Цельсия.
            </BunnyTip>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-[#FAFAFA]">
        <div className="container">
          <h2 className="text-2xl font-bold mb-2 font-playfair">Полезные статьи</h2>
          <p className="text-muted-foreground mb-6">Изучите наши материалы для заботы о вашем питомце</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button 
                key={category}
                variant={currentCategory === category ? "default" : "outline"}
                className={currentCategory === category ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : ""}
                onClick={() => setCurrentCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <BunnyFeatureCard 
                key={index}
                title={article.title}
                description={article.description}
                icon={article.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#9b87f5] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Присоединяйтесь к сообществу</h2>
          <p className="mb-6 max-w-xl mx-auto">
            Зарегистрируйтесь, чтобы получить доступ к эксклюзивным материалам, задавать вопросы экспертам и общаться с другими владельцами кроликов
          </p>
          <Button variant="secondary" size="lg">Зарегистрироваться</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">КроликГид</h3>
              <p className="text-sm">Всё для счастливой жизни вашего пушистого друга</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Ресурсы</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faq" className="hover:text-white transition-colors">Часто задаваемые вопросы</Link></li>
                <li><Link to="/dictionary" className="hover:text-white transition-colors">Словарь терминов</Link></li>
                <li><Link to="/books" className="hover:text-white transition-colors">Рекомендуемые книги</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Контакты</h4>
              <p className="text-sm mb-4">Свяжитесь с нами, если у вас есть вопросы или предложения</p>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Обратная связь
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-center">
            © {new Date().getFullYear()} КроликГид — Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
