import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="bg-white relative flex justify-center items-center mt-6 shadow-xl">
      {!completed ? (
        <span
          className={`${
            completed && "text-red-600"
          } cursor-pointer flex justify-center items-center h-12 w-12  text-3xl font-bold hover:text-red-600`}
          onClick={onComplete}
        >
          <AiOutlineCheckSquare />
        </span>
      ) : (
        <span
          className={`${
            completed && "text-red-600"
          } cursor-pointer flex justify-center items-center h-12 w-12  text-3xl font-bold hover:text-red-600`}
          onClick={onComplete}
        >
          <AiFillCheckSquare />
        </span>
      )}

      <p
        className={`${completed && "text-red-600 line-through"}
        mt-6 mr-0 mb-6 ml-6 w-full text-lg font-normal`}
      >
        {text}
      </p>
      <span
        className="absolute right-0 mr-4 hover:text-red-600 text-3xl font-bold"
        onClick={onDelete}
      >
        <BsTrashFill />
      </span>
    </li>
  );
}

export { TodoItem };
