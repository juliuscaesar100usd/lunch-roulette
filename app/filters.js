"use client";

import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
  const [budget, setBudget] = useState({ min: "0", max: "2000" });
  const [cuisine, setCuisine] = useState("");
  const [waitTime, setWaitTime] = useState(30);

  const handleApply = () => {
    onFilterChange({
      budget: [Number(budget.min), Number(budget.max)],
      cuisine,
      waitTime: Number(waitTime)
    });
  };
  

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold text-black mb-4">Фильтры</h2>

      {/* Бюджет */}
      <label className="block text-black font-medium mb-1">Бюджет (₸)</label>
      <div className="flex gap-2 mb-4">
      <input
        type="number"
        value={budget.min}
        onChange={(e) => setBudget({ ...budget, min: e.target.value })}
        className="w-full border rounded p-2 text-black"
        placeholder="Минимум"
      />

      <input
        type="number"
        value={budget.max}
        onChange={(e) => setBudget({ ...budget, max: e.target.value })}
        className="w-full border rounded p-2 text-black"
        placeholder="Максимум"
      />

      </div>

      {/* Кухня */}
      <label className="block text-black font-medium mb-1">Тип кухни</label>
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="w-full border rounded p-2 mb-4 text-black"
      >
        <option value="">Любая</option>
        <option value="Азиатская">Азиатская</option>
        <option value="Европейская">Европейская</option>
        <option value="Фастфуд">Фастфуд</option>
      </select>

      {/* Время ожидания */}
      <div>
      <label className="block font-medium mb-1">Максимальное время ожидания (мин):</label>
      <input
        type="number"
        value={waitTime}
        onChange={(e) => setWaitTime(parseInt(e.target.value))}
        className="border p-2 rounded w-full text-black"
      />
      </div>


      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Применить фильтры
      </button>
    </div>
  );
};

export default Filters;
