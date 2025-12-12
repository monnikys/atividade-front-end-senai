import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function FaleConosco() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado por sua mensagem! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@lhgames.com.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 3000-0000"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua dos Gamers, 123 - São Paulo, SP"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 9h-18h | Sab: 10h-14h"
    }
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
            Estamos aqui para ajudar com suas dúvidas
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-card border-border/50 p-6 clip-corner text-center">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="bg-secondary border-border clip-corner"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="bg-secondary border-border clip-corner"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 9999-9999"
                  className="bg-secondary border-border clip-corner"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Qual é o assunto?"
                  className="bg-secondary border-border clip-corner"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Sua mensagem aqui..."
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-12"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
