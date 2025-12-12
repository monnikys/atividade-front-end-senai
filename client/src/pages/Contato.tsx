import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Textarea } from "@/components/ui/textarea";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 99999-9999",
      description: "Segunda a sexta, 9h às 18h",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contato@lhgames.com.br",
      description: "Resposta em até 24 horas",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Rua Exemplo, 123 - Centro",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "9h às 18h",
      description: "Segunda a sexta",
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: MessageCircle, name: "WhatsApp", url: "#" },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Fale Conosco
          </h1>
          <p className="text-gray-400 mt-2">
            Estamos aqui para ajudar com suas dúvidas e sugestões
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <Card key={idx} className="border-border/50 bg-card clip-corner">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {info.title}
                  </h3>
                  <p className="font-semibold text-foreground mb-1">
                    {info.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card clip-corner-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-display font-bold uppercase tracking-wider">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        placeholder="Assunto da mensagem"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem aqui..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-secondary border-border focus-visible:ring-primary clip-corner min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-12"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card className="border-border/50 bg-card clip-corner">
              <CardHeader>
                <CardTitle className="font-display font-bold text-lg">
                  Sobre a LH Games
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A LH Games é uma loja especializada em produtos para o universo gamer,
                  oferecendo as melhores marcas e preços do mercado.
                </p>
                <p>
                  Nossa missão é inspirar e valorizar a paixão pela tecnologia e jogos,
                  criando experiências inéditas para nossos clientes.
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-foreground mb-2">Valores:</p>
                  <ul className="space-y-1 text-xs">
                    <li>✓ Ética</li>
                    <li>✓ Inovação</li>
                    <li>✓ Respeito aos Clientes</li>
                    <li>✓ Respeito à Lei</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50 bg-card clip-corner">
              <CardHeader>
                <CardTitle className="font-display font-bold text-lg">
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="border-border/50 bg-primary/10 border-primary/20 clip-corner">
              <CardContent className="pt-6">
                <p className="text-sm mb-4">
                  Antes de entrar em contato, confira nossas perguntas frequentes.
                </p>
                <Button
                  variant="outline"
                  className="w-full clip-corner border-primary text-primary hover:bg-primary/10"
                >
                  Ver Perguntas Frequentes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30 py-16 mt-12">
        <div className="container">
          <h2 className="text-3xl font-display font-bold uppercase tracking-wide border-l-4 border-primary pl-4 mb-8">
            Perguntas Frequentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Qual é o prazo de entrega?",
                a: "Entregamos em até 7 dias úteis para a região metropolitana e até 15 dias para outras regiões.",
              },
              {
                q: "Qual é a política de devolução?",
                a: "Você tem 30 dias para devolver o produto caso não esteja satisfeito.",
              },
              {
                q: "Vocês oferecem garantia?",
                a: "Sim, todos os produtos possuem garantia de 2 anos.",
              },
              {
                q: "Quais são as formas de pagamento?",
                a: "Aceitamos cartão de crédito, PIX, boleto e parcelamento em até 12x.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="border-border/50 bg-card clip-corner">
                <CardHeader>
                  <CardTitle className="text-base font-display font-bold">
                    {faq.q}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {faq.a}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
