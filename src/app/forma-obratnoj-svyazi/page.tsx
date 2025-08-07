import React from "react";
import Container from "@/components/Container";

const Form = () => {
  return (
    <Container>
      <div className="max-w-[900px] mx-auto px-4 pt-8 pb-12 sm:px-2 sm:pt-4 sm:pb-20">
        <h1 className="text-2xl md:text-4xl font-semibold mb-8 sm:mb-5">
          Форма обратной связи
        </h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="name" className="text-base font-medium">
              Как Вас зовут?
              <span className="text-red-700 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded px-3 py-2 text-base w-full focus:border-primary focus:outline-none transition-colors"
              required
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base font-medium">
              Эл. почта
              <span className="text-red-700 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 text-base w-full focus:border-primary focus:outline-none transition-colors"
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-base font-medium">
              Комментарий или сообщение
            </label>
            <textarea
              id="comment"
              name="comment"
              className="border border-gray-300 rounded px-3 py-2 text-base w-full min-h-[120px] resize-y focus:border-primary focus:outline-none transition-colors"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-white rounded px-8 py-2 text-base font-semibold cursor-pointer self-start transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
