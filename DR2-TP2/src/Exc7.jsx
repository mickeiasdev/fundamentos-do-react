import { faker } from "@faker-js/faker";
import AccordionUsage from "./components/accordion.jsx";
import { FaShoppingCart } from "react-icons/fa";
import {
  Flex,
  Title,
  Subtitle,
  Card,
  Line,
  CarShop,
} from "./components/styles";

const itens = new Array(50).fill().map(() => ({
  id: faker.string.uuid(),
  nome: faker.commerce.product(),
  desc: faker.commerce.productDescription(),
  adjetivo: faker.commerce.productAdjective(),
  preco: faker.commerce.price({ min: 49.99, max: 199.99 }),
}));

// Ex07.jsx

// Crie uma página que exiba uma lista formatada com 50 produtos gerados pelo Faker.
// Essa página deve ser formatada como um e-commerce onde o usuário poderá ver o nome do produto,
// sua descrição, um adjetivo destacado e o preço. Use o módulo “commerce” do Faker.

export default function Exc7() {
  return (
    <>
      <Title style={{ color: "#333" }}>Lojinha do MK</Title>

      {itens.length > 0 && (
        <Flex>
          {itens.map((item) => (
            <Card key={item.id}>
              <img
                src={`https://dummyimage.com/200x200/666/ffffff&text=${item.nome}`}
              />
              <Flex>
                <Line>
                  <div>
                    <Subtitle className="titulo">Nome:</Subtitle>
                    <Subtitle className="valor">{item.nome}</Subtitle>
                  </div>
                  <div className="preco">
                    <Subtitle className="titulo">Preço:</Subtitle>
                    <Subtitle className="valor">R$ {item.preco}</Subtitle>
                  </div>
                </Line>
                <Line>
                  <div>
                    <Subtitle className="titulo">Tipo:</Subtitle>
                    <Subtitle className="valor">{item.adjetivo}</Subtitle>
                  </div>
                  <CarShop>
                    <FaShoppingCart />
                  </CarShop>
                </Line>
              </Flex>
              <AccordionUsage name="Descrição" content={item.desc} />
            </Card>
          ))}
        </Flex>
      )}
    </>
  );
}
