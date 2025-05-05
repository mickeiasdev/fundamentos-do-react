// Exercício 6: Crie uma aplicação React que utilize um objeto para armazenar
// as informações de um livro (título, autor, ano) e um array para listar capítulos.
// Exiba essas informações na página web.

const Exc6 = () => {
  const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1945,
    capitulos: [
      "O narrador fala sobre seu desenho da jiboia",
      "O encontro com o Pequeno Príncipe no deserto",
      "O planeta de origem do Pequeno Príncipe",
      "O amor pela rosa",
      "A partida do príncipe e os baobás",
      "O encontro com o rei",
      "O vaidoso",
      "O bêbado",
      "O homem de negócios",
      "O acendedor de lampiões",
      "O geógrafo",
      "A chegada à Terra",
      "A conversa com a serpente",
      "O jardim de rosas",
      "O encontro com a raposa",
      "A despedida da raposa e a lição sobre o essencial",
      "O retorno ao poço com o aviador",
      "A despedida do Pequeno Príncipe",
      "Reflexão do narrador sobre a ausência",
    ],
  };

  return (
    <div className="container">
      <h2>{livro.titulo}</h2>
      <ul>
        <li>Autor: {livro.autor}</li>
        <li>Ano: {livro.ano}</li>
        <li id="capitulos">
          Capitulos:
          <br />
          <br />
          <ul>
            {livro.capitulos.map((capitulo, index) => (
              <li key={index}>{capitulo}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Exc6;
