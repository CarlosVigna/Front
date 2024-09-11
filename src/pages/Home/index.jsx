import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import './style.css';
import Trash from '../../assets/16qg.svg';
import api from "../../services/api";

function Home() {
  const [usuarios, setUsuarios] = useState([]);  // Inicialize o estado para os usuários

  async function getUsuarios() {
    try {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);  // Atualize o estado com os dados recebidos da API
    } catch (error) {
      console.error('Erro ao buscar usuários', error);  // Capture e mostre o erro, se houver
    }
  }

  useEffect(() => {
    getUsuarios();  // Chama a função para buscar os usuários quando o componente é montado
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name='nome' type='text' />
        <input placeholder="Email" name='email' type='email' />
        <input placeholder="Senha" name='senha' type='text' />
        <button type='button'>Cadastrar</button>
      </form>

      {usuarios.map((usuario) => (
        <div key={usuario.id} className="card">
          <div>
            <p>Nome: <span>{usuario.nome}</span></p>
            <p>Email: <span>{usuario.email}</span></p>
            <p>Senha: <span>{usuario.senha}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Excluir" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
