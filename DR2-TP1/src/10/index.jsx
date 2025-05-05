// Exercício 10: Crie uma aplicação React que declare uma função para
// calcular a soma de dois números e exiba o resultado na página.

const Exc10 = () => {
  const somarDoisNum = (n1, n2) => {
    return `O resultado da soma de ${n1} + ${n2} é igual a ${n1 + n2}`;
  };

  return (
    <div className="Exc10">
      <h2>Soma:</h2>
      <p>{somarDoisNum(3, 5)}</p>
    </div>
  );
};

export default Exc10;
