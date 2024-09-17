import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import './style.css';


  const openPopup = () => {    
    const width = 1000;
    const height = 800;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2; 

    window.open(
      '/cadastro',
      '_blank',
      `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`,
    );
  };

  function Home() {
  return (
    <div className='container'>
      <form>
        <h1>Login</h1>
        
        <input className="input" placeholder="Email" name='email' type='email' />
        <input className="input" placeholder="Senha" name='senha' type='text' />

        <Link to="/contas">
        <button className="button">Entrar</button>
        </Link>
        
        <button type='button' onClick= {openPopup} className="button">Cadastrar</button>
                
      </form>

      {/* {usuarios.map((usuario) => (
        <div key={usuario.id} className="card">
          <div>
            <p>Email: <span>{usuario.email}</span></p>
            <p>Senha: <span>{usuario.senha}</span></p>
          </div>
          
        </div>
      ))} */}
    </div>
  );
}
  
export default Home;
