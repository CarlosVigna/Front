import React, { useEffect, useState } from 'react';
import './styleContas.css';

const URL = "http://localhost:8080";

function ExibeContas() {
  // Estado pra armazenar contas e usuários
  const [contas, setContas] = useState([]);
  const [usuarios, setUsuarios] = useState({});

  // Função de buscar contas
  async function getContas() {
    const response = await fetch(URL + "/contas");
    const data = await response.json();
    setContas(data); // Atualiza o estado com as contas 

    // Para cada conta, busque os usuários associados
    data.forEach(async (conta) => {
      const userResponse = await fetch(URL + `/contas/${conta.id}/usuarios`);
      const userData = await userResponse.json();
      setUsuarios((prev) => ({
        ...prev,
        [conta.id]: userData
      }));
    });
  }

  // Chama a função quando o componente for montado
  useEffect(() => {
    getContas();
  }, []);

  // Exibe as informações
  return (
    <div className="contas-container">
      <h1>Contas</h1>
      {contas.length > 0 ? (
        contas.map((conta) => (
          <div key={conta.id} className="card">
            <div>
              <p>Usuário: <span>{conta.nome}</span></p>
              <p>Saldo: <span>{conta.saldo}</span></p>
              <div>
                <h4>Usuários Associados:</h4>
                {usuarios[conta.id] ? (
                  usuarios[conta.id].map((usuario) => (
                    <p key={usuario.id}>{usuario.nome}</p>
                  ))
                ) : (
                  <p>Carregando usuários...</p>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando contas...</p>
      )}
    </div>
  );
}

export default ExibeContas;
