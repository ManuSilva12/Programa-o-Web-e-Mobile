import JogoForca from "../components/jogo-forca";

export default function Home() {
  const projetosGit = [
    {
      nome: "Projetos Web & Mobile",
      descricao: "Um repositório onde organizo meus estudos práticos de desenvolvimento. Contém desde páginas responsivas feitas com HTML e CSS até aplicações mais estruturadas utilizando React e conceitos de mobile.",
      link: "https://github.com/ManuSilva12/Programa-o-Web-e-Mobile",
      stack: ["HTML/CSS", "JavaScript", "React Native"],
      destaque: true 
    },
    {
      nome: "Stonks Viewer",
      descricao: "Visualizador de dados financeiros que utiliza APIs de mercado para exibir cotações em tempo real. O objetivo foi criar uma interface simples e funcional para o acompanhamento de ações.",
      link: "https://github.com/LucasMN0/stonks-viewer",
      stack: ["React", "APIs", "Finance"]
    },
    {
      nome: "Receitas Plus",
      descricao: "Projeto focado em interface e experiência do usuário. Trabalhei na escolha da paleta de cores, acessibilidade e no fluxo de navegação para tornar o uso do app intuitivo.",
      link: "https://github.com/manuela-silva/receitas-plus",
      stack: ["Next.js", "Tailwind", "UI/UX"]
    },
    {
      nome: "E-commerce Backend",
      descricao: "Desenvolvimento da estrutura de banco de dados para um e-commerce. Implementei a lógica de automação e regras de negócio usando MySQL e integração com Python.",
      link: "https://github.com/manuela-silva/ecommerce-sql",
      stack: ["Python", "MySQL", "Backend"]
    },
    {
      nome: "Estrutura AVL Tree",
      descricao: "Implementação de uma árvore binária de busca balanceada em Java. Um projeto focado em entender como o balanceamento de dados impacta a performance de algoritmos.",
      link: "https://github.com/manuela-silva/avl-tree",
      stack: ["Java", "Algoritmos", "Lógica"]
    }
  ];

  const atividadesExtra = [
    {
      nome: "ColaBora",
      descricao: "Projeto de extensão que promove oficinas de tecnologia para meninas do ensino médio em escolas públicas, incentivando a entrada de mais mulheres na área."
    },
    {
      nome: "SWITAB",
      descricao: "Mentoria focada em estudantes de cursos de exatas (STEAM). Atuo no apoio às alunas dos primeiros períodos para auxiliar na retenção e networking."
    },
    {
      nome: "Technovation for Girls",
      descricao: "Atuei como mentora de equipes de ensino médio para essa competição global, orientando o desenvolvimento de aplicativos voltados para problemas sociais."
    },
    {
      nome: "Programa Padawan",
      descricao: "Apoio acadêmico para novos alunos de Ciência da Computação, auxiliando na adaptação às matérias e na organização da rotina de estudos no início do curso."
    },
    {
      nome: "Mentoria Avanade",
      descricao: "Participação em programa de mentoria com profissionais da área para entender as dinâmicas do mercado de trabalho e planejamento de carreira em TI."
    }
  ];

  const linguagens = ["Java", "Python", "SQL", "C", "React", "Next.js", "Git"];

  return (
    <main className="min-h-screen bg-[#fcfcfd] text-slate-800 font-sans">
      
      <header className="max-w-5xl mx-auto pt-32 pb-20 px-6 text-center">
        <h1 className="text-5xl font-light text-slate-900 tracking-tight mb-2">
          Manuela <span className="font-bold text-pink-600">Silva</span>
        </h1>
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400 font-semibold mb-8">
          Ciência da Computação — 5º Período
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {linguagens.map(item => (
            <span key={item} className="px-3 py-1 bg-white border border-slate-100 rounded text-[10px] font-bold text-slate-500 shadow-sm uppercase">
              {item}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        
        <div className="lg:col-span-7 space-y-24">
          
          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] font-black text-pink-600 mb-6 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-pink-200"></span> Sobre mim
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm">
              Sou estudante de Ciência da Computação com interesse em desenvolvimento de software e ciência de dados. 
              Além da parte técnica, participo ativamente de projetos de mentoria e iniciativas que buscam 
              fortalecer a presença feminina na tecnologia.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] font-black text-pink-600 mb-10 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-pink-200"></span> Projetos
            </h2>
            <div className="space-y-16">
              {projetosGit.map((p, i) => (
                <div key={i} className={`group relative p-6 rounded-2xl transition duration-300 ${p.destaque ? 'bg-pink-50/50 border border-pink-100' : ''}`}>
                  {p.destaque && (
                    <span className="text-[9px] font-black text-pink-500 uppercase tracking-widest mb-2 block italic">Repositório Principal</span>
                  )}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition duration-300">
                    {p.nome}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-prose">
                    {p.descricao}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-2">
                      {p.stack.map(s => (
                        <span key={s} className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">
                          #{s}
                        </span>
                      ))}
                    </div>
                    <a href={p.link} target="_blank" className="text-[10px] font-black text-slate-900 border-b-2 border-pink-200 pb-0.5 hover:border-pink-600 transition">
                      VER NO GITHUB
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] font-black text-pink-600 mb-8 flex items-center gap-3">
              <span className="w-10 h-[1px] bg-pink-200"></span> Atividades Extracurriculares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {atividadesExtra.map((a, i) => (
                <div key={i} className="border-l border-slate-100 pl-4">
                  <h4 className="text-sm font-bold text-slate-800">{a.nome}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{a.descricao}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-12 space-y-8">
            <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Espaço Interativo</span>
              </div>
              <div className="p-6">
                <p className="text-[10px] text-slate-400 text-center mb-6 uppercase font-bold tracking-widest">Jogo da Forca</p>
                <JogoForca />
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-slate-900 text-white space-y-6 shadow-xl">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-400">Contato</h4>
              <div className="space-y-4">
                <div className="group">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">E-mail</p>
                  <p className="text-sm font-light break-all text-slate-200">manuelasilveirasilva@gmail.com</p>
                </div>
                <div className="group">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/manuela-silva-322511306" target="_blank" className="text-sm font-light text-white hover:text-pink-400 transition break-all underline decoration-slate-700">
                    linkedin.com/in/manuela-silva-322511306
                  </a>
                </div>
                <div className="group">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">GitHub</p>
                  <a href="https://github.com/ManuSilva12" target="_blank" className="text-sm font-bold text-pink-400 hover:text-white transition">
                    github.com/ManuSilva12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}