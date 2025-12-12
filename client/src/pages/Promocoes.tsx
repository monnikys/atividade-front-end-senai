import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, TrendingDown } from "lucide-react";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function Promocoes() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promotions = [
    {
      id: 1,
      name: "Mouse Gamer Pro X",
      originalPrice: 250,
      price: 182,
      discount: 27,
      image: "/images/product-mouse.png",
      rating: 5,
      reviews: 128,
      category: "Periféricos",
      tag: "Flash Sale",
    },
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      originalPrice: 500,
      price: 350,
      discount: 30,
      image: "/images/product-keyboard.png",
      rating: 4,
      reviews: 95,
      category: "Periféricos",
      tag: "Oferta Relâmpago",
    },
    {
      id: 3,
      name: "Headset Wireless 7.1",
      originalPrice: 600,
      price: 420,
      discount: 30,
      image: "/images/product-headset.png",
      rating: 5,
      reviews: 156,
      category: "Áudio",
      tag: "Desconto",
    },
    {
      id: 4,
      name: "Monitor Ultrawide 144Hz",
      originalPrice: 3000,
      price: 2100,
      discount: 30,
      image: "/images/product-monitor.png",
      rating: 5,
      reviews: 87,
      category: "Monitores",
      tag: "Mega Oferta",
    },
    {
      id: 5,
      name: "PC Gamer Completo",
      originalPrice: 1800,
      price: 1200,
      discount: 33,
      image: "/images/product-pc.png",
      rating: 4,
      reviews: 64,
      category: "PC Gamer",
      tag: "Promoção",
    },
    {
      id: 6,
      name: "Mousepad Grande RGB",
      originalPrice: 150,
      price: 89,
      discount: 41,
      image: "/images/product-mouse.png",
      rating: 4,
      reviews: 42,
      category: "Periféricos",
      tag: "Imperdível",
    },
  ];

  const bannerPromotions = [
    {
      title: "MEGA DESCONTO",
      subtitle: "Periféricos Selecionados",
      discount: "ATÉ 50%",
      color: "from-red-600 to-red-900",
      icon: Flame,
    },
    {
      title: "SEMANA GAMER",
      subtitle: "Toda Categoria",
      discount: "ATÉ 40%",
      color: "from-blue-600 to-blue-900",
      icon: TrendingDown,
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider flex items-center gap-3">
            <Flame className="h-12 w-12 text-red-500" />
            Promoções
          </h1>
          <p className="text-gray-400 mt-2">
            Aproveite as melhores ofertas do momento
          </p>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="bg-gradient-to-r from-primary/20 to-transparent border-b border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-display font-bold uppercase tracking-wider mb-2">
                Promoção Relâmpago
              </h2>
              <p className="text-muted-foreground">
                Aproveite enquanto durarem os estoques
              </p>
            </div>
            <div className="flex gap-2 text-white font-mono text-3xl font-bold">
              <div className="bg-primary p-4 rounded clip-corner min-w-[80px] text-center">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <span className="self-center text-foreground">:</span>
              <div className="bg-primary p-4 rounded clip-corner min-w-[80px] text-center">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="self-center text-foreground">:</span>
              <div className="bg-primary p-4 rounded clip-corner min-w-[80px] text-center">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="self-center text-foreground">:</span>
              <div className="bg-primary p-4 rounded clip-corner min-w-[80px] text-center">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Promotions */}
      <section className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bannerPromotions.map((promo, idx) => {
            const Icon = promo.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${promo.color} rounded-lg p-8 text-white overflow-hidden relative clip-corner-lg`}
              >
                <div className="absolute top-0 right-0 opacity-10">
                  <Icon className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm font-medium opacity-90 mb-2">{promo.subtitle}</p>
                  <h3 className="text-3xl font-display font-bold uppercase tracking-wider mb-4">
                    {promo.title}
                  </h3>
                  <div className="text-5xl font-black mb-6">{promo.discount}</div>
                  <Button className="bg-white text-black hover:bg-gray-100 font-display uppercase tracking-wider clip-corner">
                    Comprar Agora
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-12">
        <h2 className="text-3xl font-display font-bold uppercase tracking-wide border-l-4 border-primary pl-4 mb-8">
          Produtos em Destaque
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((product) => (
            <Card
              key={product.id}
              className="group border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30 p-8 flex items-center justify-center">
                <Badge className="absolute top-4 left-4 bg-red-500 text-white border-none z-10 flex items-center gap-1">
                  <Flame className="h-3 w-3" />
                  {product.discount}% OFF
                </Badge>
                <Badge variant="secondary" className="absolute top-4 right-4 z-10">
                  {product.tag}
                </Badge>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>
              <CardContent className="pt-6">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary">
                    R$ {product.price.toLocaleString("pt-BR")}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toLocaleString("pt-BR")}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {product.reviews} avaliações
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full clip-corner bg-black text-white hover:bg-primary hover:text-white transition-colors">
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black text-white py-16 my-12">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold uppercase tracking-wider mb-4">
            Não Perca as Próximas Promoções
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Inscreva-se na nossa newsletter e receba notificações sobre as melhores ofertas antes de todos
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary clip-corner"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
              Inscrever
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
