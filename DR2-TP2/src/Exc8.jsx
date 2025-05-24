import { faker } from "@faker-js/faker";
import { useState } from "react";
import AccordionUsage from "./components/accordion.jsx";
import {
  Flex,
  Title,
  Subtitle,
  Card,
  Line,
  List,
  CarShop,
} from "./components/styles";
import { FaShoppingCart } from "react-icons/fa";

const itens = new Array(50).fill().map(() => ({
  id: faker.string.uuid(),
  nome: faker.commerce.product(),
  desc: faker.commerce.productDescription(),
  adjetivo: faker.commerce.productAdjective(),
  preco: faker.commerce.price({ min: 49.99, max: 199.99 }),
}));

const agrupar = itens.reduce((acumulador, item) => {
  if (acumulador[item.adjetivo]) {
    acumulador[item.adjetivo].push(item);
  } else {
    acumulador[item.adjetivo] = [item];
  }
  return acumulador;
}, {});

// Ex08.jsx

// Utilize o modelo da página anterior para agrupar os produtos por departamento.
// A dica é após gerar a lista de produtos, ordenar por departamento. Mostre o nome
// do departamento em destaque e a lista de produtos daquele departamento.

export default function Exc7() {
  const [selecionado, setSelecionado] = useState("");
  const heandleSelecionar = (event) => setSelecionado(event.target.value);

  return (
    <>
      <Title style={{ color: "#333" }}>Lojinha do MK</Title>
      <Subtitle style={{ color: "#333" }}>
        Buscar os item por Adjetivos
      </Subtitle>
      <List onChange={heandleSelecionar} defaultValue="default">
        <option value="default" disabled>
          Selecione um Adjetivo
        </option>
        {Object.keys(agrupar).map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </List>

      {selecionado !== "" && (
        <Flex>
          {agrupar[selecionado].map((item) => (
            <Card key={item.id}>
              <img
                src={`https://dummyimage.com/200x200/666/ffffff&text=${item.nome}`}
              />
              <Flex>
                <Line>
                  <div>
                    <p className="titulo">Nome:</p>
                    <p className="valor">{item.nome}</p>
                  </div>
                  <div className="preco">
                    <p className="titulo">Preço:</p>
                    <p className="valor">R$ {item.preco}</p>
                  </div>
                </Line>
                <Line>
                  <div>
                    <p className="titulo">Tipo:</p>
                    <p className="valor">{item.adjetivo}</p>
                  </div>
                  <div>
                    <CarShop>
                      <FaShoppingCart />
                    </CarShop>
                  </div>
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
