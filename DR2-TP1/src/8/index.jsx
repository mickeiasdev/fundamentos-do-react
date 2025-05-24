// Exercício 8: Crie uma aplicação React que utilize condicionais para
// exibir uma mensagem "Bom dia", "Boa tarde" ou "Boa noite" com base na
// hora atual.

const Exc8 = () => {
  let nome = "Monitor";
  let hora = new Date();
  hora = hora.getHours();
  let mensagem;

  if (hora >= 5 && hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  return (
    <div className="Exc8">
      <h2>
        Olá, {nome}. {mensagem}
      </h2>
    </div>
  );
};

export default Exc8;
