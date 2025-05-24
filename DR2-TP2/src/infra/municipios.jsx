export default async function listarMunicipios(uf) {
  let retorno = [];
  await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  )
    .then((resposta) => resposta.json())
    .then((municipio) => {
      retorno = municipio;
    })
    .catch((error) => (retorno = error));
  return retorno;
}
