// Exercício 5: Crie uma aplicação React que utilize valores primitivos
// (números, strings, booleans) para criar um perfil de usuário e exibi-lo na página.

const nome = "Mickeias";
const idade = 22;
let estudante = false;

const Exc5 = () => (
  <div className="Exc5">
    <h2>Perfil do Usuário:</h2>
    <h4>Nome: {nome}</h4>
    <h4>Idade: {idade}</h4>
    <h4>Estudante: {estudante ? "Sim" : "Não"}</h4>
  </div>
);

export default Exc5;
