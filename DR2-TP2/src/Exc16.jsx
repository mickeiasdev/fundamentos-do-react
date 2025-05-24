import { useState, useEffect } from "react";
import { Receitas } from "./infra/receitas";
import { ReceitasPorCategoria } from "./infra/receitas";
import { ReceitaImagem } from "./infra/receitas";
import {
  Flex,
  CardFull,
  Title,
  Subtitle,
  Justify,
  List,
} from "./components/styles";

// Ex16.jsx

// Crie uma outra página a partir da anterior que permita selecionar
// uma categoria, fazendo aparecer sua descrição e a imagem
// representando a categoria.

export default function Exc16() {
  const [categorias, setCategorias] = useState([]);
  const [pratos, setPratos] = useState([]);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const carregarCategorias = async () => {
      let lista = await ReceitasPorCategoria();
      setCategorias(lista);
    };
    carregarCategorias();
  }, []);

  const heandleCategoria = async (e) => {
    const lista = await Receitas(e.target.value);
    setPratos(lista);
  };

  const heandlePrato = async (e) => {
    const lista = await ReceitaImagem(e.target.value);
    setInfos(lista);
  };

  return (
    <>
      <Title style={{ color: "#333" }}>Lista de Receitas</Title>

      <div>
        <div>
          <div>
            <div>
              <p>Selecione a categoria:</p>
              <List onChange={heandleCategoria} defaultValue="default">
                <option value="default" disabled>
                  Selecione uma categoria
                </option>

                {categorias.map((item, i) => (
                  <option key={i} value={item.strCategory}>
                    {item.strCategory}
                  </option>
                ))}
              </List>
            </div>
            {pratos.length > 0 && (
              <div>
                <p>Selecione seu Prato:</p>
                <List onChange={heandlePrato} defaultValue="default">
                  <option value="default" disabled>
                    Selecione seu Prato
                  </option>
                  {pratos.map((item) => (
                    <option key={item.idMeal} value={item.idMeal}>
                      {item.strMeal}
                    </option>
                  ))}
                </List>
              </div>
            )}
          </div>
          {infos.length > 0 && (
            <div>
              {infos.map((item) => (
                <CardFull key={item.idMeal}>
                  <Title>{item.strMeal}</Title>
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    width="300px"
                    style={{ margin: "0 auto" }}
                  />
                  <div>
                    <Subtitle>Modo de preparo:</Subtitle>
                    <Justify>{item.strInstructions}</Justify>
                  </div>
                </CardFull>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
