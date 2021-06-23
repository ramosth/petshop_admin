import './estilos.css'
import CardFormulario from '../componentes/CardFormulario';
import Logo from '../componentes/Logo';
import imagemLogo from '../imagens/logo_petshop.png';
import http from '../http';
import { useState } from "react";

const FormProduto = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const efetuarCadastroProduto = (evento) => {
    evento.preventDefault();
    const produto = {
      nome: nome,
      preco: preco
    }

    // if (id) {
    //   http.put('produtos/' + id, produto)
    //     .then(response => {
    //       console.log(response);
  
    //     })
    //     .catch(erro => {
    //       console.log('Algo deu erro');
    //       console.log(erro);
    //     })
    // } else {
      http.post('produtos', produto)
        .then(response => {
          console.log(response);
          setNome('');
          setPreco('');
          alert('Produto cadastrado com sucesso!');
        })
        .catch(erro => {
          console.log('Algo deu erro');
          console.log(erro);
        })

    // }

  }

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <CardFormulario>
      <h1>Cadastrar novo produto</h1>
      <form className="formProduto" onSubmit={efetuarCadastroProduto}>
        <div>
          <label>Nome</label>
          <input required type="text" placeholder="Digite o novo produto" value={nome} onChange={(evento) => setNome(evento.target.value)} />
        </div>
        <div>
          <label>Preço</label>
          <input required type="number" value={preco} onChange={(evento) => setPreco(evento.target.value)} />
        </div>
        <button>Cadastrar</button>
      </form>
    </CardFormulario>
  </div>
  )
}

export default FormProduto;