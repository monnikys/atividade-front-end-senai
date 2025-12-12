import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Zap, Shield, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";

export default function Sobre() {
  const values = [
    {
      icon: Zap,
      title: "Performance",
      description: "Produtos de alta performance para gamers exigentes"
    },
    {
      icon: Shield,
      title: "Qualidade",
      description: "Garantia de qualidade em todos os produtos"
    },
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entrega rápida e segura em todo o Brasil"
    },
    {
      icon: Star,
      title: "Suporte",
      description: "Atendimento ao cliente 24/7"
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Sobre LH Games
          </h1>
          <p className="text-gray-400 mt-2">
            Conheça a história da melhor loja de gaming do Brasil
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Quem Somos
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A LH Games é a maior loja especializada em periféricos e componentes gamer do Brasil. 
                Desde 2015, nos dedicamos a oferecer os melhores produtos para gamers profissionais e amadores.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com mais de 50 mil clientes satisfeitos, somos referência em qualidade, preço e atendimento. 
                Nossa missão é democratizar o acesso a tecnologia de ponta para o universo gamer.
              </p>
              <Link href="/produtos">
                <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg">
                  Ver Catálogo Completo
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 clip-corner-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display font-bold text-primary">50K+</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display font-bold text-primary">10K+</div>
                  <div className="text-gray-600">Produtos em Estoque</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display font-bold text-primary">9+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 uppercase">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-card border-border/50 p-6 clip-corner text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2 uppercase">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pronto para Elevar seu Setup?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore nosso catálogo completo e encontre os melhores produtos para seu setup gamer.
          </p>
          <Link href="/produtos">
            <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-14 px-8 text-lg">
              Explorar Produtos
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
