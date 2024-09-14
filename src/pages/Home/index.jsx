import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Trash from '../../assets/16qg.svg';
import api from "../../services/api";
import './style.css';

function Home() {
  const [usuarios, setUsuarios] = useState([]); 

  async function getUsuarios() {
    try {
      const response = await api.get('/usuarios');
      setUsuarios(response.data);  
    } catch (error) {
      console.error('Erro ao buscar usuários', error);  
    }
  }

  useEffect(() => {
    getUsuarios();  
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Login</h1>
        
        <input placeholder="Email" name='email' type='email' />
        <input placeholder="Senha" name='senha' type='text' />

        <Link to="/contas">
        <button className="button">Entrar</button>
        </Link>
        <Link to="/cadastro">
        <button className="button">Cadastrar</button>
        </Link>
        
      </form>

      {usuarios.map((usuario) => (
        <div key={usuario.id} className="card">
          <div>
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
