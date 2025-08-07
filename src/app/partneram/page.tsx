import React from "react";
import Container from "@/components/Container";

const Partner = () => {
  return (
    <section className="pt-5 pb-20">
      <Container>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-6">
          Партнерам
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Платим 50 000 рублей за приведенных клиентов.
        </h2>
        <a
          href="/agentam"
          className="text-blue-700 font-semibold underline mb-8 block"
        >
          Подробнее
        </a>

        <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-8">
          Интересует парсер encar.com?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          Предлагаем услуги по предоставлению актуальных данных с сайта
          encar.com. Возможности нашего парсера:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-base md:text-lg text-gray-700">
          <li>
            Парсинг новых объявлений с сайта encar.com в течение 5–10 минут
            после появления на сайте
          </li>
          <li>Удаление снятых с витрины автомобилей.</li>
          <li>Удаление объявлений по возрасту автомобиля (старше 7 лет)</li>
          <li>
            Парсинг только объявлений о продаже (не парсим лизинг, кредит и
            прочее)
          </li>
        </ul>
        <p className="text-base md:text-lg text-gray-700 mb-2">
          На вашем сайте будут только актуальные объявления с сайта encar.com в
          режиме реального времени.
        </p>
        <p className="text-base md:text-lg text-gray-700">
          Пишите в{" "}
          <a href="https://t.me/" className="text-blue-700 underline">
            Телеграмм
          </a>
        </p>
      </Container>
    </section>
  );
};

export default Partner;
