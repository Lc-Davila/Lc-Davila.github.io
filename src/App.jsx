import { useState } from 'react';

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <h1>Nima</h1>
          </div>
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
            <ul>
              <li><a href="#inicio" onClick={closeMenu}>Início</a></li>
              <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
              <li><a href="#problema" onClick={closeMenu}>Problema</a></li>
              <li><a href="#solucao" onClick={closeMenu}>Solução</a></li>
              <li><a href="#equipe" onClick={closeMenu}>Equipe</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* 4.1 Apresentação inicial */}
        <section id="inicio" className="hero section">
          <div className="container hero-content">
            <h2 className="hero-title">Nima</h2>
            <p className="hero-slogan">Conectando pets aos seus lares ideais com tecnologia e propósito.</p>
            <p className="hero-description">
              Um ecossistema completo de adoção que une lógica de compatibilidade comportamental, rastreamento NFC e hardware IoT para garantir o bem-estar animal.
            </p>
            <a href="#cta" className="btn btn-primary">Conheça o Projeto</a>
          </div>
        </section>

        {/* 4.2 Sobre o projeto */}
        <section id="sobre" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Sobre o Projeto</h2>
            <p className="section-text">
              O Nima é uma plataforma integrada de adoção de animais que vai além do match tradicional. Nascido da necessidade de modernizar e dar segurança ao processo de adoção, o sistema utiliza tecnologia para acompanhar o pet desde o abrigo até a adaptação em seu novo lar, oferecendo ferramentas tanto para ONGs quanto para adotantes.
            </p>
          </div>
        </section>

        {/* 4.3 Problema */}
        <section id="problema" className="section">
          <div className="container">
            <h2 className="section-title">O Problema</h2>
            <div className="content-grid">
              <div className="text-block">
                <p>
                  Milhares de animais são abandonados anualmente e enfrentam superlotação em abrigos. O processo de adoção muitas vezes falha por falta de alinhamento entre o perfil do animal e a rotina do adotante, resultando em devoluções traumáticas. Além disso, a perda de animais recém-adotados é uma dor constante para ONGs e tutores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.4 Solução */}
        <section id="solucao" className="section bg-light">
          <div className="container">
            <h2 className="section-title">A Solução</h2>
            <p className="section-text">
              Criamos um ecossistema que cruza dados comportamentais do pet com o estilo de vida do adotante. Após a adoção, o Nima oferece coleiras com rastreamento via NFC e integração com hardware IoT (ESP32) para monitoramento de rotina e segurança, garantindo que o pet esteja seguro e bem adaptado ao novo ambiente.
            </p>
          </div>
        </section>

        {/* 4.5 Público-alvo */}
        <section id="publico-alvo" className="section">
          <div className="container">
            <h2 className="section-title">Público-Alvo</h2>
            <ul className="target-list">
              <li><strong>ONGs e Protetores:</strong> Que precisam otimizar o processo de triagem e garantir adoções responsáveis.</li>
              <li><strong>Futuros Tutores:</strong> Pessoas que buscam um pet compatível com sua rotina e espaço.</li>
              <li><strong>Tutores Atuais:</strong> Que desejam ferramentas de monitoramento e segurança (NFC/IoT) para seus animais.</li>
            </ul>
          </div>
        </section>

        {/* 4.6 Funcionalidades */}
        <section id="funcionalidades" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Funcionalidades</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Match Comportamental</h3>
                <p>Algoritmo que cruza a rotina do usuário com as necessidades energéticas e espaciais do animal.</p>
              </div>
              <div className="card">
                <h3>Tags NFC</h3>
                <p>Coleiras inteligentes que armazenam o prontuário do pet e dados de contato do tutor atualizados em tempo real.</p>
              </div>
              <div className="card">
                <h3>Integração IoT</h3>
                <p>Módulos de monitoramento ambiental e alimentadores automatizados integrados ao aplicativo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.7 Equipe */}
        <section id="equipe" className="section">
          <div className="container">
            <h2 className="section-title">Equipe</h2>
            <div className="cards-grid">
              <div className="card team-card">
                <h3>Pedro Coltro</h3>
                <p>Desenvolvedor & IoT</p>
              </div>
              <div className="card team-card">
                <h3>Lucas D'Ávila</h3>
                <p>Desenvolvedor Backend & BD</p>
              </div>
              <div className="card team-card">
                <h3>Mylenna Ponciano</h3>
                <p>Desenvolvedora Frontend & UI/UX</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4.8 Tecnologias */}
        <section id="tecnologias" className="section bg-light">
          <div className="container">
            <h2 className="section-title">Tecnologias Utilizadas</h2>
            <ul className="tech-list">
              <li>JavaScript, Node.js e React Native</li>
              <li>Supabase & SQL (Banco de Dados)</li>
              <li>C/C++ (Programação do ESP32 para IoT)</li>
              <li>React (Landing Page com Vite)</li>
            </ul>
          </div>
        </section>

        {/* 4.9 Chamada para ação */}
        <section id="cta" className="section cta-section">
          <div className="container">
            <h2>Faça parte dessa transformação</h2>
            <p>Explore nosso repositório ou entre em contato para saber mais sobre o hardware e o aplicativo.</p>
            <a href="https://github.com/SEU_USUARIO/SEU_USUARIO.github.io" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Acessar Repositório
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <p>&copy; 2026 Projeto Nima. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default App;