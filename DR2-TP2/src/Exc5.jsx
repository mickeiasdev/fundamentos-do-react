import { faker } from "@faker-js/faker";
import { Flex, Card, Subtitle, Bold } from "./components/styles";

const funcionarios = new Array(10).fill().map(() => ({
  id: faker.string.numeric(5),
  nome: faker.person.fullName(),
  cargo: faker.person.jobTitle(),
  departamento: faker.person.jobArea(),
}));

// Ex05.jsx

// Crie uma página que exiba uma lista formatada com 10 funcionários
// de uma empresa gerados pelo Faker. Os registros de funcionários
// devem conter id, nome, cargo e departamento.

export default function Exc5() {
  return (
    <Flex>
      {funcionarios.map((item, i) => (
        <Card key={i}>
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
  );
}
