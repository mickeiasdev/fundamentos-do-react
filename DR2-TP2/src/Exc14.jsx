import { useEffect, useState } from "react";
import ListarPaises from "./infra/pais";
import { Pais } from "./infra/pais";
import { Flex, CardFull, Title, List } from "./components/styles";

// Ex14.jsx

// Crie uma outra página a partir da anterior que permita selecionar um país,
// exibindo seu nome completo e sua bandeira. Use o serviço https://restcountries.com/.

export default function Exc13() {
  const [paises, setPaises] = useState([]);
  const [pais, setPais] = useState([]);

  useEffect(() => {
    async function listarPaises() {
      const lista = await ListarPaises();
      setPaises(lista);
    }
    listarPaises();
  }, []);

  const heandleSelecionado = async (e) => {
    let retorno = await Pais(e.target.value);
    setPais(retorno);
  };

  return (
    <>
      <Title style={{ color: "#333" }}>Jogo da Bandeira</Title>
      <Flex>
        <List defaultValue="defaultValue" onChange={heandleSelecionado}>
          <option value="defaultValue" disabled>
            Selecione um pais
          </option>
          {paises.map((pais) => {
            return (
              <option key={pais.cca3} value={pais.cca3}>
                {pais.name.common}
              </option>
            );
          })}
        </List>
        {pais &&
          pais.map((item) => {
            return (
              <CardFull>
                <Title>
                  {item.cca2} - {item.name.official}
                </Title>
                <img
                  src={item.flags.png}
                  width={350}
                  height={225}
                  style={{ margin: "0 auto" }}
                />
              </CardFull>
            );
          })}
      </Flex>
    </>
  );
}
