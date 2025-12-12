import Layout from "@/components/Layout";

export default function TermosServico() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider">
            Termos de Serviço
          </h1>
          <p className="text-gray-400 mt-2">
            Leia nossos termos e condições
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-display font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao acessar e usar o site da LH Games, você concorda em aceitar estes termos de serviço. 
              Se você não concorda com qualquer parte destes termos, você não deve usar o site.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">2. Uso do Site</h2>
            <p className="text-gray-600 mb-4">
              Você concorda em usar este site apenas para fins legais e de forma que não infrinja os direitos 
              de terceiros ou restrinja seu uso e gozo. Comportamento proibido inclui assédio ou causar 
              angústia ou inconveniência.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">3. Produtos e Preços</h2>
            <p className="text-gray-600 mb-4">
              Todos os produtos estão sujeitos à disponibilidade. Reservamos o direito de limitar as 
              quantidades e descontinuar qualquer produto. Os preços estão sujeitos a alterações sem aviso prévio.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">4. Pedidos e Pagamento</h2>
            <p className="text-gray-600 mb-4">
              Ao fazer um pedido, você concorda em fornecer informações precisas e completas. O pagamento 
              deve ser recebido antes do envio do produto. Aceitamos cartão de crédito, débito e transferência bancária.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">5. Entrega</h2>
            <p className="text-gray-600 mb-4">
              Nos esforçamos para entregar os produtos dentro do prazo estimado. No entanto, não nos 
              responsabilizamos por atrasos causados por fatores fora do nosso controle.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">6. Devoluções e Reembolsos</h2>
            <p className="text-gray-600 mb-4">
              Produtos podem ser devolvidos dentro de 30 dias da compra, desde que estejam em perfeito estado 
              e com a embalagem original. Reembolsos serão processados dentro de 5-10 dias úteis.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-4">
              A LH Games não será responsável por danos indiretos, incidentais, especiais ou consequentes 
              resultantes do uso ou incapacidade de usar o site ou os produtos.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">8. Alterações nos Termos</h2>
            <p className="text-gray-600 mb-4">
              Reservamos o direito de modificar estes termos de serviço a qualquer momento. Seu uso contínuo 
              do site após essas modificações constitui aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-display font-bold mt-8 mb-4">9. Lei Aplicável</h2>
            <p className="text-gray-600 mb-4">
              Estes termos de serviço são regidos pelas leis da República Federativa do Brasil e você 
              concorda em se submeter à jurisdição exclusiva dos tribunais brasileiros.
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
