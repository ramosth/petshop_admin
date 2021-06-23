import './estilos.css'
import CardFormulario from '../componentes/CardFormulario'
import Logo from '../componentes/Logo';
import imagemLogo from '../imagens/logo_petshop.png';
import http from '../http';
import { useState } from "react";

const Login = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const efetuarLogin = (evento) => {
    evento.preventDefault();
    const usuario = {
      email: email,
      senha: senha
    }
    http.post('auth/login', usuario)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.access_token)
      })
      .catch(erro => {
        console.log('Algo deu erro');
        console.log(erro);
      })
  }

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <CardFormulario>
      <h1>Página de Login</h1>
      <form className="formLogin" onSubmit={efetuarLogin}>
        <div>
          <label>Email</label>
          <input required type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
        </div>
        <div>
          <label>Senha</label>
          <input required type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
        </div>
        <button>Login</button>
      </form>
    </CardFormulario>
  </div>
  )
}

export default Login;