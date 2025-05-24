export async function ReceitasPorCategoria() {
  let retorno = [];
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((categorias) => {
      retorno = categorias.categories;
    });
  return retorno;
}

export async function Receitas(categoria) {
  let retorno = [];
  await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
  )
    .then((res) => res.json())
    .then((prato) => {
      retorno = prato.meals;
    });
  return retorno;
}

export async function ReceitaImagem(id) {
  let retorno = [];
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((infos) => {
      retorno = infos.meals;
    });
  return retorno;
}
