import './estilos.css'
import { Link } from 'react-router-dom'

const Card = (props) => {

  const excluir = () => {
    props.excluirItem(props.id)
  }

  return <div className="card">
    <p>
      {props.nome} - <strong>{props.preco}</strong>
    </p>
    <p>
    <Link className="link" to={`/${props.url}/${props.id}`}>Ver detalhes</Link>
    {/* <Link className="link" to={`/${props.url}/${props.id}`}>Editar</Link> */}
    <Link className="link" onClick={excluir} to={`/${props.url}`}>Excluir</Link>
    </p>
  </div>
}

export default Card;