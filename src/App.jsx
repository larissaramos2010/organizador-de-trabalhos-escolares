import { useState } from "react";
import Formulario from "./components/Formulario";
import ListaAtividade from "./components/ListaAtividade.jsx";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const excluirTarefa = (id) => {
    setTarefas(
      tarefas.filter((tarefa) => tarefa.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>Não Era Pra Ontem?</h1>

      <Formulario adicionarTarefa={adicionarTarefa} />

      <ListaAtividade
        tarefas={tarefas}
        concluirTarefa={concluirTarefa}
        excluirTarefa={excluirTarefa}
      />
    </div>
  );
}

export default App;