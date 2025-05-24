export default async function listarUfs() {
  let retorno = [];
  await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((resposta) => resposta.json())
    .then((ufs) => {
      retorno = ufs;
    })
    .catch((error) => (retorno = error));
  return retorno;
}
