export default async function ObterEndereco(cep) {
  let retorno = {};

  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((resposta) => resposta.json())
    .then((endereco) => {
      retorno = endereco;
    })
    .catch((erro) => (retorno = erro));
  return retorno;
}
