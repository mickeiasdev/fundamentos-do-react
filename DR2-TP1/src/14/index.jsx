// Para funcionar instale o @faker-js/faker 9.7.0 em "DEPENDENCIES" no codesandbox. :)
import { faker } from "@faker-js/faker";

// Exercício 14: Crie uma aplicação React que renderize dinamicamente um
// componente de "Card" para cada item em um array de objetos
// por exemplo, produtos em uma loja online).

const produtos = [...Array(10)].map((item) => ({
  id: faker.string.uuid(),
  nome: faker.commerce.product(),
}));

const Exc14 = () => {
  return (
    <div className="Exc14">
      <h2>Lista do mercado:</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {produtos.map((item, index) => (
          <p
            key={index}
            className="card"
            style={{
              backgroundColor: "brown",
              color: "white",
              padding: "20px",
              borderTop: "5px solid black",
              borderLeft: "5px solid black",
              width: "100px",
              height: "100px",
            }}
          >
            {item.nome}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Exc14;
