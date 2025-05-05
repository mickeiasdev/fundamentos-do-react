// Exercício 16: Crie uma aplicação React que utilize props para passar
// dados de um componente pai para um componente filho e renderize essas informações na página.

const Exc16 = ({ nome, aula, num }) => {
  return (
    <div className="Exc16">
      <h2>
        Olá {nome}!
        <br />
        Seja bem vindo a aula {aula}.
        <br />
        <br />
        Aula: {num}
      </h2>
    </div>
  );
};

export default Exc16;
