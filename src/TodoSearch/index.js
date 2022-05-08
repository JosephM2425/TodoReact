import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchTodoChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      placeholder="Buscar..."
      className={`rounded-sm mt-0 mr-6 h-16 w-full text-2xl text-center font-normal shadow-xl placeholder:text-gray-400 placeholder:font-normal`}
      onChange={onSearchTodoChange}
      value={searchValue}
    />
  );
}

export { TodoSearch };
