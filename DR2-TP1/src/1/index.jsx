import "./index.css";
import { FaAtom } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa6";

// Exercício 1: Crie uma aplicação React que exiba uma página web simples com um
// título "O que é React" e um parágrafo explicando o que é React.

const Exc1 = () => {
  return (
    <div className="Exc1">
      <div className="container">
        <h2 className="h2Exc1">
          O que e React
          <span>
            <FaAtom color="cornflowerblue" />
          </span>
        </h2>
        <p>
          React é uma <span className="boldExc1">biblioteca JavaScript</span>{" "}
          criada pelo Facebook para construir{" "}
          <span className="boldExc1">interfaces de usuário</span> (UI),
          principalmente em{" "}
          <span className="boldExc1">aplicações web de página única</span> (SPAs
          – Single Page Applications)
        </p>
        <h3 className="h3Exc1">
          <span className="icon">
            <FaLaptopCode color="cornflowerblue" />
          </span>
          O que ele faz?
        </h3>
        <p>
          O React permite criar{" "}
          <span className="boldExc1">componentes reutilizáveis</span>, que são
          pedaços independentes da interface (como botões, menus, campos, etc).
          A ideia é montar a tela como se fosse um "lego", com blocos que se
          encaixam.
        </p>
        <h3>
          <span className="icon">
            <FaFlask color="cornflowerblue" />
          </span>
          Principais características:
        </h3>
        <ul>
          <li>
            <span className="boldExc1">Componentes:</span> você divide sua
            interface em pequenas partes reutilizáveis.
          </li>
          <li>
            <span className="boldExc1">JSX:</span> sintaxe que mistura HTML com
            JavaScript.
          </li>
          <li>
            <span className="boldExc1">Virtual DOM:</span> o React atualiza
            apenas o que mudou na tela, deixando o app mais rápido.
          </li>
          <li>
            <span className="boldExc1">Unidirecional:</span> os dados fluem em
            uma única direção, facilitando o controle da aplicação.
          </li>
        </ul>
        <h3>
          <span className="icon">
            <FaFolder color="cornflowerblue" />
          </span>
          O que ele faz?
        </h3>
        <ul>
          <li>
            Sites como{" "}
            <span className="boldExc1">
              Instagram, Facebook, Netflix, Airbnb
            </span>{" "}
            usam React.
          </li>
          <li>
            Também pode ser usado para apps mobile com o{" "}
            <span className="boldExc1">React Native.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Exc1;
