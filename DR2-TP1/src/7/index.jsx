// Exercício 7: Crie uma aplicação React que utilize Template Strings para
// exibir uma mensagem de boas-vindas personalizada para o usuário com base
// no nome e horário atual.

const Exc7 = () => {
  const nome = "Monitor";
  const hora = new Date().getHours();
  let mensagem;

  if (hora >= 5 && hora < 12) {
    mensagem = `Bom dia! Que seu dia comece com alegria!`;
  } else if (hora >= 12 && hora < 18) {
    mensagem = `Boa tarde! Que sua tarde seja leve e produtiva!`;
  } else {
    mensagem = `Boa noite! Que o descanso te revigore. Durma bem e sonhe com coisas boas!`;
  }

  return (
    <div className="Exc7">
      <h2>Olá, {nome}! seja bem vindo.</h2>
      <p>{mensagem}</p>
    </div>
  );
};

export default Exc7;
