import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Filter, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import Layout from "@/components/Layout";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export default function Produtos() {
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };


  useEffect(() => {
    const queryString = location.includes("?") ? location.split("?")[1] : "";
    const params = new URLSearchParams(queryString);
    const categoryParam = params.get("categoria");
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      setSelectedCategory(decodedCategory);
    } else {
      setSelectedCategory(null);
    }
  }, [location]);


  const categories = ["PC Gamer", "Consoles", "Periféricos", "Áudio", "Monitores", "Cadeiras"];
  
  const allProducts = [
    {
      id: 1,
      name: "Mouse Gamer Pro X",
      category: "Periféricos",
      price: 182,
      image: "/images/product-mouse.png",
      rating: 5,
      reviews: 128
    },
    {
      id: 2,
      name: "Teclado Mecânico RGB",
      category: "Periféricos",
      price: 350,
      image: "/images/product-keyboard.png",
      rating: 4,
      reviews: 95
    },
    {
      id: 3,
      name: "Headset Wireless 7.1",
      category: "Áudio",
      price: 420,
      image: "/images/product-headset.png",
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: "Monitor Ultrawide 144Hz",
      category: "Monitores",
      price: 2100,
      image: "/images/product-monitor.png",
      rating: 5,
      reviews: 87
    },
    {
      id: 5,
      name: "PC Gamer Completo",
      category: "PC Gamer",
      price: 1200,
      image: "/images/product-pc.png",
      rating: 4,
      reviews: 64
    },
    {
      id: 6,
      name: "Mousepad Grande RGB",
      category: "Periféricos",
      price: 89,
      image: "/images/product-mouse.png",
      rating: 4,
      reviews: 42
    },
    {
      id: 7,
      name: "Hub USB 7 Portas",
      category: "Periféricos",
      price: 120,
      image: "/images/product-keyboard.png",
      rating: 3,
      reviews: 28
    },
    {
      id: 8,
      name: "Webcam 4K Pro",
      category: "Periféricos",
      price: 450,
      image: "/images/product-headset.png",
      rating: 5,
      reviews: 73
    },
    {
      id: 9,
      name: "Console Next Gen",
      category: "Consoles",
      price: 4500,
      image: "/images/product-console.png",
      rating: 5,
      reviews: 203
    },
    {
      id: 10,
      name: "Cadeira Gamer Pro",
      category: "Cadeiras",
      price: 950,
      image: "/images/product-chair.png",
      rating: 5,
      reviews: 112
    },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Produtos
          </h1>
          <p className="text-gray-400 mt-2">
            Encontre o melhor hardware para seu setup gamer
          </p>
          {selectedCategory && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-400">Filtrando por:</span>
              <Badge className="bg-primary text-white">{selectedCategory}</Badge>
            </div>
          )}
        </div>
      </section>

      {/* Filters and Products */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card border border-border p-6 clip-corner space-y-6">
              <div className="flex items-center justify-between lg:hidden">
                <h3 className="font-display font-bold text-lg">Filtros</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Buscar</label>
                <Input
                  placeholder="Digite o produto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-secondary border-border clip-corner"
                />
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-display font-bold uppercase tracking-wider text-sm">
                  Categorias
                </h4>
                <div className="space-y-2">
                  <Link
                    href="/produtos"
                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedCategory === null
                        ? "bg-primary text-white"
                        : "hover:bg-secondary"
                    }`}
                  >
                    Todas
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/produtos?categoria=${encodeURIComponent(cat)}`}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-white"
                          : "hover:bg-secondary"
                      }`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="font-display font-bold uppercase tracking-wider text-sm">
                  Preço
                </h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      type="number"
                      placeholder="Mín"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="bg-secondary border-border clip-corner"
                    />
                    <Input
                      type="number"
                      placeholder="Máx"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="bg-secondary border-border clip-corner"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    R$ {priceRange[0]} - R$ {priceRange[1]}
                  </p>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full clip-corner"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                  setPriceRange([0, 5000]);
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <p className="text-sm text-muted-foreground">
                Mostrando {filteredProducts.length} produtos
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden clip-corner"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="clip-corner">
                      Ordenar <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Mais Relevantes</DropdownMenuItem>
                    <DropdownMenuItem>Menor Preço</DropdownMenuItem>
                    <DropdownMenuItem>Maior Preço</DropdownMenuItem>
                    <DropdownMenuItem>Mais Vendidos</DropdownMenuItem>
                    <DropdownMenuItem>Melhores Avaliações</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
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
                      <Badge variant="secondary" className="mb-2">
                        {product.category}
                      </Badge>
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
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">
                        R$ {product.price.toLocaleString("pt-BR")}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full clip-corner bg-black text-white hover:bg-primary hover:text-white transition-colors">
                        Ver Detalhes
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                    setPriceRange([0, 5000]);
                  }}
                  className="clip-corner"
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
