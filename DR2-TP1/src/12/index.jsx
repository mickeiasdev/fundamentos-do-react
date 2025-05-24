// Exercício 12: Crie uma aplicação React que utilize uma Arrow Function
// para calcular a diferença entre dois números e exiba o resultado na página.

const Exc12 = () => {
  const diferenca = (n1, n2) => {
    return `A diferenca entre ${n1} e ${n2} é igual a ${Math.abs(n1 - n2)}`;
  };

  return (
    <div className="Exc12">
      <h2>Diferença:</h2>
      <p>{diferenca(3, 5)}</p>
    </div>
  );
};

export default Exc12;
