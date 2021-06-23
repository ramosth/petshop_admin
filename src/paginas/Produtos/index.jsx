import './estilos.css'
// import Card from '../componentes/Card';
import Logo from '../componentes/Logo';
import imagemLogo from '../imagens/logo_petshop.png';
import { useState, useEffect } from 'react';
import http from '../http'
import { Link } from 'react-router-dom'
// import { Link, useParams } from 'react-router-dom'

const Produtos = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  // const { id } = useParams();
  const [produtos, setProdutos] = useState([]);

  const obterProdutos = () => {
    http.get('produtos')
      .then(response => {
        setProdutos(response.data);
      }).catch(erro => console.log(erro))
  }

  useEffect(() => {
    obterProdutos();
  }, [])
  
  const removerProduto = (id) => {
    http.delete('produtos/' + id)
      .then(() => {
        obterProdutos();
      })
  }

  const editarProduto = (id) => {
    console.log(id);
  }

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <h1 className="titulo">Produtos</h1>
    <Link className="addNovoProduto" to='/produtos/cadastrar'>Adicionar novo produto</Link>
    <div className="fundoTabela">
    <table className="tabela">
      <thead>
        <tr>
          <th>Produtos</th>
          <th>Preço</th>
          <th>Visualizar</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((item) => 
          <tr key={item.id}>
            <td>{item.nome}</td>
            <td>R$ {item.preco}</td>
            <td><Link className="btnVisualizar" to={`/produtos/${item.id}`}>Ver detalhes</Link></td>
            <td><button className="btnEditar" onClick={() => {editarProduto(item.id)}}>Editar</button></td>
            <td><button className="btnExcluir" onClick={() => {removerProduto(item.id)}}>Excluir</button></td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    {/* {produtos.map((item) =>
      <Card key={item.id} id={item.id} nome={item.nome} preco={item.preco} url={'produtos'} excluirItem={removerProduto} />
    )} */}
  </div>

  )

}

export default Produtos;