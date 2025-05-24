import listarMunicipios from "./infra/municipios";
import listarUfs from "./infra/unidades-federativas";
import { useState, useEffect } from "react";
import { Flex, Card, Bold, Title, Subtitle, List } from "./components/styles";

export default function Exc12() {
  const [ufs, setUfs] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    const carregarUfs = async () => {
      let lista = await listarUfs();
      setUfs(lista);
    };
    carregarUfs();
  }, []);

  const heandleSelecionar = async (e) => {
    let lista = await listarMunicipios(e.target.value);
    setMunicipios(lista);
  };

  // Ex12.jsx

  // Crie uma página a partir da anterior que ao selecionar a unidade da federação,
  // carrega os municípios. Use o serviço https://servicodados.ibge.gov.br.

  return (
    <>
      <Title style={{ color: "#333" }}>Municipios por Federação</Title>
      <List
        defaultValue="default"
        onChange={heandleSelecionar}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "16px",
        }}
      >
        <option value="default" disabled>
          Selecione um municipio
        </option>
        {ufs.map((uf) => {
          return (
            <option key={uf.id} value={uf.sigla}>
              {uf.nome}
            </option>
          );
        })}
      </List>
      <Flex>
        {municipios.length > 0 &&
          municipios.map((municipio) => (
            <Card key={municipio.id}>
              <Subtitle>
                <Bold>Nome:</Bold> {municipio.nome}
              </Subtitle>
              <Subtitle>
                <Bold>Microrregiao:</Bold> {municipio.microrregiao.nome}
              </Subtitle>
              <Subtitle>
                <Bold>Mesorregiao:</Bold>{" "}
                {municipio.microrregiao.mesorregiao.nome}
              </Subtitle>
            </Card>
          ))}
      </Flex>
    </>
  );
}
