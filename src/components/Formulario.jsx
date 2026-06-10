import { useState } from "react";

function Formulario({ adicionarTarefa }) {
  const [titulo, setTitulo] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [data, setData] = useState("");

  const salvar = () => {
    if (!titulo || !disciplina || !data) {
      alert("Preencha todos os campos!");
      return;
    }

    adicionarTarefa({
      id: Date.now(),
      titulo,
      disciplina,
      data,
      concluida: false,
    });

    setTitulo("");
    setDisciplina("");
    setData("");
  };

  return (
    <div className="formulario">
      <input
        type="text"
        placeholder="Título da tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Disciplina"
        value={disciplina}
        onChange={(e) => setDisciplina(e.target.value)}
      />

      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={salvar}>
        Adicionar
      </button>
    </div>
  );
}

export default Formulario;