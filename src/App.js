import axios from 'axios';
import React, {useState } from 'react';
import './App.css';


const  App = () => {

  const [dados, setDados] = useState([]);
  const [user, setUser] = useState();

  function buscarUsuario(){

    axios.get(`https://api.github.com/users/${user}/repos`)

    .then((res)=>{
      setDados(res.data)
    })
    
    .catch((err)=>{
      alert(`Ops! Usuário não encontrato :( `)
    })

  }

  function submeterForm(event){
    event.preventDefault()
  }

  return (
    
    <div className="App">
      


      <header><h1>Consumindo API do GitHub</h1></header>

      <form onSubmit={submeterForm}>
      

        <input 
          placeholder="Digite um usuário"
          onChange={e => setUser(e.target.value)}
        />

        <button onClick={buscarUsuario}>Buscar</button>

      </form>

      <div className="dados">

        {

          dados.map((dado, index)=>(

            <section key={index} className="container">
              
                <ul className="listas">
                  <li>Nome do Repositório: {dado.name}</li>
                  <li>ID do Repositório: {dado.id}</li>
                  <li>Descrição do Projeto: {dado.description}</li>
                  <li>Linguagem Principal: {dado.language}</li>
                </ul>
            
            </section>
          ))
        }

      </div>
    
      
    </div>

  );

}
export default App;
