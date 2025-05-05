// Exercício 11: Crie uma aplicação React que declare uma função para converter
// uma temperatura de Celsius para Fahrenheit e exiba o resultado na página.

const Exc11 = () => {
  const conversaoFahrenheit = (c) => {
    return `A conversao de ${c.toFixed(1)}º C em Fahrenheit é ${(
      c * 1.8 +
      32
    ).toFixed(1)}º F`;
  };

  return (
    <div className="Exc11">
      <h2>Celsius para Fahrenheit:</h2>
      <p>{conversaoFahrenheit(38)}</p>
    </div>
  );
};

export default Exc11;
