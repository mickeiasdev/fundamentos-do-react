import { FaStar } from "react-icons/fa";
import { Container, CardFull } from "./components/styles";

// Ex04.jsx

// Altere o componente da página anterior para que a cor das estrelas
// possa ser parametrizada também. Crie uma página que mostre 5 exemplos
// de uso desse componente. Aplique CSS no componente.

export default function Exc4({ rate, quantity, title, fgColor, bgColor }) {
  const generate = () => {
    let toReturn = [];

    if (rate < quantity) {
      for (let i = 0; i < quantity; i++) {
        if (i < rate) {
          toReturn.push(<FaStar key={i} color={fgColor} />);
        } else {
          toReturn.push(<FaStar key={i} color={bgColor} />);
        }
      }
    } else {
      throw Error("A quantidade tem que ser maior ou igual a avaliacao");
    }

    return toReturn;
  };

  return (
    <Container>
      <CardFull>
        <p>{title}</p>
        <div>{generate()}</div>
      </CardFull>
    </Container>
  );
}
