import TitleBadge from "@/components/global/ui/title-badge";

export default function SecurityPolicy(){
  return (
    <div className="p-5 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <TitleBadge className="my-5" icon="shield">Política de Segurança</TitleBadge>
      </div>

      <div className="max-w-2xl p-5 bg-stone-50 text-stone-800 rounded-xl">
        <h2 className="text-lg font-bold mt- mb-1">1. Introdução</h2>
        <p className="mb-3">
          A política de segurança da informação visa proteger os dados e processos importantes da TechNexus e seus clientes, definindo um padrão de segurança a ser seguido pelo corpo técnico e gerencial e pelos usuários internos ou externos à organização.
        </p>

        <h2 className="text-lg font-bold mt-8 mb-1">2. Visão e Princípios</h2>
        <p className="mb-3">
          A Política de Segurança da Informação da TechNexus estabelece a estratégia geral da organização para proteger suas informações, formalizando o compromisso com a segurança da informação e a privacidade de seus dados.
        </p>

        <h3 className="text-md font-bold mt-5 mb-1">2.1. Visão</h3>
        <p className="mb-3">
          A Nossa visão é assegurar a proteção contínua e eficaz dos ativos de informação da TechNexus, suportando a missão e os objetivos estratégicos da empresa.
        </p>

        <h3 className="text-md font-bold mt-5 mb-1">2.2. Princípios</h3>
        <p className="mb-3">
          A TechNexus se ampara nos princípios da Lei nº 13.709/2018, a Lei Geral de Proteção de Dados (LGPD), e se compromete com:
          <ul className="list-disc ml-4 mt-2">
            <li className="list-item"><span className="font-bold">Confidencialidade:</span> Garantir que a informação seja acessível apenas por aqueles autorizados a ter acesso, protegendo contra acessos não autorizados.</li>
            <li className="list-item"><span className="font-bold">Integridade:</span> Salvaguardar a precisão e completude da informação e dos métodos de processamento, prevenindo alterações não autorizadas.</li>
            <li className="list-item"><span className="font-bold">Disponibilidade:</span> Assegurar que os usuários autorizados tenham acesso à informação e aos ativos associados sempre que necessário.</li>
            <li className="list-item"><span className="font-bold">Legalidade:</span> Atuar em conformidade com as leis e regulamentações aplicáveis, especialmente no que tange à proteção de dados pessoais, respeitando a privacidade e os direitos dos titulares dos dados.</li>
            <li className="list-item"><span className="font-bold">Transparência:</span> Manter práticas claras e acessíveis sobre o tratamento de dados, garantindo que os titulares dos dados compreendam como suas informações são utilizadas e protegidas.</li>
          </ul>
        </p>

        <h2 className="text-lg font-bold mt-8 mb-1">3. Governança e Responsabilidades</h2>
        <h3 className="text-md font-bold mb-1">3.1. Estrutura de Governança</h3>
        <p className="mb-3">
          A governança da Segurança da Informação na TechNexus é gerenciada por uma estrutura clara e bem definida, composta por diversos níveis de responsabilidade para assegurar a eficácia da política.
        </p>
        <h3 className="text-md font-bold mt-5 mb-1">3.2. Papéis e Responsabilidades</h3>
        <ul className="ml-4 mt-2">
          <li><span className="font-bold">Geral:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Todos os funcionários e colaboradores da TechNexus têm a responsabilidade de seguir as políticas de segurança da informação, participar dos treinamentos de segurança e reportar qualquer incidente ou vulnerabilidade de segurança.</li>
              <li>É responsabilidade de todos os colaboradores proteger as informações da empresa, utilizando boas práticas de segurança em suas atividades diárias.</li>
            </ul>
          </li>

          <li><span className="font-bold">Administrador de Sistemas/Operações:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Responsável pela implementação e manutenção das medidas técnicas de segurança nos sistemas e infraestrutura de TI.</li>
              <li>Garante que todos os sistemas estejam configurados corretamente, atualizados e protegidos contra ameaças.</li>
              <li>Realiza backups regulares, monitora a integridade dos sistemas e responde a incidentes operacionais.</li>
            </ul>
          </li>

          <li><span className="font-bold">Administrador de Segurança:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Coordena todas as atividades de segurança da informação, incluindo a implementação de políticas, a gestão de incidentes e a realização de auditorias de segurança.</li>
              <li>Avalia riscos de segurança, define controles e medidas de proteção, e assegura a conformidade com as leis e regulamentações, como a LGPD.</li>
              <li>Promove treinamentos de conscientização em segurança para todos os funcionários e revisa regularmente as políticas de segurança.</li>
            </ul>
          </li>

          <li><span className="font-bold">Contratados:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Devem cumprir todas as políticas e procedimentos de segurança da TechNexus.</li>
              <li>Devem ser treinados nas práticas de segurança da empresa e são responsáveis por proteger as informações às quais têm acesso.</li>
              <li>Acesso a sistemas e informações deve ser limitado ao necessário para a execução de suas funções.</li>
            </ul>
          </li>

          <li><span className="font-bold">Usuários Externos:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Incluem clientes, parceiros e outros stakeholders que interagem com os sistemas da TechNexus.</li>
              <li>Devem seguir as diretrizes de segurança específicas para usuários externos, conforme definido em contratos ou acordos de serviço.</li>
              <li>Acesso deve ser monitorado e restrito de acordo com os princípios de necessidade de conhecimento e de menor privilégio.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">3.3. Comitê de Segurança da Informação (CSI)</h3>
        <p className="mb-3">
          <span className="font-bold">Composição:</span> O CSI é composto por membros da alta administração, incluindo representantes de TI, Compliance, Operações e Segurança.
        </p>
        <p className="mb-3">
          <span className="font-bold">Funções:</span> O CSI é responsável pela definição das diretrizes estratégicas de segurança, aprovação das políticas de segurança e supervisão das iniciativas de segurança da informação.
        </p>
        <p className="mb-3">
          <span className="font-bold">Reuniões:</span> O comitê se reúne trimestralmente para revisar a eficácia das políticas de segurança, avaliar riscos emergentes e definir novas diretrizes conforme necessário.
        </p>

        <h3 className="text-md font-bold mt-5 mb-1">3.4. Fluxo de Comunicação</h3>
        <p className="mb-3">
          Para assegurar uma comunicação eficiente e uma resposta rápida a incidentes de segurança, a TechNexus implementou um fluxo de comunicação estruturado:
        </p>
        <p className="mb-3">
          <span className="font-bold">Relatórios de Incidentes:</span> Todos os incidentes de segurança devem ser reportados imediatamente ao Administrador de Segurança.
        </p>
        <p className="mb-3">
          <span className="font-bold">Atualizações Regulares:</span> O Administrador de Segurança fornece atualizações regulares ao Comitê de Segurança da Informação sobre o status das iniciativas de segurança.
        </p>
        <p className="mb-3">
          <span className="font-bold">Boletins Informativos:</span> Comunicados periódicos são enviados a todos os funcionários para mantê-los informados sobre novas ameaças, melhores práticas de segurança e atualizações das políticas de segurança.
        </p>

        <h2 className="text-lg font-bold mt-8 mb-1">4. Gestão de Riscos</h2>
        <p className="mb-3">
          A gestão de riscos na TechNexus é essencial para identificar, avaliar e mitigar os riscos associados à segurança da informação, garantindo a continuidade e a segurança das operações da loja online.
        </p>
        <h3 className="text-md font-bold mt-5 mb-1">4.1. Identificação de Riscos</h3>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Ameaças cibernéticas:</span> Ataques de malware, ransomware, phishing e outras ameaças cibernéticas que podem comprometer a integridade e disponibilidade dos sistemas.</li>
          <li><span className="font-bold">Falhas de hardware/software:</span> Problemas técnicos com os servidores, balanceamento de carga, banco de dados e sistemas de backup.</li>
          <li><span className="font-bold">Erro humano:</span> Erros cometidos pelos funcionários ao gerenciar produtos, estoque, marketing, vendas, suporte e outras operações.</li>
          <li><span className="font-bold">Acesso não autorizado:</span> Acessos não autorizados aos sistemas e dados da empresa, tanto internamente quanto externamente.</li>
        </ul>
        <h3 className="text-md font-bold mt-5 mb-1">4.2. Mitigação de Riscos</h3>
        <ul className="ml-4 mt-2">
          <li><span className="font-bold">Ameaças cibernéticas:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Implementação de firewalls, antivírus e sistemas de detecção/prevenção de intrusões (IDS/IPS) para proteger os servidores em nuvem.</li>
              <li>Realização de treinamentos regulares de conscientização sobre segurança cibernética para todos os funcionários, com foco em evitar phishing e outros ataques.</li>
              <li>Uso de autenticação multifator (MFA) para acesso a sistemas críticos.</li>
            </ul>
          </li>

          <li><span className="font-bold">Falhas de hardware/software:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Manutenção preventiva e monitoramento contínuo das máquinas em nuvem e do sistema de balanceamento de carga.</li>
              <li>Implementação de políticas de backup rigorosas, garantindo que os backups horários e diários sejam realizados corretamente e possam ser restaurados rapidamente.</li>
              <li>Testes regulares dos planos de recuperação de desastres para garantir que a equipe esteja preparada para responder a falhas.</li>
            </ul>
          </li>

          <li><span className="font-bold">Erro humano:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Desenvolvimento de procedimentos operacionais padrão (POPs) detalhados para todas as atividades críticas, como gerenciamento de produtos, controle de estoque, vendas, suporte e marketing.</li>
              <li>Treinamento contínuo dos funcionários sobre as melhores práticas e políticas de segurança da informação.</li>
              <li>Revisões e auditorias periódicas das operações para identificar e corrigir erros antes que causem problemas maiores.</li>
            </ul>
          </li>

          <li><span className="font-bold">Acesso não autorizado:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Configuração adequada de permissões e controles de acesso para garantir que apenas os funcionários autorizados possam acessar dados e sistemas sensíveis.</li>
              <li>Uso de VPN interna para proteger as comunicações entre a infraestrutura da empresa e os usuários remotos.</li>
              <li>Monitoramento contínuo dos acessos e atividades nos sistemas, com alertas automáticos para atividades suspeitas.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">4.3. Plano de Resposta a Incidentes</h3>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Detecção e Notificação:</span> Estabelecer procedimentos claros para a detecção e notificação imediata de incidentes de segurança.</li>
          <li><span className="font-bold">Resposta e Mitigação:</span> Definir um plano de resposta a incidentes que inclua a contenção do incidente, a investigação, a mitigação dos danos e a recuperação dos sistemas afetados.</li>
          <li><span className="font-bold">Relatórios e Análises:</span> Realizar análises pós-incidente para identificar a causa raiz e implementar medidas preventivas para evitar futuros incidentes.</li>
        </ul>

        <h2 className="text-lg font-bold mt-8 mb-1">5. Políticas e Normas de Segurança</h2>
        <p className="mb-3">
          As políticas e normas de segurança da TechNexus estabelecem diretrizes claras para proteger os ativos de informação, garantindo a confidencialidade, integridade e disponibilidade dos dados e sistemas. Estas políticas são aplicáveis a todos os funcionários, contratados e usuários externos.
        </p>
        <h3 className="text-md font-bold mt-5 mb-1">5.1. Classificação da Informação</h3>
        <p className="mb-3">
          A informação na TechNexus é classificada com base em sua sensibilidade e importância para a empresa. As categorias incluem:
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Pública:</span> Informação destinada ao público geral, como materiais de marketing e conteúdo do site.</li>
          <li><span className="font-bold">Interna:</span> Informação acessível apenas aos funcionários da TechNexus, como políticas internas e documentação de processos.</li>
          <li><span className="font-bold">Confidencial:</span> Informação sensível que requer proteção adicional, como dados de clientes, detalhes financeiros e estratégias de negócios.</li>
          <li><span className="font-bold">Restrita:</span> Informação altamente sensível que só pode ser acessada por indivíduos autorizados, como dados de pagamento e informações pessoais identificáveis (PII).</li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">5.2. Controle de Acesso</h3>
        <p className="mb-3">
          O acesso a sistemas e informações é controlado de acordo com o princípio do menor privilégio, garantindo que os funcionários tenham acesso apenas às informações necessárias para desempenhar suas funções.
        </p>
        <ul className="ml-4 mt-2">
          <li><span className="font-bold">Gerenciamento de Produtos no Site e Controle de Estoque:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Acesso aos sistemas de gerenciamento de inventário e controle de produtos.</li>
              <li>Controle rigoroso de permissões para evitar alterações não autorizadas nos dados de estoque.</li>
            </ul>
          </li>

          <li><span className="font-bold">Marketing:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Acesso às ferramentas de marketing e análise de dados de campanhas.</li>
              <li>Proteção de dados de clientes utilizados em campanhas de marketing.</li>
            </ul>
          </li>

          <li><span className="font-bold">Vendas, Embalagem e Envio:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Acesso ao sistema de pedidos, informações de clientes e status de envio.</li>
              <li>Procedimentos para proteger informações de clientes durante o processo de embalagem e envio.</li>
            </ul>
          </li>

          <li><span className="font-bold">Suporte:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Acesso ao sistema de suporte ao cliente e histórico de atendimento.</li>
              <li>Treinamento para proteger informações sensíveis dos clientes durante as interações de suporte.</li>
            </ul>
          </li>

          <li><span className="font-bold">Gerente e Diretor:</span>
            <ul className="list-disc ml-4 mt-2">
              <li>Acesso a relatórios financeiros, dados de desempenho e informações estratégicas.</li>
              <li>Controle de acesso baseado em funções para assegurar que dados confidenciais e restritos sejam acessíveis apenas por pessoal autorizado.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">5.3. Uso Aceitável</h3>
        <p className="mb-3">
          As diretrizes de uso aceitável estabelecem comportamentos esperados dos funcionários ao utilizar os recursos de TI da TechNexus.
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Dispositivos e Sistemas:</span> Utilizar os dispositivos e sistemas fornecidos pela empresa apenas para fins profissionais.</li>
          <li><span className="font-bold">Senhas e Autenticação:</span> Manter senhas seguras e não compartilhá-las com outras pessoas. Utilizar autenticação multifator sempre que possível.</li>
          <li><span className="font-bold">Email e Comunicação:</span> Evitar o uso de emails corporativos para fins pessoais e estar atento a tentativas de phishing e outras ameaças.</li>
          <li><span className="font-bold">Navegação na Internet:</span> Navegar apenas em sites seguros e evitar downloads de fontes não confiáveis.</li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">5.4. Proteção de Dados</h3>
        <p className="mb-3">
          Medidas específicas são implementadas para proteger os dados da TechNexus, especialmente os dados dos clientes.
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Criptografia:</span> Utilização de criptografia para proteger dados sensíveis em trânsito e em repouso.</li>
          <li><span className="font-bold">Backups:</span> Realização de backups horários e diários dos bancos de dados, com cópias de segurança física semanal.</li>
          <li><span className="font-bold">VPN Interna:</span> Utilização de VPN interna para proteger as comunicações entre a infraestrutura da empresa e os usuários remotos.</li>
        </ul>

        <h3 className="text-md font-bold mt-5 mb-1">5.5. Segurança Física</h3>
        <p className="mb-3">
          Além das medidas de segurança lógica, são implementadas medidas de segurança física para proteger os ativos de informação.
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li><span className="font-bold">Cópias de Segurança Física:</span> Armazenamento seguro de cópias de segurança física em locais protegidos contra acesso não autorizado, danos físicos e desastres naturais.</li>
          <li><span className="font-bold">Controle de Acesso Físico:</span>Restrições de acesso físico às áreas onde os dados e sistemas críticos estão armazenados.</li>
        </ul>
      </div>
    </div>
  )
};
