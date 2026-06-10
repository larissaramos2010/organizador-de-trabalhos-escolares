import CardAtividade from "./CardAtividade";

function ListaAtividade({
  tarefas,
  concluirTarefa,
  excluirTarefa,
}) {
  return (
    <div className="lista">
      {tarefas.map((tarefa) => (
        <CardAtividade
          key={tarefa.id}
          tarefa={tarefa}
          concluirTarefa={concluirTarefa}
          excluirTarefa={excluirTarefa}
        />
      ))}
    </div>
  );
}

export default ListaAtividade;