import React from "react";
import Container from "@/components/Container";

const Agents = () => {
  return (
    <section className="pt-5 pb-20">
      <Container>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-6">
          Агентам
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Заключение агентского договора с Encar Russia
        </h2>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Зарабатывайте с каждым клиентом –{" "}
          <span className="font-bold">50 000 рублей за сделку!</span>
        </h3>
        <p className="text-base md:text-lg mb-4">
          Приводите покупателей в ENCAR Russia и получайте{" "}
          <span className="font-bold">50 000 рублей</span> за каждого, кто
          приобретёт автомобиль!
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-base md:text-lg">
          <li>
            <span className="font-bold text-blue-700">Просто:</span> ваш клиент
            покупает машину – вы получаете вознаграждение.
          </li>
          <li>
            <span className="font-bold text-blue-700">Выгодно:</span> 50 000
            рублей за одну успешную сделку.
          </li>
          <li>
            <span className="font-bold text-blue-700">Гарантируем:</span> оплата
            сразу после получения клиентом автомобиля.
          </li>
        </ul>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Что нужно сделать, чтобы начать зарабатывать?
        </h3>
        <ol className="list-decimal pl-5 mb-4 space-y-1 text-base md:text-lg">
          {/* <li>
            Скачайте шаблон агентского договора –{" "}
            <a href="#" className="text-blue-700 underline font-semibold">
              Агентский договор для партнеров
            </a>
          </li> */}
          <li>Заполните необходимые данные.</li>
          <li>
            Отправьте подписанный договор в{" "}
            <a
              href="https://t.me/"
              className="text-blue-700 underline font-semibold"
            >
              Телеграм
            </a>
          </li>
          <li>Присылайте отчет агента (контакты потенциальных покупателей)</li>
        </ol>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Остались вопросы?
        </h3>
        <p className="text-base md:text-lg mb-4">Напишите нам в Телеграм</p>

        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Заключайте агентский договор прямо сейчас и начните зарабатывать
        </h3>
        <p className="text-base md:text-lg mb-4">
          Мы рады продуктивному сотрудничеству!{" "}
          <span className="inline-block">🚗💼</span>
        </p>
        <hr className="my-6" />
        <p className="text-base md:text-lg font-semibold">
          Привлекайте клиентов, получайте деньги –{" "}
          <span className="font-bold">ваш доход без лишних хлопот!</span>
        </p>
      </Container>
    </section>
  );
};

export default Agents;
