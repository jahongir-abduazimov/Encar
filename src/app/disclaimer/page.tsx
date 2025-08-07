import React from "react";
import Container from "@/components/Container";

const Disclaimer = () => {
  return (
    <section className="min-h-screen bg-white py-8 md:py-12">
      <Container>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Отказ от ответственности
          </h1>
          <div className="text-base md:text-lg mb-8 leading-relaxed">
            <div className="mb-4">Уважаемые пользователи!</div>
            <div className="mb-4">
              Сайт{" "}
              <span className="text-blue-700">https://encar-russia.ru</span>{" "}
              является информационным ресурсом, предоставляющим переведённую на
              русский язык информацию с официального южнокорейского сайта{" "}
              <span className="font-bold">encar.com</span>. Наша цель —
              упростить доступ российских пользователей к информации о продаже
              автомобилей в Корее, представленной на encar.com.
            </div>
            <div className="font-semibold mb-2">Важное уведомление:</div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Вся информация о транспортных средствах (включая, но не
                ограничиваясь: описания, характеристики, пробег, техническое
                состояние, история обслуживания и т.д.), опубликованная на сайте
                encar.com и переведённая на русский язык для сайта
                encar-russia.ru,{" "}
                <span className="font-bold">
                  предоставляется дилерами и продавцами, размещающими объявления
                  на платформе encar.com.
                </span>
              </li>
              <li>
                <span className="font-bold">
                  Мы не являемся продавцами или официальными представителями
                  encar.com
                </span>
                , не участвуем в формировании описания транспортных средств и{" "}
                <span className="font-bold">
                  не несём ответственности за достоверность, полноту или
                  актуальность информации
                </span>
                , предоставленной третьими лицами на исходном сайте.
              </li>
              <li>
                Перевод может содержать неточности, обусловленные спецификой
                языка, различиями в терминологии или автоматическим переводом.
                Мы прилагаем усилия для корректной адаптации информации, однако{" "}
                <span className="font-bold">
                  не можем гарантировать точность перевода каждого элемента
                  объявления.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              Используя сайт encar-russia.ru, вы подтверждаете своё согласие с
              настоящим отказом от ответственности и понимаете, что вся
              информация предоставляется{" "}
              <span className="font-bold">«как есть»</span> без каких-либо
              гарантий со стороны владельцев ресурса encar-russia.ru.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Disclaimer;
