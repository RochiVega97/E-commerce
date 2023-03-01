import React, { useState } from "react";
const initialCount = 0;
const ItemCount = ({ activarRender, stock }) => {
  const [contador, setContador] = useState(initialCount);
  console.log("stock", stock);

  const handleAdd = () => {
    if (contador === stock) {
      return;
    } else {
      setContador(contador + 1);
    }
  };
  const handleRes = () => {
    setContador(contador === 0 ? initialCount : contador - 1);
  };
  const handleReset = () => {
    setContador(initialCount);
  };

  return (
    <div>
      <div>{contador}</div>
      <button
        onClick={handleRes}
        className="bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        -
      </button>
      <button
        onClick={handleReset}
        className="bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Restablecer
      </button>
      <button
        onClick={handleAdd}
        className="bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        +
      </button>

      <div>
        <button
          onClick={activarRender}
          className="bg-blue-700 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;