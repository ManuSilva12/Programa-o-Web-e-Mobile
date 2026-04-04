import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Manuela Silva | Portfólio",
  description: "Portfólio de Manuela Silva, estudante de Ciência da Computação focada em desenvolvimento Full Stack e UI/UX.",
};

export default function Home() {
  const projetos = [
    {
      nome: "Projetos Web & Mobile",
      descricao: "Um repositório onde organizo meus estudos práticos de desenvolvimento da disciplina de Programação Web e Mobile. Contém desde páginas responsivas feitas com HTML e CSS até aplicações mais estruturadas utilizando React e conceitos de mobile.",
      link: "https://github.com/ManuSilva12/Programa-o-Web-e-Mobile",
      stack: ["HTML/CSS", "JavaScript", "React Native"],
      destaque: true
    },
    {
      nome: "Algoritmos: AVL Tree",
      descricao: "Implementação de uma árvore de busca binária auto-balanceada em Java. O projeto inclui lógica de rotações, inserção e remoção, além de documentação técnica via Javadoc.",
      link: "https://github.com/c3-disciplina-aod/2025-2-minf-0402-implementacao-avl-ManuSilva12",
      stack: ["Java", "Estrutura de Dados", "Algoritmos"],
      destaque: true
    },
    {
      nome: "E-commerce Backend",
      descricao: "Desenvolvimento da estrutura de banco de dados para um e-commerce. Implementei a lógica de automação e regras de negócio usando MySQL e integração com Python.",
      link: "https://github.com/ManuSilva12/Ecommerce",
      stack: ["Python", "MySQL", "Backend"]
    },
    {
      nome: "Análise de Infraestrutura Escolar",
      descricao: "Projeto de análise estatística comparando a quantidade de computadores em escolas urbanas vs. rurais através de testes de hipóteses e análise descritiva.",
      stack: ["Estatística", "Python", "Data Science"]
    },
    {
      nome: "Otto DIY & Robotics",
      descricao: "Montagem e programação de robôs quadrúpedes baseados em Arduino, integrando hardware e lógica de movimentação em C++.",
      stack: ["Arduino", "C++", "Robótica"]
    },
    {
      nome: "Receitas Plus",
      descricao: "Projeto desenvolvido para a disciplina de Design, com foco total em experiência do usuário. Como o objetivo era validar a interface, criei um protótipo navegável no Figma para testar o fluxo e a identidade visual.",
      figma: "https://www.figma.com/design/n71BhQocDG0fG5h8LOOoZm/Sem-t%C3%ADtulo?t=Hk6lcB84STSAqC35-1",
      stack: ["UX/UI", "Prototipagem", "Figma"]
    }
  ];

  const atividadesExtra = [
    { nome: "ColaBora", descricao: "Projeto de extensão que promove oficinas de tecnologia para meninas do ensino médio em escolas públicas." },
    { nome: "SWITAB", descricao: "Mentoria focada em estudantes de cursos de exatas (STEAM) para auxiliar na retenção e networking." },
    { nome: "Technovation for Girls", descricao: "Mentoria de equipes de ensino médio para o desenvolvimento de apps voltados para problemas sociais." },
    { nome: "Programa Padawan", descricao: "Apoio acadêmico para novos alunos de Ciência da Computação, auxiliando na adaptação às matérias." },
    { nome: "Mentoria Avanade", descricao: "Programa com profissionais da área para entender as dinâmicas do mercado e planejamento de carreira." }
  ];

  const linguagens = ["Java", "Python", "SQL", "C", "React", "Next.js", "Git"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-100 selection:text-pink-600 scroll-smooth">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-[100] border-b border-slate-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-600">Manuela Silva</span>
          <div className="flex gap-6 md:gap-10">
            <a href="#sobre" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-pink-600 transition-colors">Sobre</a>
            <a href="#habilidades" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-pink-600 transition-colors">Skills</a>
            <a href="#projetos" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-pink-600 transition-colors">Projetos</a>
            <Link href="/jogo" className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-pink-600 hover:text-slate-900 transition-colors">Jogar Forca</Link>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto pt-32 pb-16 px-6 border-b border-slate-200/60 bg-slate-50">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
            <Image src="/IMG_9995.jpeg" alt="Foto de Manuela Silva" width={120} height={120} className="object-cover w-28 h-28 md:w-32 md:h-32" priority />
          </div>
          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-2">Manuela <span className="font-bold text-pink-600">Silva</span></h1>
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-slate-400 font-bold mb-6">Bacharelado Ciência da Computação — 5º Período</p>
            <div className="flex flex-wrap gap-2">
              {linguagens.map(item => (
                <span key={item} className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-wider shadow-sm">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 py-12 lg:py-20">
        <div className="lg:col-span-8 space-y-20 lg:space-y-24">
          <section id="sobre" className="scroll-mt-32">
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-pink-600 mb-6 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-pink-600"></span> Sobre mim
            </h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-3xl">
              Sou estudante de Ciência da Computação focada em construir soluções que unem <strong> lógica robusta</strong> e <strong>design intuitivo</strong>. Acredito no poder da comunidade e dedico parte do meu tempo a mentorias que incentivam a presença feminina na tecnologia.
            </p>
          </section>

          <section id="habilidades" className="scroll-mt-32">
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-pink-600 mb-8 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-pink-600"></span> Habilidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Tech Stack</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Desenvolvimento com <strong>React e Next.js</strong></span></li>
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Modelagem e consultas <strong>SQL (MySQL)</strong></span></li>
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Automação e lógica com <strong>Python e Java</strong></span></li>
                </ul>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">Design & People</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Prototipagem de interface no <strong>Figma</strong></span></li>
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Mentoria técnica e liderança de times</span></li>
                  <li className="flex items-start gap-3"><span className="text-pink-500 mt-0.5">/</span><span>Comunicação para projetos de impacto social</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projetos" className="scroll-mt-32">
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-pink-600 mb-10 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-pink-600"></span> Projetos
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {projetos.map((p, i) => (
                <div key={i} className="group bg-white p-8 md:p-10 rounded-3xl border border-slate-100 hover:border-pink-100 transition-all duration-300 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-pink-600 mb-4">{p.nome}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base">{p.descricao}</p>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-6 border-t border-slate-50">
                    <div className="flex flex-wrap gap-2.5">
                      {p.stack.map(s => <span key={s} className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">#{s}</span>)}
                      {p.destaque && <span className="px-2 py-0.5 bg-pink-50 text-pink-600 text-[8px] font-black uppercase rounded tracking-wider">Destaque</span>}
                    </div>
                    <div className="flex gap-6 sm:ml-auto">
                      {p.link && <a href={p.link} target="_blank" className="text-[10px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-100 hover:border-pink-600 transition-all">GitHub</a>}
                      {p.figma && <a href={p.figma} target="_blank" className="text-[10px] font-black text-pink-600 uppercase tracking-widest border-b-2 border-pink-50 hover:border-pink-600 transition-all">Figma</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="extra" className="scroll-mt-32">
            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-pink-600 mb-8 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-pink-600"></span> Extracurriculares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {atividadesExtra.map((a, i) => (
                <div key={i} className="p-4 border-l-2 border-slate-100 hover:border-pink-500 transition-colors">
                  <h4 className="text-sm font-bold text-slate-800 mb-1.5">{a.nome}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{a.descricao}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500 mb-8 z-10 relative">Projeto Interativo</h4>
              <p className="text-xs text-slate-400 mb-6 relative z-10">Desenvolvi um Jogo da Forca para demonstrar manipulação de estados e lógica em React.</p>
              <Link href="/jogo" className="relative z-10 block w-full py-4 bg-pink-600 text-center rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-pink-600 transition-all shadow-lg">Abrir Jogo da Forca</Link>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Contato</h4>
              <div className="space-y-6">
                <div><p className="text-[9px] font-bold text-slate-500 uppercase mb-1.5">E-mail</p><p className="text-sm font-light break-all text-slate-800">manuelasilveirasilva@gmail.com</p></div>
                <div><p className="text-[9px] font-bold text-slate-500 uppercase mb-1.5">Social</p>
                <div className="flex flex-col gap-3.5">
                  <a href="https://www.linkedin.com/in/manuela-silva-322511306" target="_blank" className="text-sm text-pink-600 hover:text-slate-900 transition-colors">LinkedIn</a>
                  <a href="https://github.com/ManuSilva12" target="_blank" className="text-sm text-pink-600 hover:text-slate-900 transition-colors">GitHub</a>
                </div></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}