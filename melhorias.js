/* Mulheres em Rede | Ajustes do TCC - novembro de 2026
 * Altera apenas Guia Acadêmico e Apoio às Mulheres.
 * Vagas e Oportunidades: função, dados e comportamento originais preservados.
 * Carregue este arquivo após app.js no index.html.
 */
(function () {
  'use strict';

  const link = (url, label) => `<a class="btn small light" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span><span class="sr"> (abre em nova aba)</span></a>`;
  const heading = (title, subtitle) => `<div class="container"><div class="crumb"><a href="#inicio">Início</a> &gt; ${title}</div><div class="pagehead"><h1>${title}</h1><p>${subtitle}</p></div></div>`;
  const item = (title, content, expanded=false) => `<details class="accordion"${expanded ? ' open' : ''}><summary>${title}</summary><div class="inside">${content}</div></details>`;
  const supportCard = ({icon='✳',tag,title,description,participation,url,button}) => `
    <article class="card">
      <div class="icon" aria-hidden="true">${icon}</div>
      <span class="eyebrow">${tag}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      <p class="fine"><strong>Como participar:</strong> ${participation}</p>
      ${link(url,button)}
    </article>`;

  const guideTopics = [
    item('Extensão universitária', `
      <p>A extensão universitária é a participação em atividades que conectam os conhecimentos aprendidos no curso às necessidades da sociedade. Pode envolver oficinas, projetos com escolas, eventos e desenvolvimento de soluções para a comunidade.</p>
      <p><strong>Na Ciência da Computação da UFPR:</strong> para estudantes que ingressaram a partir de 2023, o currículo prevê 320 horas de extensão. O curso explica como essas horas podem ser cumpridas e aproveitadas; confira a regra correspondente à sua grade.</p>
      <h3>Como começar</h3>
      <ol><li>Consulte as atividades e modalidades de extensão reconhecidas pelo curso.</li><li>Escolha um projeto de interesse e verifique se recebe estudantes.</li><li>Antes de participar, confira com a coordenação os critérios para contabilizar as horas.</li></ol>
      ${link('https://web.inf.ufpr.br/bcc/extensao/','Ver extensão no curso')}
      <p class="source">Fonte: Bacharelado em Ciência da Computação da UFPR.</p>
    `, true),
    item('Iniciação científica', `
      <p>A iniciação científica (IC) permite que estudantes de graduação participem de um projeto de pesquisa orientado por uma professora ou um professor. É uma forma de aprender a investigar problemas, testar ideias, analisar resultados e comunicar descobertas.</p>
      <p>Na Computação, a pesquisa pode envolver áreas como inteligência artificial, redes, sistemas, dados ou outras linhas dos grupos do Departamento de Informática. A participação pode ser voluntária ou ter bolsa, conforme o projeto e as seleções disponíveis.</p>
      <h3>Como começar</h3>
      <ol><li>Conheça os laboratórios, grupos e docentes que pesquisam assuntos de seu interesse.</li><li>Entre em contato com uma possível orientação e pergunte sobre projetos e vagas.</li><li>Confira editais e mantenha seu Currículo Lattes atualizado.</li></ol>
      ${link('https://web.inf.ufpr.br/bcc/iniciacao-cientifica/','Entender a iniciação científica')}
      ${link('https://web.inf.ufpr.br/bcc/laboratorios-de-pesquisa/','Conhecer laboratórios de pesquisa')}
      <p class="source">Fonte: Bacharelado em Ciência da Computação da UFPR. Bolsas e critérios variam conforme o projeto.</p>
    `),
    item('Intercâmbio', `
      <p>O intercâmbio, também chamado de mobilidade acadêmica, possibilita cursar disciplinas ou realizar atividades acadêmicas em outra instituição, no Brasil ou no exterior, conforme as oportunidades existentes.</p>
      <p>É uma experiência que pode ampliar o contato com outras formas de aprender, diferentes pesquisas e novos idiomas. As possibilidades de participação, custos, eventuais bolsas e aproveitamento de disciplinas dependem do edital e da instituição parceira.</p>
      <h3>Como começar</h3>
      <ol><li>Consulte os editais de mobilidade publicados pela UFPR.</li><li>Verifique os requisitos de idioma, rendimento, documentação e prazos.</li><li>Converse com a coordenação sobre a possibilidade de aproveitar as disciplinas na sua graduação.</li></ol>
      ${link('https://internacional.ufpr.br/portal/editais/','Consultar editais de intercâmbio')}
      <p class="source">Fonte: Escritório de Relações Internacionais da UFPR. As condições dependem do edital vigente.</p>
    `),
    item('Currículo Lattes', `
      <p>O Currículo Lattes é um registro da trajetória acadêmica e científica, mantido pelo CNPq. Nele, você pode reunir sua formação, projetos, atividades de extensão, pesquisas, eventos e outras experiências acadêmicas.</p>
      <p><strong>Por que criar?</strong> O Lattes é frequentemente utilizado na seleção de bolsas, iniciação científica e outras oportunidades acadêmicas. Vale a pena começar no início da graduação, mesmo sem publicações, e atualizá-lo sempre que participar de novas atividades.</p>
      <h3>Como criar</h3>
      <ol><li>Acesse a Plataforma Lattes e escolha a opção de cadastrar um novo currículo.</li><li>Preencha seus dados acadêmicos e registre suas atividades reais.</li><li>Envie o currículo para publicação e atualize-o ao longo do curso.</li></ol>
      ${link('https://memoria.cnpq.br/web/portal-lattes/','Criar ou atualizar Currículo Lattes')}
      <p class="source">Fonte: CNPq — Plataforma Lattes.</p>
    `),
    item('Recursos e serviços da UFPR', `
      <p>Além das disciplinas, a UFPR mantém canais para orientar estudantes em dúvidas sobre matrícula, organização da graduação, estágios e apoio acadêmico. Saber onde procurar cada informação facilita a rotina universitária.</p>
      <ul>
        <li><strong>Orientação acadêmica:</strong> informações para planejar a trajetória no curso e esclarecer procedimentos.</li>
        <li><strong>Apoio ao discente:</strong> canais de orientação e serviços indicados pelo Bacharelado em Ciência da Computação.</li>
        <li><strong>Estágios:</strong> regras e passos administrativos para quem pretende estagiar durante a graduação.</li>
        <li><strong>Calendário acadêmico:</strong> datas importantes para acompanhar a vida universitária.</li>
      </ul>
      ${link('https://web.inf.ufpr.br/bcc/orientacao-academica/','Orientação acadêmica')}
      ${link('https://web.inf.ufpr.br/bcc/apoio-ao-discente/','Apoio ao discente')}
      ${link('https://web.inf.ufpr.br/bcc/fluxo-estagios/','Regras de estágio')}
      <p class="source">Fonte: Bacharelado em Ciência da Computação da UFPR.</p>
    `)
  ];

  window.guide = function () {
    return heading('Guia Acadêmico', 'Entenda oportunidades acadêmicas e encontre os caminhos para começar sua trajetória em Ciência da Computação na UFPR.') + `
      <div class="container guidegrid">
        <section class="panel"><h2>Explore os assuntos</h2>${guideTopics.join('')}</section>
        <aside aria-label="Links e orientação">
          <section class="panel"><h2>Atenção às fontes</h2><p class="fine">As explicações ajudam a começar. Para regras, prazos e inscrições, consulte sempre os canais oficiais.</p>${link('https://web.inf.ufpr.br/bcc/','Acessar página do curso')}</section>
          <section class="panel"><h2>Próximos passos</h2><p class="fine">Conheça também oportunidades e iniciativas de apoio.</p><a href="#vagas">Explorar vagas →</a><br><a href="#apoio">Conhecer redes de apoio →</a></section>
        </aside>
      </div>`;
  };

  const primary = [
    {
      icon:'⌘', tag:'Projeto do Departamento de Informática', title:'concat(Gurias)',
      description:'Projeto de extensão que incentiva a presença de meninas e mulheres na Computação. Já promoveu acolhimento de calouras, integração e grupos de estudo de programação.',
      participation:'acompanhe os avisos do projeto e entre em contato pelo perfil para saber sobre encontros e possibilidades de participação.',
      url:'https://www.instagram.com/concat.gurias/', button:'Ver como participar'
    },
    {
      icon:'&lt;/&gt;', tag:'Programação competitiva · UFPR foi sede em 2026', title:'Maratona Feminina de Programação',
      description:'Competição voltada a mulheres e meninas, com desafios de algoritmos e troca de experiências. A UFPR recebeu uma etapa local em maio de 2026.',
      participation:'as inscrições de 2026 terminaram. Consulte o site oficial para acompanhar as próximas edições e regras.',
      url:'https://mfp.ic.unicamp.br/', button:'Acompanhar próximas edições'
    },
    {
      icon:'✳', tag:'Mentoria · UFPR', title:'SWE UFPR — Mentorias',
      description:'Programa de mentoria entre mulheres de áreas como engenharia e tecnologia, com orientação acadêmica, carreira e fortalecimento de redes.',
      participation:'o ciclo de 2026 encerrou as inscrições em agosto. Acompanhe o perfil da SWE UFPR para verificar novos ciclos e critérios de participação.',
      url:'https://www.instagram.com/swe.ufpr/', button:'Acompanhar novas inscrições'
    }
  ];

  const related = [
    {
      icon:'✳', tag:'Rede de apoio · UFPR', title:'RedAME',
      description:'Projeto da UFPR voltado ao apoio e à permanência de mulheres e grupos minorizados em áreas STEAM, incluindo tecnologia e engenharia.',
      participation:'confira os editais de seleção e requisitos específicos para integrar as atividades ou concorrer a bolsas.',
      url:'https://gpcit.ufpr.br/?page_id=8665', button:'Consultar editais do projeto'
    },
    {
      icon:'↗', tag:'Divulgação científica · UFPR', title:'Meninas e Mulheres nas Ciências',
      description:'Projeto de divulgação científica que valoriza trajetórias de mulheres pesquisadoras e desenvolve atividades educativas com a comunidade.',
      participation:'consulte as ações e o contato da equipe; não foi identificado um formulário de inscrição permanente.',
      url:'https://laesb.ufpr.br/projetos/extensao/meninas-e-mulheres-nas-ciencias/', button:'Conhecer atividades e contato'
    }
  ];

  const externalProjects = [
    {tag:'Sociedade Brasileira de Computação',title:'Meninas Digitais',description:'Programa que reúne projetos e iniciativas para incentivar a participação feminina na Computação.',participation:'consulte os projetos parceiros e suas formas de contato.',url:'https://meninas.sbc.org.br/',button:'Conhecer projetos',icon:'⌘'},
    {tag:'Projeto parceiro',title:'Girls Power in Programming',description:'Iniciativa ligada ao estímulo à programação entre meninas e mulheres.',participation:'verifique ações e formas de participação divulgadas pelo projeto.',url:'https://meninas.sbc.org.br/projetos-parceiros/girls-power-in-programming/',button:'Consultar projeto',icon:'↗'},
    {tag:'Comunidade de tecnologia',title:'WoMakersCode',description:'Comunidade com conteúdos e iniciativas de aprendizagem e carreira em tecnologia para mulheres.',participation:'acesse o portal para conhecer programas e oportunidades divulgadas.',url:'https://www.womakerscode.org/en',button:'Acessar a comunidade',icon:'✳'},
    {tag:'Formação em tecnologia',title:'PrograMaria',description:'Iniciativa com cursos, conteúdos e ações de inclusão de mulheres na tecnologia.',participation:'confira no site os cursos e eventuais processos de inscrição.',url:'https://www.programaria.org/',button:'Ver cursos e inscrições',icon:'⌘'},
    {tag:'Rede internacional',title:'Women Techmakers Academy',description:'Plataforma de conteúdos e oportunidades para mulheres na área de tecnologia.',participation:'consulte a plataforma; algumas atividades podem exigir conta.',url:'https://womentechmakersonair.withgoogle.com/',button:'Consultar a plataforma',icon:'↗'}
  ];

  window.support = function () {
    return heading('Apoio às Mulheres', 'Conheça projetos ligados à UFPR e descubra como acompanhar atividades, encontros e seleções para mulheres na tecnologia.') + `
      <section class="section gray"><div class="container">
        <div class="sectiontitle"><h2>Mulheres na Computação</h2><p>Iniciativas que ajudam a conhecer pessoas, participar de atividades e desenvolver habilidades.</p></div>
        <div class="cards">${primary.map(supportCard).join('')}</div>
      </div></section>
      <section class="section"><div class="container">
        <div class="sectiontitle"><h2>Outros projetos da UFPR</h2><p>Redes de apoio e divulgação científica que também podem interessar às estudantes.</p></div>
        <div class="cards">${related.map(supportCard).join('')}</div>
      </div></section>
      <section class="section gray"><div class="container">
        <details class="accordion"><summary>Conhecer também iniciativas fora da UFPR</summary>
        <div class="inside"><p>Esses projetos oferecem outras possibilidades de formação, comunidade e contato com mulheres na tecnologia. Verifique os critérios diretamente em cada canal.</p>
        <div class="cards">${externalProjects.map(supportCard).join('')}</div></div></details>
        <p class="fine">As atividades podem mudar ao longo do ano. Os botões levam aos canais oficiais para consultar a forma de participação, sem indicar que há inscrição aberta.</p>
      </div></section>`;
  };

  // Se a pessoa entrar diretamente pelo link #guia ou #apoio, atualiza a tela exibida.
  if (location.hash === '#guia' || location.hash === '#apoio') {
    if (typeof window.route === 'function') window.route();
  }
}());
