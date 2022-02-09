import './App.css';
import './layout.css';
import Pesquisa from './components/Pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container-logo">
          <span className="logo-item">Otakus</span>
          <span className="logo-item">Tech</span>
        </div>
        <nav className="nav">
          <a className="nav-item" href="#">Cadastrar Anime</a>
          <a className="nav-item" href="#">Perfil</a>
          <a className="nav-item" href="#">Login</a>
          <a className="nav-item" href="#">Cadastre-se</a>
        </nav>

        <Pesquisa className="pesquisa"/>
        
      </header>
      <main className="main">
        
      </main>
      <div className="filter">
      
      </div>
      <aside className="aside">
        
      </aside>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;
