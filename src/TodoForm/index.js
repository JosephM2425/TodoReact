import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValues, setNewTodoValue] = useState("");
  const { openModal, setOpenModal, addTodo } = useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onAddTodo = (event) => {
    event.preventDefault();
    addTodo(newTodoValues);
    setOpenModal(!openModal);
  };

  return (
    <form onSubmit={onAddTodo}>
      <div>
        <textarea
          type="text"
          className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
          onChange={onChange}
          value={newTodoValues}
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-red-500 font-bold uppercase mt-6 px-4 py-4 text-md"
            onClick={() => setOpenModal(!openModal)}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500  font-bold uppercase mt-6 px-4 py-4 text-md"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}

export { TodoForm };
