export default async function ListarPaises() {
  let retorno = [];
  await fetch(`https://restcountries.com/v3.1/all?field=name,cca3`)
    .then((res) => res.json())
    .then((paises) => {
      retorno = paises;
    })
    .catch((erro) => (retorno = erro));
  return retorno;
}

export async function Pais(cca3) {
  let retorno = [];
  await fetch(
    `https://restcountries.com/v3.1/alpha/${cca3}?field=name,cca2,flags`
  )
    .then((res) => res.json())
    .then((paise) => {
      retorno = paise;
    })
    .catch((erro) => (retorno = erro));
  return retorno;
}
