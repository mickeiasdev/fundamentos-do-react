export default async function GerarNomes(decada) {
  return fetch(
    `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${decada}`
  )
    .then((res) => {
      if (!res.ok) return [];
      return res.json();
    })
    .then((nomes) => {
      if (Array.isArray(nomes) && nomes.length > 0 && nomes[0].res)
        return nomes[0].res;
      return [];
    })
    .catch((erro) => {
      console.error("Erro ao buscar dados:", erro);
      return [];
    });
}
