import request from "@/components/config";
import React, { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonLoading1, setButtonLoading1] = useState(false);
  const [buttonLoading2, setButtonLoading2] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [infoSuccess, setInfoSuccess] = useState(false);
  const editData = async (e: any) => {
    setButtonLoading1(true);
    e.preventDefault();
    const newData = {
      full_name: name,
      email,
      phone,
    };
    try {
      await request.patch("/auth/profile/update/", newData);
      setInfoSuccess(true);
      setTimeout(() => setInfoSuccess(false), 5000);
    } catch (e) {
      console.error(e);
    } finally {
      setButtonLoading1(false);
    }
  };
  const editPassword = async (e: any) => {
    e.preventDefault();
    setPasswordError("");
    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
      return;
    }
    setButtonLoading2(true);
    const newData = {
      password,
    };
    try {
      await request.patch("/auth/profile/update/", newData);
      setPasswordSuccess(true);
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => setPasswordSuccess(false), 5000);
    } catch (e) {
      console.error(e);
    } finally {
      setButtonLoading2(false);
    }
  };
  const getData = async () => {
    try {
      const res = await request.get("/auth/profile/");
      setName(res.data.full_name ? res.data.full_name : "");
      setEmail(res.data.email ? res.data.email : "");
      setPhone(res.data.phone ? res.data.phone : "");
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p className="text-xl mb-4">Настройки пользователя</p>
      <p className="text-2xl mb-3">Личные данные</p>
      <form onSubmit={editData}>
        {infoSuccess && (
          <div className="mb-2 text-green-600 bg-green-100 border border-green-300 rounded px-3 py-2 text-sm">
            Информация успешно изменена
          </div>
        )}
        <div className="w-full lg:max-w-[60%] flex flex-col items-start gap-4 mb-10">
          <div className="w-full flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
            <p>Имя:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-400 outline-none text-gray-500 rounded-md px-3 py-1 w-full md:w-[300px]"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
            <p>Email:</p>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 outline-none text-gray-500 rounded-md px-3 py-1 w-full md:w-[300px]"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
            <p>Телефон:</p>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-400 outline-none text-gray-500 rounded-md px-3 py-1 w-full md:w-[300px]"
            />
          </div>
          <button
            disabled={buttonLoading1}
            className={`duration-200 text-white px-7 py-1.5 rounded-md font-semibold ${buttonLoading1 ? "bg-black/70" : "bg-black cursor-pointer"
              }`}
          >
            Сохранить
          </button>
        </div>
      </form>
      <p className="text-2xl mb-3">Пароль и безопасность</p>
      <form onSubmit={editPassword}>
        {passwordSuccess && (
          <div className="mb-2 text-green-600 bg-green-100 border border-green-300 rounded px-3 py-2 text-sm">
            Пароль успешно изменён
          </div>
        )}
        <div className="w-full lg:max-w-[60%] flex flex-col items-start gap-4 mb-10">
          <div className="w-full flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
            <p>Новый пароль:</p>
            <div className="relative w-full md:w-[300px]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                minLength={6}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 outline-none text-gray-500 rounded-md px-3 py-1 w-full pr-10"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer text-xl text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <LuEyeOff /> : <LuEye />}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
            <p>Подтверждение пароля:</p>
            <div className="w-full md:w-[300px]">
              <div className="relative w-full md:w-[300px]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border border-gray-400 outline-none text-gray-500 rounded-md px-3 py-1 w-full pr-10"
                />
                <span
                  className="absolute right-2 top-2 cursor-pointer text-xl text-gray-500"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <LuEyeOff /> : <LuEye />}
                </span>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
          </div>
          <button
            disabled={buttonLoading2}
            className={`duration-200 text-white px-7 py-1.5 rounded-md font-semibold ${buttonLoading2 ? "bg-black/70" : "bg-black cursor-pointer"
              }`}
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
