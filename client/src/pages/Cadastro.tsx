import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (value: string) => {
    setFormData({ ...formData, password: value });
    
    // Calculate password strength
    let strength = 0;
    if (value.length >= 8) strength++;
    if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
    if (/\d/.test(value)) strength++;
    if (/[!@#$%^&*]/.test(value)) strength++;
    
    setPasswordStrength(strength);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const passwordRequirements = [
    { label: "Mínimo 8 caracteres", met: formData.password.length >= 8 },
    { label: "Letras maiúsculas e minúsculas", met: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) },
    { label: "Números", met: /\d/.test(formData.password) },
    { label: "Caracteres especiais", met: /[!@#$%^&*]/.test(formData.password) },
  ];

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-secondary/30 py-12 px-4">
        <div className="w-full max-w-2xl">
          <Card className="border-border/50 shadow-xl clip-corner-lg bg-card">
            <CardHeader className="space-y-1 text-center pb-8">
              <CardTitle className="text-3xl font-display font-bold uppercase tracking-wider">
                Criar Conta
              </CardTitle>
              <CardDescription className="text-base">
                Junte-se à comunidade LH Games e aproveite ofertas exclusivas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone (Opcional)</Label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Crie uma senha forte"
                      value={formData.password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
                      className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner pr-10"
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

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-2 mt-3">
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              i < passwordStrength ? "bg-primary" : "bg-secondary"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        {passwordRequirements.map((req, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2
                              className={`h-3.5 w-3.5 ${
                                req.met ? "text-green-500" : "text-gray-300"
                              }`}
                            />
                            <span className={req.met ? "text-green-600" : ""}>
                              {req.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirme sua senha"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                      }
                      className="h-12 bg-secondary border-border focus-visible:ring-primary clip-corner pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {formData.password && formData.confirmPassword && (
                    <p
                      className={`text-xs ${
                        formData.password === formData.confirmPassword
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formData.password === formData.confirmPassword
                        ? "✓ Senhas coincidem"
                        : "✗ Senhas não coincidem"}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.acceptTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, acceptTerms: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-border cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    Concordo com os{" "}
                    <a href="#" className="text-primary hover:underline">
                      Termos de Serviço
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!formData.acceptTerms || formData.password !== formData.confirmPassword}
                className="w-full h-12 text-lg font-display uppercase tracking-wider bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed clip-corner"
              >
                Criar Conta
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-primary font-bold hover:underline">
                  Faça login
                </Link>
              </div>
            </CardFooter>
          </Card>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { title: "Ofertas Exclusivas", desc: "Acesso a promoções especiais" },
              { title: "Frete Grátis", desc: "Em compras acima de R$ 100" },
              { title: "Suporte 24/7", desc: "Atendimento ao cliente" },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-border/50 bg-card clip-corner text-center">
                <CardContent className="pt-6">
                  <h3 className="font-display font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
