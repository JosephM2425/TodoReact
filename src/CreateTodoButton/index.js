import React from "react";

function CreateTodoButton(props) {
  const openModalTodoAdd = () => {
    props.setOpenModal(true);
  };

  return (
    <button
      className="flex-no-shrink w-full mt-1 p-2 border-2 rounded font-normal  hover:text-white hover:bg-green-700 z-10"
      onClick={openModalTodoAdd}
    >
      Añadir Tarea
    </button>
  );
}

export { CreateTodoButton };
