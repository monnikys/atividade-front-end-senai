# LH Games - E-commerce Gamer

## 📋 Sobre o Projeto

**LH Games** é um site de e-commerce especializado em periféricos, componentes e acessórios para gamers. O projeto foi desenvolvido como atividade prática do curso de **Desenvolvimento Front-End Full Stack**, aplicando conceitos modernos de design responsivo, interatividade e experiência do usuário.

### Código da Disciplina
- **Disciplina:** Codificação Front-End
- **Código:** CTMSP_DDF_QO_FULLST_252T06_CFEND_QUA.459.037
- **Atividade:** 2 - Desenvolvimento da página index do site

---

## 🎯 Requisitos Implementados

### ✅ Requisitos Obrigatórios

#### 1. **Estrutura HTML5**
- Marcação semântica com tags HTML5 apropriadas
- Estrutura bem organizada e acessível
- Meta tags para responsividade e SEO

#### 2. **Estilização CSS3**
- Estilos modernos com CSS3
- Variáveis CSS para tema consistente
- Animações e transições suaves
- Design minimalista com paleta Cyberpunk (Branco, Preto, Azul Neon)

#### 3. **Responsividade**
- **Media Queries** para diferentes tamanhos de tela
- **Bootstrap 5.3** integrado para componentes responsivos
- Layout fluido que se adapta de mobile a desktop
- Teste em múltiplas resoluções

#### 4. **Funcionalidades JavaScript**
- Carrossel de produtos com navegação
- Filtro de categorias dinâmico
- Timer de contagem regressiva para promoções
- Validação de formulários
- Interações com o carrinho
- Toggle de menu mobile

#### 5. **Páginas Desenvolvidas**

##### Página Index (Home)
- ✅ **Menu de Navegação** - Links para todas as seções
- ✅ **Banner Principal** - Hero section com CTA "Comprar Agora" e "Saiba Mais"
- ✅ **Seção de Destaques** - "Os Mais Vendidos" com carrossel de produtos
- ✅ **Navegação por Categorias** - PC Gamer, Consoles, Periféricos, Áudio
- ✅ **Seção de Novidades** - Produtos em destaque
- ✅ **Galeria de Produtos** - Grid responsivo com imagens
- ✅ **Rodapé** - Links institucionais, contato e informações de pagamento

##### Página de Login
- ✅ Formulário de autenticação
- ✅ Validação de campos
- ✅ Toggle de visibilidade de senha
- ✅ Opção "Manter conectado"
- ✅ Link para cadastro
- ✅ Credenciais de teste para demonstração

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework JavaScript para UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **Bootstrap 5.3** - Componentes responsivos
- **Wouter** - Roteamento leve
- **Shadcn/ui** - Componentes UI pré-estilizados
- **Lucide React** - Ícones SVG
- **Embla Carousel** - Carrossel de produtos

### Build & Deploy
- **Vite** - Build tool moderno
- **Node.js** - Runtime JavaScript
- **pnpm** - Gerenciador de pacotes

---

## 📁 Estrutura do Projeto

