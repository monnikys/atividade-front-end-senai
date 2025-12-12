import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Truck, CreditCard, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState<"endereco" | "pagamento" | "confirmacao">("endereco");
  const [paymentMethod, setPaymentMethod] = useState<"cartao" | "pix" | "boleto">("cartao");

  const [formData, setFormData] = useState({
    // Endereço
    fullName: "",
    email: "",
    phone: "",
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    // Pagamento
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const cartItems = [
    { id: 1, name: "Mouse Gamer Pro X", price: 182, quantity: 1 },
    { id: 2, name: "Teclado Mecânico RGB", price: 350, quantity: 1 },
    { id: 3, name: "Headset Wireless 7.1", price: 420, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleNextStep = () => {
    if (currentStep === "endereco") {
      setCurrentStep("pagamento");
    } else if (currentStep === "pagamento") {
      setCurrentStep("confirmacao");
    }
  };

  const handlePrevStep = () => {
    if (currentStep === "pagamento") {
      setCurrentStep("endereco");
    } else if (currentStep === "confirmacao") {
      setCurrentStep("pagamento");
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Finalizar Compra
          </h1>
        </div>
      </section>

      {/* Checkout Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Steps Indicator */}
            <div className="flex gap-4 mb-8">
              {["endereco", "pagamento", "confirmacao"].map((step, idx) => (
                <div key={step} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold clip-corner ${
                      step === currentStep
                        ? "bg-primary text-white"
                        : ["endereco", "pagamento"].includes(step) &&
                          ["pagamento", "confirmacao"].includes(currentStep)
                        ? "bg-green-500 text-white"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {["endereco", "pagamento"].includes(step) &&
                    ["pagamento", "confirmacao"].includes(currentStep) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <span className="hidden md:inline text-sm font-medium">
                    {step === "endereco"
                      ? "Endereço"
                      : step === "pagamento"
                      ? "Pagamento"
                      : "Confirmação"}
                  </span>
                  {idx < 2 && <div className="hidden md:block h-0.5 w-8 bg-border" />}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {currentStep === "endereco" && (
              <Card className="border-border/50 bg-card clip-corner-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <Truck className="h-6 w-6" />
                    Endereço de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Personal Info */}
                  <div className="space-y-4">
                    <h3 className="font-display font-bold uppercase tracking-wider">
                      Dados Pessoais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Nome Completo</Label>
                        <Input
                          id="fullName"
                          placeholder="Seu nome completo"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
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
                        <Label htmlFor="cep">CEP</Label>
                        <Input
                          id="cep"
                          placeholder="00000-000"
                          value={formData.cep}
                          onChange={(e) =>
                            setFormData({ ...formData, cep: e.target.value })
                          }
                          className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-4">
                    <h3 className="font-display font-bold uppercase tracking-wider">
                      Endereço
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Rua</Label>
                        <Input
                          id="address"
                          placeholder="Rua, avenida, etc"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="number">Número</Label>
                          <Input
                            id="number"
                            placeholder="123"
                            value={formData.number}
                            onChange={(e) =>
                              setFormData({ ...formData, number: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2 col-span-2">
                          <Label htmlFor="complement">Complemento (Opcional)</Label>
                          <Input
                            id="complement"
                            placeholder="Apto, sala, etc"
                            value={formData.complement}
                            onChange={(e) =>
                              setFormData({ ...formData, complement: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="neighborhood">Bairro</Label>
                          <Input
                            id="neighborhood"
                            placeholder="Bairro"
                            value={formData.neighborhood}
                            onChange={(e) =>
                              setFormData({ ...formData, neighborhood: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">Cidade</Label>
                          <Input
                            id="city"
                            placeholder="Cidade"
                            value={formData.city}
                            onChange={(e) =>
                              setFormData({ ...formData, city: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">Estado</Label>
                          <Input
                            id="state"
                            placeholder="SP"
                            value={formData.state}
                            onChange={(e) =>
                              setFormData({ ...formData, state: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === "pagamento" && (
              <Card className="border-border/50 bg-card clip-corner-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <CreditCard className="h-6 w-6" />
                    Forma de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as any)}>
                    <TabsList className="grid w-full grid-cols-3 bg-secondary/30 p-1 rounded-lg clip-corner">
                      <TabsTrigger value="cartao" className="clip-corner">
                        Cartão
                      </TabsTrigger>
                      <TabsTrigger value="pix" className="clip-corner">
                        PIX
                      </TabsTrigger>
                      <TabsTrigger value="boleto" className="clip-corner">
                        Boleto
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cartao" className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nome no Cartão</Label>
                        <Input
                          id="cardName"
                          placeholder="Como aparece no cartão"
                          value={formData.cardName}
                          onChange={(e) =>
                            setFormData({ ...formData, cardName: e.target.value })
                          }
                          className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Número do Cartão</Label>
                        <Input
                          id="cardNumber"
                          placeholder="0000 0000 0000 0000"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            setFormData({ ...formData, cardNumber: e.target.value })
                          }
                          className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">Validade</Label>
                          <Input
                            id="cardExpiry"
                            placeholder="MM/AA"
                            value={formData.cardExpiry}
                            onChange={(e) =>
                              setFormData({ ...formData, cardExpiry: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardCVV">CVV</Label>
                          <Input
                            id="cardCVV"
                            placeholder="000"
                            value={formData.cardCVV}
                            onChange={(e) =>
                              setFormData({ ...formData, cardCVV: e.target.value })
                            }
                            className="bg-secondary border-border focus-visible:ring-primary clip-corner h-11"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="pix" className="mt-6 text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Você receberá o código PIX na próxima etapa
                      </p>
                      <div className="bg-secondary/30 p-8 rounded-lg clip-corner">
                        <p className="font-display font-bold text-lg">PIX - Pagamento Instantâneo</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Rápido, seguro e sem taxas
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="boleto" className="mt-6 text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Você receberá o boleto na próxima etapa
                      </p>
                      <div className="bg-secondary/30 p-8 rounded-lg clip-corner">
                        <p className="font-display font-bold text-lg">Boleto Bancário</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Vencimento em 3 dias úteis
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}

            {currentStep === "confirmacao" && (
              <Card className="border-border/50 bg-card clip-corner-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-display font-bold uppercase tracking-wider flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    Confirmar Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 clip-corner text-center">
                    <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display font-bold text-lg mb-2">
                      Pedido Confirmado!
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Seu pedido foi processado com sucesso. Você receberá um email de
                      confirmação em breve.
                    </p>
                    <p className="font-bold text-lg">Número do Pedido: #2025-001234</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-display font-bold">Resumo do Pedido</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>R$ {subtotal.toLocaleString("pt-BR")}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Frete</span>
                        <span>Grátis</span>
                      </div>
                      <div className="border-t border-border pt-2 flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-primary text-lg">
                          R$ {total.toLocaleString("pt-BR")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 clip-corner text-sm text-blue-900">
                    <p className="font-medium mb-2">📦 Próximos Passos:</p>
                    <ul className="space-y-1">
                      <li>✓ Seu pedido será processado em até 24 horas</li>
                      <li>✓ Você receberá um código de rastreamento</li>
                      <li>✓ Entrega estimada em 7 dias úteis</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep !== "endereco" && (
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  className="clip-corner"
                >
                  ← Voltar
                </Button>
              )}
              {currentStep !== "confirmacao" && (
                <Button
                  onClick={handleNextStep}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner"
                >
                  Próximo →
                </Button>
              )}
              {currentStep === "confirmacao" && (
                <Link href="/">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner"
                  >
                    Voltar à Home
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="border-border/50 bg-card clip-corner sticky top-4">
              <CardHeader>
                <CardTitle className="font-display text-lg">Resumo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-medium">
                        R$ {(item.price * item.quantity).toLocaleString("pt-BR")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>R$ {subtotal.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Frete</span>
                    <span>Grátis</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between font-display font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">
                      R$ {total.toLocaleString("pt-BR")}
                    </span>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs text-muted-foreground flex items-start gap-2 clip-corner">
                  <Lock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sua compra é 100% segura e protegida</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
