import { useEffect, useState } from "react";
import './styleCadastro.css';
import { Link } from 'react-router-dom';

const URL = "http://localhost:8080";

// Função para buscar os usuários
async function getUsuarios() {
  const response = await fetch(URL + "/usuarios");
  const data = await response.json();
  console.log(data); // Exibe a resposta no console
  return data;
}

// Função para cadastrar um novo usuário
async function cadastrarUsuario(usuario) {
  const response = await fetch(URL + "/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
  const data = await response.json();
  console.log("Usuário cadastrado:", data); // Exibe a resposta no console
  return data;
}

function CadastroUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const usuariosData = await getUsuarios();
  //     setUsuarios(usuariosData);
  //   }
  //   fetchData();
  // }, []);

  // Função para lidar com o clique no botão "Cadastrar"
  const handleCadastro = async () => {
    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem!");
      return;
    }

    const novoUsuario = { nome, email, senha };
    await cadastrarUsuario(novoUsuario);

    // Atualiza a lista de usuários após o cadastro
    // const usuariosAtualizados = await getUsuarios();
    // setUsuarios(usuariosAtualizados);

    // Limpa os campos do formulário após o cadastro
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
    setErro("");
  };

    const closePopup = () => {
      window.close();
    };

  return (
    <div className='container'>
      <form>
        <h1>Cadastro</h1>
        <input
          placeholder="Nome"
          name='nome'
          type='text'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder="Email"
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Senha"
          name='senha'
          type='password'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          placeholder="Confirmar Senha"
          name='confirmarSenha'
          type='password'
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>} {/* Mostra o erro se as senhas não coincidirem */}
        <button type='button' onClick={handleCadastro}>Cadastrar</button>
        <Link to="/">
        <button onClick={closePopup} className="button">Voltar</button>
        </Link>
        
      </form>

      {/* 
      Código comentado: Lista os usuários cadastrados
      {usuarios.map((usuario) => (
        <div key={usuario.id} className="card">
          <div>
            <p>Nome: <span>{usuario.nome}</span></p>
            <p>Email: <span>{usuario.email}</span></p>
            <p>Senha: <span>{usuario.senha}</span></p>
          </div>
        </div>
      ))} 
      */}
    </div>
  );
}

export default CadastroUsuario;