```
ecommerce-gamer/
├── client/
│   ├── public/
│   │   └── images/           # Imagens dos produtos
│   ├── src/
│   │   ├── pages/            # Componentes de página
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Produtos.tsx
│   │   │   ├── DetalheProduto.tsx
│   │   │   ├── Promocoes.tsx
│   │   │   ├── Contato.tsx
│   │   │   ├── Cadastro.tsx
│   │   │   ├── Carrinho.tsx
│   │   │   ├── Checkout.tsx
│   │   │   ├── MinhaContaPage.tsx
│   │   │   ├── Sobre.tsx
│   │   │   ├── PoliticaPrivacidade.tsx
│   │   │   ├── TermosServico.tsx
│   │   │   └── FaleConosco.tsx
│   │   ├── components/       # Componentes reutilizáveis
│   │   │   ├── Layout.tsx    # Header e Footer
│   │   │   └── ui/           # Componentes shadcn/ui
│   │   ├── contexts/         # Context API
│   │   ├── hooks/            # Custom hooks
│   │   ├── lib/              # Utilitários
│   │   ├── App.tsx           # Roteamento principal
│   │   ├── main.tsx          # Entry point
│   │   └── index.css         # Estilos globais
│   └── index.html
├── server/
│   └── index.ts              # Servidor Express (placeholder)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ instalado
- pnpm instalado (`npm install -g pnpm`)

### Instalação

```bash
# Clone o repositório
git clone <https://github.com/monnikys/atividade-front-end-senai.git>
cd ecommerce-gamer

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
pnpm start
```

---

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile-First** approach:

- **Mobile** (< 640px) - Layout single column
- **Tablet** (640px - 1024px) - Layout 2 colunas
- **Desktop** (> 1024px) - Layout 3+ colunas

Todos os componentes se adaptam automaticamente com media queries CSS.

---

## 🎨 Design System

### Paleta de Cores
- **Primária:** Azul Neon (#0066FF)
- **Secundária:** Branco (#FFFFFF)
- **Terciária:** Preto (#000000)
- **Acentos:** Cinza (#666666)

### Tipografia
- **Display:** Orbitron (títulos)
- **Body:** Inter/Roboto (conteúdo)
- **Tamanhos:** 12px a 48px com escala harmônica

### Componentes
- Botões com efeito hover
- Cards com sombra sutil
- Inputs com validação visual
- Badges para tags e status
- Ícones Lucide React

---

## ✨ Funcionalidades Implementadas

### 1. **Navegação por Categorias**
- Clique em uma categoria na Home
- A página de Produtos filtra automaticamente
- URL atualiza com parâmetro de categoria

### 2. **Carrossel de Produtos**
- Navegação com setas
- Autoplay opcional
- Responsivo em todos os tamanhos

### 3. **Timer de Promoção**
- Contagem regressiva em tempo real
- Atualiza a cada segundo
- Exibe horas, minutos e segundos

### 4. **Carrinho de Compras**
- Adicionar/remover produtos
- Atualizar quantidade
- Aplicar cupons de desconto
- Cálculo automático de total

### 5. **Autenticação**
- Página de Login com validação
- Proteção de rotas (Minha Conta)
- Redirecionamento automático

### 6. **Formulários**
- Cadastro com validação de senha
- Contato com validação de email
- Checkout com múltiplas etapas

---

## 📊 Páginas Desenvolvidas

| Página | Rota | Descrição |
|--------|------|-----------|
| Home | `/` | Página inicial com destaques |
| Login | `/login` | Autenticação de usuários |
| Produtos | `/produtos` | Listagem com filtros |
| Detalhes | `/produto/:id` | Informações do produto |
| Promoções | `/promocoes` | Ofertas especiais |
| Contato | `/contato` | Formulário de contato |
| Cadastro | `/cadastro` | Registro de novos usuários |
| Carrinho | `/carrinho` | Gerenciamento de itens |
| Checkout | `/checkout` | Finalização de compra |
| Minha Conta | `/minha-conta` | Histórico e dados pessoais |
| Sobre | `/sobre` | Informações da empresa |
| Política | `/politica-privacidade` | Política de privacidade |
| Termos | `/termos-servico` | Termos de serviço |
| Fale Conosco | `/fale-conosco` | Formulário de contato |

---

## 🎓 Conceitos Aplicados

### HTML5
- Semântica correta
- Acessibilidade (ARIA labels)
- Meta tags para SEO
- Estrutura bem organizada

### CSS3
- Flexbox e Grid
- Variáveis CSS
- Animações e transições
- Media queries
- Pseudo-classes e pseudo-elementos

### JavaScript/TypeScript
- Componentes React funcionais
- Hooks (useState, useEffect, useContext)
- Roteamento com Wouter
- Manipulação de estado
- Event handling

### Bootstrap
- Grid system
- Componentes pré-estilizados
- Utilitários responsivos
- Integração com Tailwind

---

## 🧪 Testes

O projeto foi testado em:
- ✅ Chrome/Edge (Desktop)
- ✅ Firefox (Desktop)
- ✅ Safari (Desktop)
- ✅ Responsividade mobile (DevTools)
- ✅ Funcionalidades JavaScript
- ✅ Validação de formulários

---

## 📝 Notas de Desenvolvimento

### Decisões de Design
1. **Cyberpunk Minimalista** - Escolhido para atrair público gamer
2. **React + Tailwind** - Stack moderna e escalável
3. **Componentes shadcn/ui** - Reutilização e consistência
4. **Wouter** - Roteamento leve sem overhead

### Melhorias Futuras
1. Integração com API real para produtos
2. Sistema de autenticação com JWT
3. Integração de pagamento (Stripe/PagSeguro)
4. Avaliações e comentários de clientes
5. Wishlist/Favoritos
6. Chat de suporte ao cliente

---

## 👨‍💻 Autor

**Desenvolvedor:** [Monniky Ribeiro]  
**Curso:** Codificação Front-End Full Stack  
**Data:** Dezembro de 2025

---

## 📄 Licença

Este projeto é fornecido como material educacional. Todos os direitos reservados.

---

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto:
- **Email:** contato@lhgames.com.br
- **Telefone:** (11) 3000-0000

---

## 🙏 Agradecimentos

Agradecimentos especiais aos instrutores e colegas que contribuíram com feedback e sugestões durante o desenvolvimento deste projeto.

---

**Status do Projeto:** ✅ Completo e Funcional

*Última atualização: Dezembro de 2025*
