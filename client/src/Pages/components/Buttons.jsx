import { useEffect, useState } from "react";

const Buttons = ({ name, id, activeColor, isActive, setIsActive, setIsFilter }) => {
  const isActiveNow = () => {
    const foundItem = isActive.find((k) => k.id === id);
    return foundItem ? foundItem.isActive : false;
  };

  const toggleFilter = () => {
    setIsActive((oldStates) => {
      return oldStates.map((btn) => {
        if (btn.id === id) return { ...btn, isActive: !btn.isActive };
        else return btn;
      });
    });
  };
  return (
    <button
      className="flex items-center justify-center px-6 py-3 rounded-lg"
      id={id}
      onClick={toggleFilter}
      style={{ backgroundColor: isActiveNow() ? activeColor : "#ffead0" }}
    >
      <div
        className="font-inter text-center font-medium"
        style={{ color: isActiveNow() ? "#ffead0" : "#4d4d4d" }}
      >
        {name}
      </div>
    </button>
  );
};

export default Buttons;
