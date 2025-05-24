import { useState } from "react";
import ListarUfs from "./infra/unidades-federativas";
import { Title, ButtonCenter, List } from "./components/styles";

export default function Exc11() {
  const [ufs, setUfs] = useState([]);

  const heandleClick = async () => {
    let lista = await ListarUfs();
    setUfs(lista);
  };

  // Ex11.jsx

  // Crie uma página com um botão que permita carregar um drop down com as
  // unidades da federação. Use o serviço https://servicodados.ibge.gov.br.

  return (
    <div style={{ textAlign: "center" }}>
      <Title style={{ color: "#333" }}>Unidades da Federação</Title>
      <ButtonCenter onClick={heandleClick}>Carregar Lista</ButtonCenter>

      {ufs.length > 0 && (
        <List
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          {ufs.map((uf) => {
            return (
              <option key={uf.id} value={uf.id}>
                {uf.nome}
              </option>
            );
          })}
        </List>
      )}
    </div>
  );
}
