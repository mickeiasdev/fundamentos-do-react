// src/styles/components.js
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const MainContainer = styled.div`
  background-color: #ddd;
  padding: 10px 25px 30px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const MainTitle = styled.h1`
  display: flex;
  gap: 20px;
  color: #333;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Container = styled.div`
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  & label {
    font-weight: bold;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  color: #cccccc;
`;

export const List = styled.select`
  width: 100%;
  margin: 0 auto 20px;
  padding: 10px;
  border-radius: 8px;
  font-size: 18px;
  background-color: #333;
  color: #fff;
  border: 1px solid #555;
`;

export const Card = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 10px;

  p.titulo {
    color: #aaaaaa;
    font-size: 0.9rem;
    margin-bottom: 4px;
  }

  p.valor {
    font-weight: bold;
    margin-bottom: 12px;
  }

  div.preco {
    text-align: end;
  }

  img {
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

export const CardFull = styled.div`
  background-color: #444;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  width: calc(100% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const InputText = styled.input`
  border-radius: 10px;
  width: calc(100% - 150px);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px solid #666;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 10px 0;
`;

export const ButtonCenter = styled.button`
  height: fit-content;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 15px;
  margin: 0 auto 20px;
  background-color: #666;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
`;

export const CarShop = styled.button`
  height: fit-content;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 15px;
  margin: auto 0;
  background-color: #666;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #888;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.2rem;
`;

export const Justify = styled.p`
  text-align: justify;
`;
