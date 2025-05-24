import { useState } from "react";
import ObterEndereco from "./infra/endereco-cep";
import {
  Flex,
  Line,
  InputText,
  Card,
  Bold,
  Subtitle,
  Container,
} from "./components/styles";

// Ex09.jsx

// Crie uma página com um campo onde será possível digitar um CEP
// e obter o endereço completo. Use o serviço https://viacep.com.br/.

export default function Exc9() {
  const [endereco, setEndereco] = useState({});

  const handleChange = async (e) => {
    let cep = e.target.value;
    if (cep.length === 8) {
      let endObtido = await ObterEndereco(cep);
      setEndereco(endObtido);
    }
  };

  return (
    <>
      <Flex>
        <Container>
          <Line>
            <label htmlFor="cep">
              <Bold>Digite o CEP:</Bold>
            </label>
            <InputText
              placeholder="Digite apenas numeros"
              id="cep"
              size={8}
              maxLength={8}
              onChange={handleChange}
            />
          </Line>
          {endereco.cep && (
            <Card>
              <Subtitle>
                <Bold>CEP:</Bold> {endereco.cep}
              </Subtitle>
              <Subtitle>
                <Bold>Rua:</Bold> {endereco.logradouro}
              </Subtitle>
              <Subtitle>
                <Bold>Complemento:</Bold> {endereco.complemento}
              </Subtitle>
              <Subtitle>
                <Bold>Bairro:</Bold> {endereco.bairro}
              </Subtitle>
              <Subtitle>
                <Bold>Localidade:</Bold> {endereco.localidade}
              </Subtitle>
              <Subtitle>
                <Bold>UF:</Bold> {endereco.uf}
              </Subtitle>
            </Card>
          )}
        </Container>
      </Flex>
    </>
  );
}
