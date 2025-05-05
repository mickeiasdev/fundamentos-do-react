import "./index.css";
import { FaBook } from "react-icons/fa";
import { BsFillDiamondFill } from "react-icons/bs";

// Exercício 2: Crie uma aplicação React que exiba uma página web com um título
// "Histórico do ReactJs" e uma linha do tempo simples utilizando elementos HTML
// para destacar os marcos importantes na história do React.

const Exc2 = () => {
  return (
    <div className="Exc2">
      <div className="container">
        <h2 className="h2Exc2">
          <span>
            <FaBook color="cornflowerblue" />
          </span>{" "}
          Histórico do ReactJS
        </h2>
        <p>
          React é uma <span className="boldExc2">biblioteca JavaScript</span>{" "}
          criada pelo Facebook para construir{" "}
          <span className="boldExc2">interfaces de usuário</span> (UI),
          principalmente em{" "}
          <span className="boldExc2">aplicações web de página única</span> (SPAs
          – Single Page Applications)
        </p>
        <h3 className="h3Exc2">
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          Origem
        </h3>
        <ul>
          <li>
            <span className="boldExc2">Criado pelo Facebook</span> em{" "}
            <span className="boldExc2">2011</span>, o React nasceu de uma
            necessidade interna: tornar a manutenção do código do Facebook Ads
            mais eficiente.
          </li>
          <li>
            O engenheiro <span className="boldExc2">Jordan Walke</span> foi o
            responsável por criar a primeira versão da biblioteca.
          </li>
        </ul>
        <h3>
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          Lançamento Público
        </h3>
        <ul>
          <li>
            Em <span className="boldExc2">2013</span>, o React foi{" "}
            <span className="boldExc2">lançado como open-source</span> na
            conferência <span className="boldExc2">JSConf US</span>.
          </li>
          <li>
            Inicialmente, causou estranheza por usar{" "}
            <span className="boldExc2">JSX</span> (JavaScript com HTML
            misturado), mas aos poucos a comunidade começou a ver suas
            vantagens.
          </li>
        </ul>
        <h3>
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          Crescimento Rápido
        </h3>
        <ul>
          <li>
            <p>O React se popularizou rapidamente graças a conceitos como:</p>
            <ul>
              <li>
                <span className="boldExc2">Componentes reutilizáveis</span>
              </li>
              <li>
                <span className="boldExc2">DOM Virtual</span>, que melhora a
                performance
              </li>
              <li>
                <span className="boldExc2">Unidirecionalidade de dados</span>,
                facilitando a previsibilidade da aplicação
              </li>
            </ul>
          </li>
        </ul>
        <h3>
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          React Native
        </h3>
        <ul>
          <li>
            Em <span className="boldExc2">2015</span>, o Facebook lançou o{" "}
            <span className="boldExc2">React Native</span>, permitindo criar
            <span className="boldExc2">aplicações móveis nativas</span> com a
            mesma filosofia do React para web.
          </li>
        </ul>
        <h3>
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          Atualizações Importantes
        </h3>
        <ul>
          <li>
            <span className="boldExc2">2016</span>: Introdução da{" "}
            <span className="boldExc2">versão 15</span>, focada em melhorias
            internas.
          </li>
          <li>
            <span className="boldExc2">2017</span>: Chegada do{" "}
            <span className="boldExc2">React 16</span>, que trouxe o{" "}
            <span className="boldExc2">Fiber</span>, uma nova engine interna
            para renderização.
          </li>
          <li>
            <span className="boldExc2">2019</span>: Introdução dos{" "}
            <span className="boldExc2">Hooks</span>, que revolucionaram a forma
            de escrever componentes funcionais com estado e efeitos colaterais.
          </li>
          <li>
            <span className="boldExc2">2020+</span>: Avanços em{" "}
            <span className="boldExc2">Concurrent Mode, Suspense</span>, e
            integração com <span className="boldExc2">Next.js</span> e{" "}
            <span className="boldExc2">React Server Components</span>.
          </li>
        </ul>
        <h3>
          <span className="icon">
            <BsFillDiamondFill color="cornflowerblue" />
          </span>
          Hoje
        </h3>
        <ul>
          <li>
            <p>
              React é uma das bibliotecas mais populares do mundo JavaScript,
              usada por empresas como:
            </p>
            <ul>
              <li>
                <span className="boldExc2">Facebook</span>
              </li>
              <li>
                <span className="boldExc2">Instagram</span>
              </li>
              <li>
                <span className="boldExc2">Netflix</span>
              </li>
              <li>
                <span className="boldExc2">Airbnb</span>
              </li>
              <li>
                <span className="boldExc2">Uber</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Exc2;
