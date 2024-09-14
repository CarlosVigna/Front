import React from 'react';
import './styleContas.css'; // Certifique-se de que o caminho está correto

function Contas() {
  return (

    <div className='container'>
        <h1>Listagem de Contas</h1>
      <div className='cards-container'>
        <div className='card'>
        <h1>CONTA USUARIO 01</h1>
          <div>
            <p>Administrador: <span>USUARIO 01</span></p>
          </div>
        
          <button className="buttonContas">Entrar</button>
        </div>
        
        <div className='card'>
        <h1>CONTA FML</h1>
          <div>
            <p>Administrador: <span>USUARIO 01</span></p>
            <p>Usuário: <span>USUARIO 02</span></p>
          </div>
          <button className="buttonContas">Entrar</button>
        </div>
        <div className='card'>
        <h1>NOME DA CONTA</h1>
          <div>
            <p>Email: <span>example2@example.com</span></p>
            <p>Senha: <span>password2</span></p>
          </div>
          <button className="buttonContas">Entrar</button>
        </div>

        {/* {contas.map((conta) => (
        <div key={conta.id} className="card">
          <div>
            <p>Usuário: <span>{conta.usuario?}</span></p>
          </div>
          <button className="button">Entrar</button>
        </div> */}

        <div className='card'>
        <h1>NOME DA CONTA</h1>
          <div>
            <p>Email: <span>example2@example.com</span></p>
            <p>Senha: <span>password2</span></p>
          </div>
          
          <button className="buttonContas">Entrar</button>
          
        </div>
        <div className='card'>
        <h1>NOME DA CONTA</h1>
          <div>
            <p>Email: <span>example2@example.com</span></p>
            <p>Senha: <span>password2</span></p>
          </div>
          
          <button className="buttonContas">Entrar</button>
          
        </div>
        {/* Adicione mais cartões conforme necessário */}
      </div>
    </div>
  );
}

export default Contas;
