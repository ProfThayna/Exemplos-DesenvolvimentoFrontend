import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}