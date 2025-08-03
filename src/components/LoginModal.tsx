"use client";

import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaEye, FaEyeSlash, FaKey, FaUserPlus } from "react-icons/fa6";
import { LuAtSign } from "react-icons/lu";

type LoginModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const LoginModal = ({ isOpen, handleClose }: LoginModalProps) => {
  const [inType, setInType] = useState("login");
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
  const [registerPasswordVisible2, setRegisterPasswordVisible2] =
    useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setInType("login");
      setLoginPasswordVisible(false);
      setRegisterPasswordVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        ref={modalRef}
        className="bg-white max-w-md w-full mx-4 rounded-xl p-6 shadow-lg relative"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <CgClose size={20} />
        </button>

        <div className="flex w-full border rounded-md my-5 overflow-hidden">
          <button
            onClick={() => setInType("login")}
            className={`w-[50%] cursor-pointer ${
              inType === "login" && "bg-black text-white py-2"
            }`}
          >
            Вход на сайт
          </button>
          <button
            onClick={() => setInType("register")}
            className={`w-[50%] cursor-pointer ${
              inType === "register" && "bg-black text-white py-2"
            }`}
          >
            Регистрация
          </button>
        </div>

        {inType === "login" ? (
          <form className="flex flex-col gap-4">
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaUserPlus size={20} />
              </div>
              <input
                type="email"
                required
                placeholder="Email или логин"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <button
                type="button"
                onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}
                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {loginPasswordVisible ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
              <input
                type={loginPasswordVisible ? "text" : "password"}
                required
                placeholder="Пароль"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 cursor-pointer scale-150"
                />
                <label htmlFor="rememberMe" className="cursor-pointer">
                  Запомнить меня
                </label>
              </div>
              <div className="">
                <button type="button" className="text-gray-600 cursor-pointer">
                  Забыли пароль?
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary cursor-pointer hover:bg-primary/70 duration-200 text-white rounded-md py-2 mt-2"
            >
              Войти
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <LuAtSign size={20} />
              </div>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <button
                type="button"
                onClick={() =>
                  setRegisterPasswordVisible(!registerPasswordVisible)
                }
                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {registerPasswordVisible ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
              <input
                type={registerPasswordVisible ? "text" : "password"}
                required
                placeholder="Пароль"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <button
                type="button"
                onClick={() =>
                  setRegisterPasswordVisible2(!registerPasswordVisible2)
                }
                className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {registerPasswordVisible2 ? (
                  <FaEyeSlash className="text-xl" />
                ) : (
                  <FaEye className="text-xl" />
                )}
              </button>
              <input
                type={registerPasswordVisible2 ? "text" : "password"}
                required
                placeholder="Подтверждение пароля"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-primary cursor-pointer hover:bg-primary/70 duration-200 text-white rounded-md py-2 mt-2"
            >
              Зарегистрироваться
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
