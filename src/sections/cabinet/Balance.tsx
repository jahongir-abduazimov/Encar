import React from "react";

const Balance = () => {
  return (
    <div>
      <p className="text-xl mb-4">Баланс</p>
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-2xl">Ваш баланс</p>
          <p className="text-5xl">
            0 <span className="text-2xl">руб</span>
          </p>
        </div>
        <button className="text-2xl font-semibold bg-primary text-white p-5 rounded-xl cursor-pointer">
          Пополнить баланс
        </button>
      </div>
      <p className="text-2xl mb-4">Данные о движении баланса</p>
      <p>Данных о движении баланса нет.</p>
    </div>
  );
};

export default Balance;
