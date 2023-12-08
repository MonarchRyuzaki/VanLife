import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Buttons = ({
  name,
  id,
  activeColor,
  isActive,
  setIsActive,
  setSearchParams,
}) => {
  const isActiveNow = () => {
    const foundItem = isActive.find((k) => k.id === id);
    return foundItem ? foundItem.isActive : false;
  };

  const toggleFilter = () => {
    setIsActive((oldStates) => {
      const newStates = oldStates.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: !btn.isActive };
        } else {
          return btn;
        }
      });

      // Update URL parameters based on active filters
      const activeFilters = newStates
        .filter((btn) => btn.isActive)
        .map((btn) => btn.id);
      setSearchParams(
        activeFilters.length > 0 ? { type: activeFilters.join(",") } : {}
      );

      localStorage.setItem("filterStates", JSON.stringify(newStates));

      return newStates;
    });
  };
  useEffect(() => {
    // Retrieve the state from localStorage on component mount
    const savedStates = localStorage.getItem("filterStates");
    if (savedStates) {
      setIsActive(JSON.parse(savedStates));
    }
  }, []);
  return (
    <button
      to={`?type=${id}`}
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
