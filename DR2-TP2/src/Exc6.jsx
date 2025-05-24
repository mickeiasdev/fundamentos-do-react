import { faker } from "@faker-js/faker";
import { useState } from "react";
import { Flex, Card, Subtitle, Bold, List } from "./components/styles";

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// o faker gera muitos tipos diferentes de .jobArea e resolvi limitar
// para ficar menos arrays de departamentos e mais itens em cada um deles
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

const departamentos = ["Marketing", "TI", "RH", "Financeiro", "Comercial"];

const funcionarios = new Array(30).fill().map(() => ({
  id: faker.string.numeric(5),
  nome: faker.person.fullName(),
  cargo: faker.person.jobTitle(),
  departamento: departamentos[Math.floor(Math.random() * departamentos.length)],
}));

const agrupar = funcionarios.reduce((acumulador, funcionario) => {
  if (acumulador[funcionario.departamento]) {
    acumulador[funcionario.departamento].push(funcionario);
  } else {
    acumulador[funcionario.departamento] = [funcionario];
  }
  return acumulador;
}, {});

// Ex06.jsx

// Utilize o modelo da página anterior para gerar uma lista de 30 funcionários
// agrupados por departamento. A dica é após gerar a lista de funcionários,
// ordenar por departamento. Mostre o nome do departamento em destaque e a lista
// de funcionários daquele departamento.

export default function Exc6() {
  const [selecionado, setSelecionado] = useState("");
  const heandleSelecionar = (event) => setSelecionado(event.target.value);

  return (
    <>
      <List value={selecionado} onChange={heandleSelecionar}>
        <option value="" disabled>
          Selecione um Departamento
        </option>
        {departamentos.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </List>

      {agrupar[selecionado] && (
        <Flex>
          {agrupar[selecionado].map((item, index) => (
            <Card key={index}>
              <Subtitle>
                <Bold>ID:</Bold> {item.id}
              </Subtitle>
              <Subtitle>
                <Bold>Nome:</Bold> {item.nome}
              </Subtitle>
              <Subtitle>
                <Bold>Cargo:</Bold> {item.cargo}
              </Subtitle>
              <Subtitle>
                <Bold>Departamento:</Bold> {item.departamento}
              </Subtitle>
            </Card>
          ))}
        </Flex>
      )}
    </>
  );
}
