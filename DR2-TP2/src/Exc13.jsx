import { useState } from "react";
import gerarPaises from "./infra/pais";
import { Title, ButtonCenter, List } from "./components/styles";

export default function Exc13() {
  const [paises, setPaises] = useState([]);

  const heandleClick = async () => {
    const lista = await gerarPaises();
    setPaises(lista);
  };

  // Ex13.jsx

  // Crie uma página com um botão que permita carregar uma lista
  // com os países do mundo. Use o serviço https://restcountries.com/.

  return (
    <>
      <Title style={{ color: "#333" }}>Jogo da Bandeira</Title>
      <ButtonCenter onClick={heandleClick}>Carregar Lista</ButtonCenter>
      {paises.length > 0 && (
        <List onClick={heandleClick} defaultValue="defaultValue">
          <option value="defaultValue" disabled>
            Selecione um pais
          </option>
          {paises.map((pais) => {
            return (
              <option key={pais.cca3} value={pais.name.common}>
                {pais.name.common}
              </option>
            );
          })}
        </List>
      )}
    </>
  );
}
