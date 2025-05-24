import { useState } from "react";
import { ReceitasPorCategoria } from "./infra/receitas";
import { Title, ButtonCenter, List } from "./components/styles";

// Ex15.jsx

// Crie uma página com um botão que permita carregar uma lista com
// categorias de receitas. Use o serviço https://www.themealdb.com/.

export default function Exc15() {
  const [categorias, setCategorias] = useState([]);

  const heandleClick = async () => {
    let lista = await ReceitasPorCategoria();
    setCategorias(lista);
  };

  return (
    <>
      <Title style={{ color: "#333" }}>Lista de Receitas</Title>

      <ButtonCenter onClick={heandleClick}>Carregar categorias</ButtonCenter>
      {categorias.length > 0 && (
        <List defaultValue="default">
          <option value="default" disable>
            Selecione uma categoria
          </option>
          {categorias.map((item, i) => (
            <option key={i} value={i}>
              {item.strCategory}
            </option>
          ))}
        </List>
      )}
    </>
  );
}
