import Layout from "@/components/Layout";

export default function PoliticaPrivacidade() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Política de Privacidade
          </h1>
          <p className="text-gray-400 mt-2">
            Sua privacidade é importante para nós
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">1. Coleta de Dados</h2>
            <p className="text-gray-600 mb-4">
              A LH Games coleta informações pessoais que você nos fornece voluntariamente ao fazer compras, 
              criar uma conta ou entrar em contato conosco. Essas informações incluem nome, email, endereço e 
              dados de pagamento.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">2. Uso de Dados</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos seus dados para processar pedidos, enviar confirmações, fornecer suporte ao cliente 
              e melhorar nossos serviços. Nunca compartilhamos suas informações com terceiros sem consentimento.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">3. Segurança</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de segurança robustas para proteger suas informações pessoais. Todos os 
              dados de pagamento são criptografados e processados com segurança.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">4. Cookies</h2>
            <p className="text-gray-600 mb-4">
              Nosso site utiliza cookies para melhorar sua experiência de navegação. Você pode desabilitar 
              cookies em suas configurações de navegador, mas isso pode afetar a funcionalidade do site.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">5. Direitos do Usuário</h2>
            <p className="text-gray-600 mb-4">
              Você tem o direito de acessar, corrigir ou deletar seus dados pessoais. Para exercer esses 
              direitos, entre em contato conosco através do email contato@lhgames.com.br.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">6. Alterações na Política</h2>
            <p className="text-gray-600 mb-4">
              Reservamos o direito de alterar esta política de privacidade a qualquer momento. Notificaremos 
              você sobre mudanças significativas através do email ou do site.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">7. Contato</h2>
            <p className="text-gray-600 mb-4">
              Se você tiver dúvidas sobre nossa política de privacidade, entre em contato conosco em 
              contato@lhgames.com.br ou pelo telefone (11) 3000-0000.
            </p>

            <p className="text-gray-500 text-sm mt-12">
              Última atualização: Dezembro de 2025
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
