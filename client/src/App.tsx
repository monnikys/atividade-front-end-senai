import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import DetalheProduto from "./pages/DetalheProduto";
import Promocoes from "./pages/Promocoes";
import Contato from "./pages/Contato";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Checkout from "./pages/Checkout";
import MinhaContaPage from "./pages/MinhaContaPage";
import Sobre from "./pages/Sobre";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosServico from "./pages/TermosServico";
import FaleConosco from "./pages/FaleConosco";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/produtos"} component={Produtos} />
      <Route path={"/produto/:id"} component={DetalheProduto} />
      <Route path={"/promocoes"} component={Promocoes} />
      <Route path={"/contato"} component={Contato} />
      <Route path={"/cadastro"} component={Cadastro} />
      <Route path={"/carrinho"} component={Carrinho} />
      <Route path={"/checkout"} component={Checkout} />
      <Route path={"/minha-conta"} component={MinhaContaPage} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/politica-privacidade"} component={PoliticaPrivacidade} />
      <Route path={"/termos-servico"} component={TermosServico} />
      <Route path={"/fale-conosco"} component={FaleConosco} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
