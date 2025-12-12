import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  LogOut, 
  Edit2, 
  Eye, 
  EyeOff,
  ChevronRight,
  Calendar,
  DollarSign,
  Truck
} from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Link, useLocation } from "wouter";
import { AlertCircle } from "lucide-react";

export default function MinhaContaPage() {
  const [, navigate] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkAuth = setTimeout(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        navigate("/login");
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(checkAuth);
  }, [navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-secondary/50 via-background to-secondary/30 px-4">
          <Card className="border-border/50 shadow-2xl clip-corner-lg bg-card max-w-md w-full">
            <CardContent className="pt-12 pb-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center clip-corner">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-bold uppercase tracking-wider">Acesso Restrito</h2>
                <p className="text-muted-foreground">Voce precisa estar autenticado para acessar sua conta.</p>
              </div>
              <Link href="/login">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                  Ir para Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    birthDate: "1990-05-15",
  });

  const [orders] = useState([
    {
      id: "#2025-001234",
      date: "2025-01-15",
      status: "Entregue",
      total: 952,
      items: 3,
      tracking: "BR123456789BR",
      products: [
        { name: "Mouse Gamer Pro X", quantity: 1, price: 182 },
        { name: "Teclado Mecânico RGB", quantity: 1, price: 350 },
        { name: "Headset Wireless 7.1", quantity: 1, price: 420 },
      ],
    },
    {
      id: "#2025-001233",
      date: "2025-01-08",
      status: "Em Trânsito",
      total: 450,
      items: 1,
      tracking: "BR987654321BR",
      products: [
        { name: "Webcam 4K Pro", quantity: 1, price: 450 },
      ],
    },
    {
      id: "#2025-001232",
      date: "2024-12-28",
      status: "Entregue",
      total: 1200,
      items: 1,
      tracking: "BR555666777BR",
      products: [
        { name: "Cadeira Gamer Elite", quantity: 1, price: 1200 },
      ],
    },
    {
      id: "#2025-001231",
      date: "2024-12-15",
      status: "Cancelado",
      total: 89,
      items: 1,
      tracking: null,
      products: [
        { name: "Mousepad Grande RGB", quantity: 1, price: 89 },
      ],
    },
  ]);

  const [favorites] = useState([
    {
      id: 1,
      name: "Monitor Ultrawide 144Hz",
      price: 2100,
      image: "/images/promo-banner.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Console Next Gen",
      price: 4500,
      image: "/images/hero-banner-cyberpunk.png",
      rating: 5,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregue":
        return "bg-green-100 text-green-800 border-green-300";
      case "Em Trânsito":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Cancelado":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Entregue":
        return "✓";
      case "Em Trânsito":
        return "→";
      case "Cancelado":
        return "✕";
      default:
        return "●";
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider flex items-center gap-3">
            <User className="h-12 w-12" />
            Minha Conta
          </h1>
          <p className="text-gray-400 mt-2">
            Gerencie seus dados, pedidos e preferências
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-border/50 bg-card clip-corner sticky top-4">
              <CardContent className="pt-6 space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center gap-3 font-medium">
                  <User className="h-5 w-5 text-primary" />
                  Meus Dados
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center gap-3 font-medium">
                  <Package className="h-5 w-5 text-primary" />
                  Meus Pedidos
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center gap-3 font-medium">
                  <MapPin className="h-5 w-5 text-primary" />
                  Endereços
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center gap-3 font-medium">
                  <Heart className="h-5 w-5 text-primary" />
                  Favoritos
                </button>
                <hr className="my-4 border-border" />
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-3 font-medium text-red-600">
                  <LogOut className="h-5 w-5" />
                  Sair
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="pedidos" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-secondary/30 p-1 rounded-lg clip-corner mb-8">
                <TabsTrigger value="pedidos" className="clip-corner">
                  <Package className="h-4 w-4 mr-2" />
                  Pedidos
                </TabsTrigger>
                <TabsTrigger value="dados" className="clip-corner">
                  <User className="h-4 w-4 mr-2" />
                  Dados
                </TabsTrigger>
                <TabsTrigger value="favoritos" className="clip-corner">
                  <Heart className="h-4 w-4 mr-2" />
                  Favoritos
                </TabsTrigger>
              </TabsList>

              {/* Pedidos Tab */}
              <TabsContent value="pedidos" className="space-y-6">
                <div className="space-y-4">
                  {orders.length > 0 ? (
                    orders.map((order) => (
                      <Card
                        key={order.id}
                        className="border-border/50 bg-card clip-corner overflow-hidden hover:border-primary/50 transition-all"
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg font-display font-bold">
                                Pedido {order.id}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(order.date).toLocaleDateString("pt-BR")}
                              </p>
                            </div>
                            <Badge className={`${getStatusColor(order.status)} border`}>
                              <span className="mr-1">{getStatusIcon(order.status)}</span>
                              {order.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Order Items */}
                          <div className="space-y-2">
                            {order.products.map((product, idx) => (
                              <div key={idx} className="flex justify-between text-sm py-2 border-b border-border last:border-b-0">
                                <span>{product.name} x{product.quantity}</span>
                                <span className="font-medium">
                                  R$ {(product.price * product.quantity).toLocaleString("pt-BR")}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Order Summary */}
                          <div className="bg-secondary/30 p-4 rounded-lg clip-corner flex justify-between items-center">
                            <div>
                              <p className="text-sm text-muted-foreground">Total do Pedido</p>
                              <p className="text-2xl font-bold text-primary">
                                R$ {order.total.toLocaleString("pt-BR")}
                              </p>
                            </div>
                            {order.tracking && (
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground mb-1">Rastreamento</p>
                                <code className="text-sm font-mono bg-black/10 px-3 py-1 rounded">
                                  {order.tracking}
                                </code>
                              </div>
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2 pt-4">
                            {order.status === "Entregue" && (
                              <Button variant="outline" size="sm" className="clip-corner">
                                Comprar Novamente
                              </Button>
                            )}
                            {order.tracking && (
                              <Button variant="outline" size="sm" className="clip-corner">
                                <Truck className="h-4 w-4 mr-2" />
                                Rastrear Pedido
                              </Button>
                            )}
                            <Button variant="outline" size="sm" className="clip-corner ml-auto">
                              Ver Detalhes
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="border-border/50 bg-card clip-corner text-center py-12">
                      <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium mb-2">Nenhum pedido realizado</p>
                      <p className="text-muted-foreground mb-6">
                        Você ainda não fez nenhuma compra. Comece a explorar!
                      </p>
                      <Link href="/produtos">
                        <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                          Ir para Produtos
                        </Button>
                      </Link>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* Dados Tab */}
              <TabsContent value="dados" className="space-y-6">
                <Card className="border-border/50 bg-card clip-corner">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-display font-bold">
                      Dados Pessoais
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditingProfile(!isEditingProfile)}
                      className="clip-corner"
                    >
                      <Edit2 className="h-4 w-4 mr-2" />
                      {isEditingProfile ? "Cancelar" : "Editar"}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {isEditingProfile ? (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input
                            id="name"
                            value={userData.name}
                            onChange={(e) =>
                              setUserData({ ...userData, name: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={userData.email}
                            onChange={(e) =>
                              setUserData({ ...userData, email: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            value={userData.phone}
                            onChange={(e) =>
                              setUserData({ ...userData, phone: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input
                            id="cpf"
                            value={userData.cpf}
                            disabled
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11 opacity-60"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthDate">Data de Nascimento</Label>
                          <Input
                            id="birthDate"
                            type="date"
                            value={userData.birthDate}
                            onChange={(e) =>
                              setUserData({ ...userData, birthDate: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                          Salvar Alterações
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Nome</p>
                            <p className="font-medium">{userData.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <p className="font-medium">{userData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                            <p className="font-medium">{userData.phone}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">CPF</p>
                            <p className="font-medium">{userData.cpf}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Data de Nascimento</p>
                            <p className="font-medium">
                              {new Date(userData.birthDate).toLocaleDateString("pt-BR")}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Alterar Senha */}
                <Card className="border-border/50 bg-card clip-corner">
                  <CardHeader>
                    <CardTitle className="text-xl font-display font-bold">
                      Alterar Senha
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Senha Atual</Label>
                      <div className="relative">
                        <Input
                          id="currentPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Digite sua senha atual"
                          className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nova Senha</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        placeholder="Digite sua nova senha"
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirme sua nova senha"
                        className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                      Atualizar Senha
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favoritos Tab */}
              <TabsContent value="favoritos" className="space-y-6">
                {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favorites.map((product) => (
                      <Card
                        key={product.id}
                        className="group border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card"
                      >
                        <div className="relative aspect-square overflow-hidden bg-secondary/30 p-8 flex items-center justify-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                          />
                        </div>
                        <CardContent className="pt-6">
                          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-2xl font-bold text-primary mb-4">
                            R$ {product.price.toLocaleString("pt-BR")}
                          </p>
                          <div className="flex gap-2">
                            <Link href="/produtos" className="flex-1">
                              <Button className="w-full clip-corner bg-black text-white hover:bg-primary hover:text-white transition-colors">
                                Ver Produto
                              </Button>
                            </Link>
                            <Button variant="outline" size="icon" className="clip-corner">
                              <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="border-border/50 bg-card clip-corner text-center py-12">
                    <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Nenhum favorito salvo</p>
                    <p className="text-muted-foreground mb-6">
                      Adicione produtos aos seus favoritos para acessá-los depois!
                    </p>
                    <Link href="/produtos">
                      <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                        Explorar Produtos
                      </Button>
                    </Link>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}
