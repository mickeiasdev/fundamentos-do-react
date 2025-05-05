// Exercício 13: Crie uma aplicação React que utilize uma Arrow Function para
// verificar se um número é par ou ímpar e exiba o resultado na página.

const Exc13 = () => {
  const parImpar = (num) => {
    return num % 2 === 0
      ? `O numero ${num} é "Par"`
      : `O numero ${num} é "Impar"`;
  };

  return (
    <div className="Exc13">
      <h2>Par ou Impar</h2>
      <p>{parImpar(5)}</p>
    </div>
  );
};

export default Exc13;
