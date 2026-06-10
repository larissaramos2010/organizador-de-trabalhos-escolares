
function CardAtividade({
  tarefa,
  concluirTarefa,
  excluirTarefa,
}) {
  return (
    <div
      className={
        tarefa.concluida
          ? "card concluida"
          : "card"
      }
    >
      <h3>{tarefa.titulo}</h3>

      <p>{tarefa.disciplina}</p>

      <p>{tarefa.data}</p>

      <button
        onClick={() =>
          concluirTarefa(tarefa.id)
        }
      >
        {tarefa.concluida
          ? "Desfazer"
          : "Concluir"}
      </button>

      <button
        onClick={() =>
          excluirTarefa(tarefa.id)
        }
      >
        Excluir
      </button>
    </div>
  );
}

export default CardAtividade;