import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Carrinho() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mouse Gamer Pro X",
      price: 182,
      quantity: 1,
      image: "/images/product-mouse.png",
    },
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      price: 350,
      quantity: 1,
      image: "/images/product-keyboard.png",
    },
    {
      id: 3,
      name: "Headset Wireless 7.1",
      price: 420,
      quantity: 2,
      image: "/images/product-headset.png",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === "GAMER50") {
      setAppliedCoupon({ code: couponCode, discount: 50 });
    } else if (couponCode === "DESCONTO10") {
      setAppliedCoupon({ code: couponCode, discount: 10 });
    }
    setCouponCode("");
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = appliedCoupon ? subtotal * (appliedCoupon.discount / 100) : 0;
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal - discount + shipping;

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider flex items-center gap-3">
            <ShoppingCart className="h-12 w-12" />
            Carrinho de Compras
          </h1>
        </div>
      </section>

      {/* Cart Content */}
      <div className="container py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="border-border/50 bg-card clip-corner overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display font-bold text-lg mb-1">
                            {item.name}
                          </h3>
                          <p className="text-2xl font-bold text-primary">
                            R$ {item.price.toLocaleString("pt-BR")}
                          </p>
                        </div>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>

                        <div className="flex items-center border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-secondary transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 font-medium min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-secondary transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Continue Shopping */}
              <div className="pt-4">
                <Link href="/produtos">
                  <Button variant="outline" className="clip-corner">
                    ← Continuar Comprando
                  </Button>
                </Link>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-6">
              {/* Coupon */}
              <Card className="border-border/50 bg-card clip-corner">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Cupom de Desconto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite o código"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      className="bg-secondary border-border focus-visible:ring-primary clip-corner"
                    />
                    <Button
                      onClick={applyCoupon}
                      className="bg-primary hover:bg-primary/90 text-white clip-corner"
                    >
                      Aplicar
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <Badge className="w-full justify-center bg-green-500 text-white border-none py-2">
                      {appliedCoupon.code} - {appliedCoupon.discount}% de desconto
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Códigos: GAMER50 (50% desc.) | DESCONTO10 (10% desc.)
                  </p>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card className="border-border/50 bg-card clip-corner">
                <CardHeader>
                  <CardTitle className="font-display text-lg">Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">
                        R$ {subtotal.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Desconto ({appliedCoupon?.discount}%)</span>
                        <span className="font-medium">
                          -R$ {discount.toLocaleString("pt-BR")}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-green-600">Grátis</span>
                        ) : (
                          `R$ ${shipping.toLocaleString("pt-BR")}`
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-display font-bold text-lg">Total</span>
                      <span className="font-display font-bold text-2xl text-primary">
                        R$ {total.toLocaleString("pt-BR")}
                      </span>
                    </div>

                    <Link href="/checkout">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-12">
                        Ir para Checkout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <p className="text-xs text-muted-foreground text-center pt-4">
                    Frete grátis em compras acima de R$ 100
                  </p>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card className="border-border/50 bg-primary/10 border-primary/20 clip-corner">
                <CardContent className="pt-6 text-sm text-muted-foreground">
                  <p className="mb-3">🔒 Sua compra é 100% segura</p>
                  <ul className="space-y-1 text-xs">
                    <li>✓ Criptografia SSL</li>
                    <li>✓ Dados protegidos</li>
                    <li>✓ Pagamento seguro</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-display font-bold mb-2">Carrinho Vazio</h2>
            <p className="text-muted-foreground mb-8">
              Você ainda não adicionou nenhum produto ao carrinho.
            </p>
            <Link href="/produtos">
              <Button className="bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner">
                Continuar Comprando
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
