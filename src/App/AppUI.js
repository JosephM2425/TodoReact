import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { SpinnerLoading } from "../SpinnerLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="w-full h-screen flex items-center justify-center font-sans bg-blue-300">
        <div className="bg-white rounded shadow p-4 m-6 w-full lg:w-3/4 lg:max-w-lg">
          <TodoCounter />

          <TodoSearch />

          <TodoList>
            {error && <p>Error...</p>}
            {loading && <SpinnerLoading />}
            {!loading && !searchedTodos.length && <p>Crea tu primero TODO!</p>}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                completed={todo.completed}
                text={todo.text}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex p-5 border-b border-solid border-gray-300 rounded-t text-center">
                        <h3 className="text-3xl font=semibold ">
                          Crea un Todo!
                        </h3>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <TodoForm />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </Modal>
          )}

          <CreateTodoButton setOpenModal={setOpenModal} />
        </div>
      </div>
    </React.Fragment>
  );
}

export { AppUI };
