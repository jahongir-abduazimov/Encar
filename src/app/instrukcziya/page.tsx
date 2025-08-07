import React from "react";
import Container from "@/components/Container";

const Instruction = () => {
  return (
    <section className="min-h-screen bg-white py-8 md:py-12">
      <Container>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Инструкция
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-montserrat">
            Как пользоваться сайтом?
          </h2>
          <div className="text-base md:text-lg leading-relaxed space-y-4">
            <div>
              На нашем сайте представлен каталог сайта encar.com, адаптированный
              для российского пользователя.
            </div>
            <div>
              У нас вы можете выбрать авто, заказать{" "}
              <span className="font-bold">Отчет о его страховой истории.</span>
            </div>
            <div className="font-bold">
              Если вы поймёте, что готовы приобрести автомобиль, вы сможете
              связаться с нами и мы доставим выбранный вами автомобиль из Кореи
            </div>
            <div>
              Кнопка <span className="font-bold">«Показать»</span> — фильтр
              нужного вам авто. Выберите марку, модель автомобиля и другие
              важные для вас параметры.
              <br />
              Кнопка <span className="font-bold">«Подписаться»</span> — подписка
              на обновления каталога (уведомления будут приходить в Telegram или
              на e-mail)
            </div>
            <div>
              Чтобы оформить подписку на уведомления о поступлении новых
              автомобилей, соответствующих вашим критериям, вам нужно:
              <ol className="list-decimal pl-6 space-y-1 mt-2">
                <li>
                  <span className="italic">Авторизоваться на сайте.</span> Для
                  этого перейдите в{" "}
                  <span className="font-bold">Личный кабинет</span> и введите
                  e-mail. Введите в соответствующее поле код, который отправлен
                  на вашу электронную почту.
                </li>
                <li>
                  <span className="font-bold">Выбрать автомобиль</span> (их
                  может быть несколько) на ваш вкус. На{" "}
                  <span className="font-bold">Главной странице</span> подберите
                  автомобиль, который хотите приобрести (хотя бы 3 параметра).
                  Нажмите <span className="font-bold">Показать</span>. Если
                  среди показанных автомобилей нет подходящего вам, нажмите{" "}
                  <span className="font-bold">Подписаться</span>
                </li>
                <li>
                  <span className="font-bold">Выбрать период подписки.</span>{" "}
                  Стоимость подписки составляет 5 рублей в день. Выберите
                  количество дней, на которое хотите оформить подписку
                  (автоматического продления нет). Нажмите{" "}
                  <span className="font-bold">Сохранить</span>
                </li>
                <li>
                  <span className="font-bold">Оплатить подписку.</span> Это
                  можно сделать в{" "}
                  <span className="font-bold">Личном кабинете</span>.
                </li>
                <li>
                  Вы можете активировать или остановить подписку в любое удобное
                  для вас время. Для этого разверните поле{" "}
                  <span className="font-bold">
                    Подписки, Сохраненные подписки
                  </span>
                </li>
              </ol>
            </div>
            <div>
              Кнопка <span className="font-bold">«Поделиться»</span> — отправить
              понравившийся автомобиль тому, чье мнение для вас важно.
            </div>
            <div>
              Кнопка <span className="font-bold">«Очистить»</span> — сброс
              фильтров
            </div>
            <div className="font-bold mt-4">
              Фактом оказания услуги — является активация подписки или получение
              Отчета о страховой истории
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Instruction;
