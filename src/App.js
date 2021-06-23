import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Produtos from './paginas/Produtos'
import Produto from './paginas/Produto';
import Servicos from './paginas/Servicos'
import Navbar from './paginas/componentes/Navbar';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import FormProduto from './paginas/FormProduto';

function App() {

  const menu = [
    {
      titulo: 'Produtos',
      link: '/produtos'
    },
    {
      titulo: 'Servicos',
      link: '/servicos'
    },
    {
      titulo: 'Cadastre-se',
      link: '/cadastro'
    },
    {
      titulo: 'Login',
      link: '/login'
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbar={menu} />
        <Switch>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route exact path="/produtos/cadastrar">
            <FormProduto />
          </Route>
          <Route path="/produtos/:id">
            <Produto />
          </Route>
          <Route exact path="/servicos">
            <Servicos />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
