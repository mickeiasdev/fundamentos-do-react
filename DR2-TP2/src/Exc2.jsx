import styled from "styled-components";
import { CardFull, Subtitle, Bold } from "./components/styles";

// Ex03.jsx

// Crie um componente que exiba uma fila de estrelas com estrelas
// vermelhas e cinzas, caracterizando uma avaliação. A quantidade
// de estrelas e a avaliação são parametrizadas por props. Ao lado
// da fila de estrelas, mostre o título de um filme também parametrizado.
// Crie uma página que mostre 5 exemplos de uso desse componente.
// Aplique CSS no componente.

const bissexto = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
};

const zeroEsquerda = (num) => {
  return num < 9 ? "0" + num : num;
};

export default function Exc2({ nome, dia, mes, ano }) {
  return (
    <CardFull>
      <Subtitle>
        <Bold>Nome:</Bold> {nome}
      </Subtitle>
      <Subtitle>
        <Bold>Nascimento:</Bold> {zeroEsquerda(dia)}/{zeroEsquerda(mes)}/
        {bissexto(ano) ? <Bold>{ano}</Bold> : ano}
      </Subtitle>
    </CardFull>
  );
}
