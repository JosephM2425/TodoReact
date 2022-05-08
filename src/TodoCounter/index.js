import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div>
      <h1 className="font-medium text-center text-lg text-black">
        Has Completado {completedTodos} de {totalTodos} TODOs
      </h1>
    </div>
  );
}

export { TodoCounter };
