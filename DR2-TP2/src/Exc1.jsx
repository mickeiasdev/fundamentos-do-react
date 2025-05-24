import { Flex, Card, Subtitle } from "./components/styles";
// Ex01.jsx

// Crie um componente que exiba uma saudação com o nome de uma pessoa
// parametrizado por props. Crie uma página que mostre 3 exemplos de uso
// desse componente. Aplique CSS no componente.

export default function Exc1({ nome }) {
  return (
    <Flex>
      <Card>
        <Subtitle>Olá, {nome}! Seja bem vindo (a).</Subtitle>
      </Card>
    </Flex>
  );
}
