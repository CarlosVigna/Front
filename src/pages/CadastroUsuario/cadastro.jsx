import { useEffect, useState } from "react";
import api from "../../services/api";
import './styleCadastro.css';

function CadastroUsuario() {
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
        <h1>Cadastro</h1>
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

export default CadastroUsuario;
