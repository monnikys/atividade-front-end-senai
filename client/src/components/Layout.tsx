import { Link, useLocation } from "wouter";
import { ShoppingCart, User, Search, Menu, X, Facebook, Instagram, CreditCard } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Promoções", path: "/promocoes" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-6">
            <div className="relative w-10 h-10 bg-primary clip-corner flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-xl">LH</span>
            </div>
            <span className="hidden md:inline-block font-display font-bold text-xl tracking-wider">
              GAMES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors hover:text-primary ${
                  location === item.path ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-6">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="O que você deseja buscar?"
                className="w-full bg-secondary pl-9 md:w-[300px] lg:w-[300px] border-none focus-visible:ring-1 focus-visible:ring-primary clip-corner"
              />
            </div>
            <Button size="sm" className="ml-2 clip-corner font-display uppercase tracking-wider">
              Buscar
            </Button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Link href="/carrinho">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrinho</span>
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
            </Link>
            
            <Link href="/minha-conta">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Minha Conta</span>
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border bg-background">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative w-8 h-8 bg-primary clip-corner flex items-center justify-center">
                      <span className="font-display font-bold text-primary-foreground">LH</span>
                    </div>
                    <span className="font-display font-bold text-lg">GAMES</span>
                  </Link>
                  
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar..."
                      className="w-full bg-secondary pl-9 clip-corner"
                    />
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          location === item.path ? "text-primary" : "text-muted-foreground"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link 
                      href="/login" 
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login / Cadastro
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary clip-corner flex items-center justify-center">
                  <span className="font-display font-bold text-white">LH</span>
                </div>
                <span className="font-display font-bold text-xl tracking-wider">GAMES</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Inspirando e valorizando a paixão pela tecnologia e jogos. Criando experiências inéditas para o mundo gamer.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Institucional */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg">Institucional</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                <li><Link href="/politica-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                <li><Link href="/termos-servico" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
              </ul>
            </div>

            {/* Atendimento */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg">Atendimento</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/fale-conosco" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Trocas e Devoluções</a></li>
                <li className="pt-2 text-white font-medium">(11) 99999-9999</li>
                <li className="text-white font-medium">contato@lhgames.com.br</li>
              </ul>
            </div>

            {/* Pagamento */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg">Pagamento</h3>
              <div className="flex flex-wrap gap-2 text-gray-400">
                <div className="flex items-center gap-2 border border-white/10 p-2 rounded bg-white/5">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-xs">Cartão de Crédito</span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 p-2 rounded bg-white/5">
                  <span className="text-xs font-bold">PIX</span>
                </div>
                <div className="flex items-center gap-2 border border-white/10 p-2 rounded bg-white/5">
                  <span className="text-xs">Boleto</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© 2025 LH Games - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
