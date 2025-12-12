import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DetalheProduto() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Mouse Gamer Pro X - Edição Especial",
    price: 182,
    originalPrice: 250,
    rating: 5,
    reviews: 128,
    category: "Periféricos",
    inStock: true,
    images: [
      "/images/product-mouse.png",
      "/images/product-keyboard.png",
      "/images/product-headset.png",
    ],
    description:
      "O Mouse Gamer Pro X é a escolha perfeita para jogadores competitivos. Com sensor de 16.000 DPI, 8 botões programáveis e design ergonômico, oferece precisão incomparável.",
    specifications: {
      "Sensor": "Óptico 16.000 DPI",
      "Botões": "8 programáveis",
      "Peso": "95g",
      "Conexão": "USB 2.0 / Wireless",
      "Compatibilidade": "Windows, Mac, Linux",
      "Garantia": "2 anos",
    },
    features: [
      "Sensor óptico de alta precisão",
      "RGB customizável",
      "Bateria de 50 horas",
      "Design ergonômico",
      "Botões programáveis",
      "Software dedicado",
    ],
    reviews_data: [
      {
        author: "João Silva",
        rating: 5,
        title: "Excelente produto!",
        comment: "Muito bom, chegou rápido e bem embalado. Recomendo!",
        date: "2025-01-15",
      },
      {
        author: "Maria Santos",
        rating: 5,
        title: "Perfeito para competição",
        comment: "Uso em torneios e nunca me decepcionou. Muito preciso.",
        date: "2025-01-10",
      },
    ],
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      price: 350,
      image: "/images/product-keyboard.png",
      rating: 4,
    },
    {
      id: 3,
      name: "Headset Wireless 7.1",
      price: 420,
      image: "/images/product-headset.png",
      rating: 5,
    },
    {
      id: 4,
      name: "Mousepad Grande RGB",
      price: 89,
      image: "/images/product-mouse.png",
      rating: 4,
    },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container py-4 text-sm text-muted-foreground">
        <a href="/" className="hover:text-primary">Home</a>
        <span className="mx-2">/</span>
        <a href="/produtos" className="hover:text-primary">Produtos</a>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-secondary/30 aspect-square rounded-lg overflow-hidden flex items-center justify-center p-8">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  } bg-secondary/30 flex items-center justify-center p-2`}
                >
                  <img
                    src={image}
                    alt={`Imagem ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl font-display font-bold uppercase tracking-wider mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.reviews} avaliações
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">
                  R$ {product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  R$ {product.originalPrice}
                </span>
                <Badge variant="destructive" className="ml-2">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                ou 12x de R$ {(product.price / 12).toFixed(2)} sem juros
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                {product.inStock ? "Em estoque" : "Fora de estoque"}
              </span>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantidade:</label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-16 border-0 text-center focus-visible:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-display uppercase tracking-wider clip-corner-lg h-14"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Adicionar ao Carrinho
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="clip-corner-lg h-14"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="clip-corner-lg h-14"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex gap-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Frete Grátis</p>
                  <p className="text-muted-foreground">Acima de R$ 100</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Garantia</p>
                  <p className="text-muted-foreground">2 anos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RotateCcw className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Devolução</p>
                  <p className="text-muted-foreground">30 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - Descrição, Especificações, Avaliações */}
        <Tabs defaultValue="descricao" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/30 p-1 rounded-lg clip-corner">
            <TabsTrigger value="descricao" className="clip-corner">Descrição</TabsTrigger>
            <TabsTrigger value="especificacoes" className="clip-corner">Especificações</TabsTrigger>
            <TabsTrigger value="avaliacoes" className="clip-corner">Avaliações</TabsTrigger>
          </TabsList>

          <TabsContent value="descricao" className="mt-6 space-y-4">
            <p className="text-foreground leading-relaxed">
              {product.description}
            </p>
            <div className="space-y-3">
              <h3 className="font-display font-bold text-lg">Características Principais:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="especificacoes" className="mt-6">
            <div className="border border-border rounded-lg overflow-hidden clip-corner">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-border last:border-b-0 ${
                        idx % 2 === 0 ? "bg-secondary/20" : ""
                      }`}
                    >
                      <td className="px-6 py-3 font-medium w-1/3">{key}</td>
                      <td className="px-6 py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="avaliacoes" className="mt-6 space-y-6">
            <div className="space-y-4">
              {product.reviews_data.map((review, idx) => (
                <Card key={idx} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-base">{review.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          por {review.author} • {review.date}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-3xl font-display font-bold uppercase tracking-wide border-l-4 border-primary pl-4 mb-8">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card
                key={product.id}
                className="group border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card cursor-pointer"
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
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-4">
                    R$ {product.price}
                  </p>
                  <Button className="w-full clip-corner bg-black text-white hover:bg-primary hover:text-white transition-colors">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
