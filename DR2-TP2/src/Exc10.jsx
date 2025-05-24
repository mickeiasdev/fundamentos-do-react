import { useState } from "react";
import GerarNomes from "./infra/nomes-decadas";
import {
  Container,
  Subtitle,
  Line,
  InputText,
  Flex,
  Card,
  Bold,
} from "./components/styles";

// Ex10.jsx

// Crie uma página com um campo onde será possível digitar um ano
// representando uma década e obter o ranking dos nomes mais comuns.
// Será preciso fazer um tratamento para que o ano sempre termine em zero
// (se digitar 1973 será entendido 1970). Mostre o ranking formatado.
// Use o serviço https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=1960.

function validarAno(ano) {
  return ano <= new Date().getFullYear();
}

const zeroEsquerda = (num) => {
  return num <= 9 ? "0" + num : num;
};

export default function Exc10() {
  const [nomes, setNomes] = useState([]);
  const [erro, setErro] = useState("");

  const heandleAno = async (event) => {
    let ano = parseInt(event.target.value);

    if (isNaN(ano) || !validarAno(ano)) return setErro("Digite um ano válido");

    const decada = ano - (ano % 10);
    const nomes = await GerarNomes(decada);

    if (!nomes || nomes.length === 0) {
      setErro("Sem dados para essa década.");
      setNomes([]);
    } else {
      setErro("");
      setNomes(nomes);
    }
  };

  return (
    <>
      <Container>
        <Line>
          <label htmlFor="ano">Digite o Ano:</label>
          <InputText
            placeholder="Descubra os nomes mais registrados da decada..."
            id="ano"
            onChange={heandleAno}
          />
        </Line>
        {nomes.length > 0 && (
          <Flex>
            {nomes.map((item, i) => (
              <Card key={i}>
                <Subtitle
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.25)",
                    paddingBottom: "5px",
                  }}
                >
                  <Bold>N° {zeroEsquerda(i + 1)}</Bold>
                </Subtitle>
                <Subtitle>
                  <Bold>Nome:</Bold> {item.nome}
                </Subtitle>
                <Subtitle>
                  <Bold>Frequencia:</Bold> {item.frequencia}
                </Subtitle>
              </Card>
            ))}
          </Flex>
        )}
        {erro !== "" && (
          <p style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
            {erro}
          </p>
        )}
      </Container>
    </>
  );
}
