// Exercício 15: Crie uma aplicação React que utilize state para gerenciar
// um contador simples que pode ser incrementado e decrementado com botões.
import { useState } from "react";

const Exc15 = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="Exc15">
      <p>Contador de Clicks: {contador}</p>
      <button type="subimit" onClick={() => setContador(contador + 1)}>
        Click aqui
      </button>
    </div>
  );
};

export default Exc15;
