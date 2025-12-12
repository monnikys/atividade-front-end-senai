import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Monitor, Gamepad2, Headphones, Keyboard } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Mouse Gamer Pro X",
      price: "R$ 182,00",
      image: "/images/product-mouse.png",
      rating: 5,
      tag: "Mais Vendido"
    },
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      price: "R$ 350,00",
      image: "/images/product-keyboard.png",
      rating: 4,
      tag: "Oferta"
    },
    {
      id: 3,
      name: "Headset Wireless 7.1",
      price: "R$ 420,00",
      image: "/images/product-headset.png",
      rating: 5,
      tag: "Novo"
    }
  ];

  const newReleases = [
    {
      id: 4,
      name: "Console Next Gen",
      price: "R$ 4.500,00",
      image: "/images/product-console.png",
      rating: 5
    },
    {
      id: 5,
      name: "Monitor Ultrawide 144Hz",
      price: "R$ 2.100,00",
      image: "/images/product-monitor.png",
      rating: 4
    },
    {
      id: 6,
      name: "PC Gamer Completo",
      price: "R$ 1.200,00",
      image: "/images/product-pc.png",
      rating: 5
    }
  ];

  const categories = [
    { name: "PC Gamer", icon: Monitor, path: "/produtos?categoria=PC%20Gamer" },
    { name: "Consoles", icon: Gamepad2, path: "/produtos?categoria=Consoles" },
    { name: "Periféricos", icon: Keyboard, path: "/produtos?categoria=Periféricos" },
    { name: "Áudio", icon: Headphones, path: "/produtos?categoria=Áudio" },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src="/images/hero-banner-cyberpunk.png" 
          alt="Setup Gamer Cyberpunk" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        <div className="container relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-6 animate-in slide-in-from-left duration-700 fade-in">
            <Badge variant="outline" className="text-primary border-primary px-4 py-1 text-sm uppercase tracking-widest bg-primary/10 backdrop-blur-sm">
              Lançamento 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
              NEXT LEVEL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">PERFORMANCE</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg">
              Eleve seu jogo com a nova linha de hardware de alta performance. 
              Precisão, velocidade e estilo cyberpunk.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/produtos?categoria=PC%20Gamer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-14 px-8 text-lg">
                  Comprar Agora
                </Button>
              </Link>
              <Link href="/sobre">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-display uppercase tracking-wider clip-corner-lg h-14 px-8 text-lg">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-wide border-l-4 border-primary pl-4">
              Os Mais Vendidos
            </h2>
            <Link href="/produtos">
              <Button variant="ghost" className="text-primary hover:text-primary/80 group">
                Ver todos <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card">
                <div className="relative aspect-square overflow-hidden bg-secondary/30 p-8 flex items-center justify-center">
                  <Badge className="absolute top-4 left-4 bg-primary text-white border-none z-10">
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
                        className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                      />
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-foreground">
                    {product.price}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full clip-corner bg-black text-white hover:bg-primary hover:text-white transition-colors">
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-10 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/promo-banner.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">
              Promoção Relâmpago
            </h2>
            <p className="text-xl text-gray-300">
              Até 50% de desconto em periféricos selecionados.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-4 text-white font-mono text-4xl font-bold">
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm border border-white/20">05</div>
              <span className="self-center">:</span>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm border border-white/20">42</div>
              <span className="self-center">:</span>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm border border-white/20">18</div>
            </div>
            <span className="text-sm text-gray-400 uppercase tracking-widest">Horas Restantes</span>
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-wide border-l-4 border-primary pl-4">
              Últimos Lançamentos
            </h2>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {newReleases.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-none bg-transparent">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4 group cursor-pointer">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white font-display font-bold text-lg">{product.name}</h3>
                        <p className="text-primary font-bold">{product.price}</p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-display font-bold uppercase tracking-wide text-center mb-16">
            Navegue por Categorias
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <a 
                key={idx} 
                href={cat.path} 
                className="group flex flex-col items-center justify-center p-8 border border-border hover:border-primary bg-card hover:bg-secondary/50 transition-all duration-300 clip-corner cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon className="h-8 w-8" />
                </div>
                <span className="font-display font-bold text-lg uppercase tracking-wider group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
