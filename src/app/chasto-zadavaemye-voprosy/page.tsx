import React from "react";
import Container from "@/components/Container";

const FAQ = () => {
  return (
    <section className="pt-5 pb-20">
      <Container>
        <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mb-6">
          Часто задаваемые вопросы
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Какой срок доставки?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              В зимнее время года 1,5–2 месяца, в летнее — 30–40 дней
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Страхуется ли машина?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Машина страхуется от момента покупки у продавца до Владивостока на
              всех этапах. Страховку при доставке автовозом по России можно
              заказать дополнительно
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Как проходит оплата?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-2">
              Есть несколько вариантов оплаты за автомобиль в Корее:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-base md:text-lg text-gray-700">
              <li>Наличными через наших представителей в крупных городах</li>
              <li>Через аккредитив Сбербанка по Безопасной Сделке</li>
              <li>В USDT</li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Как вы производите осмотр автомобиля?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Мы проверяем лакокрасочное покрытие, смотрим салон, смотрим
              подвеску, смотрим двигатель на подтёки. Проверяем соответствие
              документов автомобилю.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Могу ли я запросить дополнительную проверку?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Можем произвести полную диагностику автомобиля у официального
              дилера. Это платная услуга.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Как происходит процесс покупки
            </h2>
            <ol className="list-decimal pl-5 space-y-1 text-base md:text-lg text-gray-700">
              <li>
                Заключаем договор. Договор подписываем электронной подписью
                через сервис podpisium.ru
              </li>
              <li>Вносите предоплату по договору</li>
              <li>
                Мы осматриваем автомобиль. Если он соответствует описанию и вас
                все устраивает, то бронируем автомобиль. Если что-то в машине не
                устроило после осмотра, то подбираем другой вариант или
                возвращаем предоплату.
              </li>
              <li>
                Оплачиваете автомобиль. Мы выкупаем и отправляем автомобиль во
                Владивосток
              </li>
              <li>Оплачиваете лабораторные расходы, получаете документы.</li>
              <li>Оплачиваете автовоз, отправляем в ваш город</li>
            </ol>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              На кого оформляется автомобиль?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Автомобиль оформляется на вас, чтобы избежать повышенного
              утилизационного сбора
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Объявления на сайте актуальные?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Если объявление есть на нашем сайте, то оно актуально. Как только
              машина продана или продавец снял его с продажи, объявление
              исчезает с нашего сайта. Ежедневно на сайт добавляется 1–2 тысячи
              объявлений, столько же снимается.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Что такое «проходной» автомобиль?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Автомобиль в возрасте от 3 до 5 лет при ввозе из-за границы имеет
              минимальную ставку таможенных пошлин, поэтому переплата самым
              выгодным для покупателя.
            </p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Машины приходят русифицированные?
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Нет. Русифицировать можно за дополнительную плату при наличии
              технической возможности. Подробности у{" "}
              <span className="text-red-600 font-semibold">менеджера</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
