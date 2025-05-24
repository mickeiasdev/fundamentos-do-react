import { FaStar } from "react-icons/fa";
import { CardFull, Subtitle, Line } from "./components/styles";

// Ex03.jsx

// Crie um componente que exiba uma fila de estrelas com estrelas
// vermelhas e cinzas, caracterizando uma avaliação. A quantidade
// de estrelas e a avaliação são parametrizadas por props. Ao lado
// da fila de estrelas, mostre o título de um filme também parametrizado.
// Crie uma página que mostre 5 exemplos de uso desse componente.
// Aplique CSS no componente.

export default function Exc3({ rate, quantity, title }) {
  const generate = () => {
    let toReturn = [];

    if (rate < quantity) {
      for (let i = 0; i < quantity; i++) {
        if (i < rate) {
          toReturn.push(<FaStar key={i} color="red" />);
        } else {
          toReturn.push(<FaStar key={i} color="gray" />);
        }
      }
    } else {
      throw Error("A quantidade tem que ser maior ou igual a avaliacao");
    }

    return toReturn;
  };

  return (
    <>
      <CardFull>
        <Line>
          <Subtitle>{title}</Subtitle>
          <div>{generate()}</div>
        </Line>
      </CardFull>
    </>
  );
}
