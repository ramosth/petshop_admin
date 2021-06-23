import Card from './componentes/Card';
import Logo from './componentes/Logo';
import imagemLogo from './imagens/logo_petshop.png';
import { useState, useEffect } from 'react';
import http from '../paginas/http'

const Servicos = () => {

  const logo = {
    src: imagemLogo,
    alt: 'imagem da logo do petshop',
    titulo: 'Petshop Serratec'
  };

  const [servicos, setServicos] = useState([]);

  const obterServicos = () => {
    http.get('http://localhost:8000/servicos')
      .then(response => {
        setServicos(response.data);
      }).catch(erro => console.log(erro))
  }

  useEffect(() => {
    obterServicos();
  }, [])

  return (<div>
    <Logo src={logo.src} alt={logo.alt} titulo={logo.titulo} />
    <h1>Serviços</h1>
    {servicos.map((item) =>
      <Card key={item.id} id={item.id} nome={item.nome} preco={item.preco} url={'servicos'}
      />
    )}
  </div>

  )

}

export default Servicos;