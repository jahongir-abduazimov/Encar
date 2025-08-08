"use client";

import React, { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent as ReactMouseEvent } from "react";
import { AxiosError } from "axios";
import { CgClose } from "react-icons/cg";
import { FaEye, FaEyeSlash, FaKey, FaUserPlus } from "react-icons/fa6";
import { LuAtSign } from "react-icons/lu";
import request from "@/components/config";
import { ApiError } from "@/types";

type LoginModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const LoginModal = ({ isOpen, handleClose }: LoginModalProps) => {
  const [inType, setInType] = useState("login");
  const [isError, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);
  const [registerPasswordVisible, setRegisterPasswordVisible] = useState(false);
  const [registerPasswordVisible2, setRegisterPasswordVisible2] =
    useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPassword2, setRegisterPassword2] = useState("");

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

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      email: loginEmail,
      password: loginPassword,
    };
    setLoading(true);
    try {
      const res = await request.post("/auth/login/", newData);
      localStorage.setItem("auth", res.data.access);
      window.location.reload();
    } catch (error) {
      const err = error as AxiosError;
      if (err.status == 401) {
        setIsError("ОШИБКА: неверные учётные данные для входа в систему.");
      } else {
        setIsError("Произошла ошибка.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      email: registerEmail,
      password: registerPassword,
      confirm_password: registerPassword2,
    };
    setRegisterLoading(true);
    try {
      const res = await request.post("/auth/register/", newData);
      localStorage.setItem("auth", res.data.access);
      window.location.reload();
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      if (err.response?.data?.email) {
        setIsError(
          "Пользователь с таким адресом электронной почты уже существует"
        );
      } else if (err.response?.data?.non_field_errors) {
        setIsError("Два пароля должны быть одинаковыми.");
      } else {
        setIsError("Произошла ошибка.");
      }
    } finally {
      setRegisterLoading(false);
    }
  };

  const sendEmail = (e:any) => {
    e.preventDefault()
    console.log(e);
  }

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
            className={`w-[50%] cursor-pointer py-2 ${
              inType === "login" && "bg-black text-white"
            }`}
          >
            Вход на сайт
          </button>
          <button
            onClick={() => setInType("register")}
            className={`w-[50%] cursor-pointer py-2 ${
              inType === "register" && "bg-black text-white"
            }`}
          >
            Регистрация
          </button>
        </div>

        {isError && (
          <div className="w-full bg-red-200 px-2 mb-4">
            <p className="text-red-700">{isError}</p>
          </div>
        )}

        {inType === "login" ? (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaUserPlus size={20} />
              </div>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                placeholder="Email или логин"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <input
                type={loginPasswordVisible ? "text" : "password"}
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                placeholder="Пароль"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
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
            </div>
            <div className="flex justify-between items-center">
              {/* <div>
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 cursor-pointer scale-150"
                />
                <label htmlFor="rememberMe" className="cursor-pointer">
                  Запомнить меня
                </label>
              </div> */}
              <div className="">
                <button
                  onClick={() => setInType("forgotPassword")}
                  type="button"
                  className="text-gray-600 cursor-pointer"
                >
                  Забыли пароль?
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`duration-200 text-white rounded-md py-2 mt-2 ${
                loading
                  ? "bg-gray-400"
                  : "bg-primary cursor-pointer hover:bg-primary/70"
              }`}
            >
              Войти
            </button>
          </form>
        ) : inType === "register" ? (
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <LuAtSign size={20} />
              </div>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <input
                type={registerPasswordVisible ? "text" : "password"}
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Пароль"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
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
            </div>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaKey />
              </div>
              <input
                type={registerPasswordVisible2 ? "text" : "password"}
                value={registerPassword2}
                onChange={(e) => setRegisterPassword2(e.target.value)}
                required
                minLength={6}
                placeholder="Подтверждение пароля"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
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
            </div>
            <button
              type="submit"
              disabled={registerLoading}
              className={`duration-200 text-white rounded-md py-2 mt-2 ${
                registerLoading
                  ? "bg-gray-400"
                  : "bg-primary cursor-pointer hover:bg-primary/70"
              }`}
            >
              Зарегистрироваться
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={sendEmail}>
            <p className="text-sm">
              Забыли пароль? Пожалуйста, введите ваше адрес
              электронной почты. Вы получите ссылку для создания нового пароля
              по электронной почте.
            </p>
            <div className="w-full relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <LuAtSign size={20} />
              </div>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                placeholder="Email"
                className="w-full border border-gray-400 focus:border-black rounded-md pl-11 pr-4 py-2 outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={registerLoading}
              className={`duration-200 text-white rounded-md py-2 mt-2 ${
                registerLoading
                  ? "bg-gray-400"
                  : "bg-primary cursor-pointer hover:bg-primary/70"
              }`}
            >
              Отправить
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
