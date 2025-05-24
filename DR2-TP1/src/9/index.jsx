// Para funcionar instale o @faker-js/faker 9.7.0 em "DEPENDENCIES" no codesandbox. :)
import { faker } from "@faker-js/faker";

// Exercício 9: Crie uma aplicação React que utilize um loop para
// renderizar uma lista de tarefas a partir de um array de strings.

const preparos = [...Array(5)].map((item) => ({
  descricao: faker.food.description(),
}));

const Exc9 = () => {
  return (
    <div className="Exc9">
      <h2>Metodos de preparo:</h2>
      <div>
        {preparos.map((item, index) => (
          <p
            style={{
              backgroundColor: "#333",
              color: "white",
              padding: "20px",
              borderTop: "5px solid black",
              borderLeft: "5px solid black",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            {item.descricao}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Exc9;
