import { React, useEffect, useState } from "react";
import Cards from '../Cards/Cards';
import S from './Produtos.module.css'

const Produtos = () => {
  const [requisition, setRequisition] = useState([]);
  const [page, setPage] = useState(1);

  async function handleRequisition() {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    );
    const json = await response.json();
    const resposta = json.products;
    setRequisition([...requisition, ...resposta]);
    // [oito itens, novos 8 itens]
    setPage(page + 1);
  }

  useEffect(() => {
    handleRequisition();
  }, []);

  return (
    <div className={S.content}>
      <div className={S.produtos}>
        {!!requisition &&
          requisition.map((produto) => {
            return <Cards dados={produto} key={produto.id} />;
          })}
      </div>

      <button onClick={() => handleRequisition()}>
        Ainda mais produtos aqui!
      </button>
    </div>
  );
};

export default Produtos;