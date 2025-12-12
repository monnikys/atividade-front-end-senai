import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-secondary/30 py-12 px-4">
        <Card className="w-full max-w-md border-border/50 shadow-xl clip-corner-lg bg-card">
          <CardHeader className="space-y-1 text-center pb-8">
            <CardTitle className="text-3xl font-display font-bold uppercase tracking-wider">
              Login
            </CardTitle>
            <CardDescription className="text-base">
              Entre na sua conta para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Usuário / Email</Label>
              <Input 
                id="email" 
                placeholder="Insira o seu usuário" 
                className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a href="#" className="text-sm text-primary hover:underline">
                  Esqueceu a senha?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="Insira a sua senha"
                className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner" 
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-4">
            <Button className="w-full h-12 text-lg font-display uppercase tracking-wider bg-primary hover:bg-primary/90 clip-corner">
              Entrar
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-4">
              Não é cadastrado ainda?{" "}
              <Link href="/cadastro" className="text-primary font-bold hover:underline">
                Cadastre-se
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}
