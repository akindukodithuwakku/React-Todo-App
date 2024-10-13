import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const Todoitems = ({ Text, isComplete, onToggle, onDelete }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={onToggle}
      >
        <img
          className="w-7"
          src={isComplete ? tick : not_tick}
          alt="toggle completion"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {Text}
        </p>
      </div>
      <img
        src={delete_icon}
        alt="delete"
        className="w-3.5 cursor-pointer"
        onClick={onDelete}
      />
    </div>
  );
};

export default Todoitems;
