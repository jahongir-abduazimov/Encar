"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const page = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Пароли должны совпадать");
      return;
    }
    setError("");
    // Prepare to send password and confirmPassword
    // Add your API call or logic here
    console.log("Password:", password, "Confirm:", confirmPassword);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl min-w-[320px] flex flex-col gap-6 w-full max-w-md"
      >
        <h2 className="text-center mb-2 text-slate-800 font-semibold text-2xl">
          Сброс пароля
        </h2>
        {error && (
          <div className="text-red-500 text-center text-sm font-medium mb-2">
            {error}
          </div>
        )}
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="password" className="font-medium text-slate-700">
            Новый пароль
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="py-3 pr-10 pl-3 rounded-lg border border-slate-300 text-base outline-none focus:border-blue-400 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-12 bg-transparent border-none cursor-pointer flex items-center"
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="confirmPassword"
            className="font-medium text-slate-700"
          >
            Подтвердите пароль
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="py-3 pr-10 pl-3 rounded-lg border border-slate-300 text-base outline-none focus:border-blue-400 transition"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword((v) => !v)}
            className="absolute right-4 top-12 bg-transparent border-none cursor-pointer flex items-center"
            aria-label={
              showConfirmPassword ? "Скрыть пароль" : "Показать пароль"
            }
          >
            {showConfirmPassword ? (
              <FaEyeSlash size={20} />
            ) : (
              <FaEye size={20} />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold text-base border-none cursor-pointer shadow-md transition hover:from-blue-600 hover:to-indigo-600"
        >
          Сбросить пароль
        </button>
      </form>
    </div>
  );
};

export default page;
