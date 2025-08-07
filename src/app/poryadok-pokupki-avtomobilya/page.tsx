import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const PurchaseProcedure = () => {
  return (
    <section className="pt-5 pb-20">
      <Container>
        <h1 className="text-[30px] leading-[120%] md:text-[40px] mb-3">
          Порядок покупки и доставки автомобиля из Кореи
        </h1>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            1. Подбор автомобиля на сайте
          </h2>
          <p className="leading-[120%]">1. Самостоятельный поиск:</p>
          <p className="leading-[120%]">
            — Изучите каталог на нашем сайте, используя фильтры (марка, год
            выпуска, цена и т.д.).
          </p>
          <p className="leading-[120%]">
            — Нажмите кнопку «Задать вопрос по авто» или свяжитесь с менеджером
            для уточнения деталей в{" "}
            <Link href={"https://t.me/"} className="text-blue-500">
              телеграмм
            </Link>
            .
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            2. Заключение договора и предоплата
          </h2>
          <p className="leading-[120%]">1. Оформление договора:</p>
          <p className="leading-[120%]">
            — После выбора авто менеджер подготовит договор.
          </p>
          <p className="leading-[120%]">
            — Внесите предоплату 100 000 рублей (сумма засчитывается в стоимость
            авто).
          </p>
          <p className="leading-[120%]">2. Что входит в предоплату:</p>
          <p className="leading-[120%]">— Бронирование авто.</p>
          <p className="leading-[120%]">— Проверка на участие в ДТП.</p>
          <p className="leading-[120%]">— Сопровождение сделки.</p>
          <p className="leading-[120%]">2. Документы:</p>{" "}
          <p className="leading-[120%]">
            — Отправьте менеджеру сканы паспорта и иных документов (список
            уточните у менеджера).
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            3. Проверка автомобиля
          </h2>
          <p className="leading-[120%]">1. Анализ страховых баз:</p>
          <p className="leading-[120%]">
            — Проверка авто на наличие страховых выплат и аварий.
          </p>
          <p className="leading-[120%]">2. Выезд на осмотр:</p>
          <p className="leading-[120%]">— Организуем осмотр в Корее.</p>
          <p className="leading-[120%]">— Вам предоставят.</p>
          <p className="leading-[120%]">— Фото- и видеоотчет.</p>
          <p className="leading-[120%]">
            — Данные замера толщины ЛКП (лакокрасочного покрытия).
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            4. Подтверждение сделки и оплата
          </h2>
          <p className="leading-[120%]">1. Если авто подходит:</p>
          <p className="leading-[120%]">— Автомобиль бронируется на 7 дней.</p>
          <p className="leading-[120%]">— В течение этого срока оплатите:</p>
          <p className="leading-[120%]">— Остаток стоимости авто.</p>
          <p className="leading-[120%]">— Доставку до Владивостока.</p>
          <p className="leading-[120%]">2. Важно:</p>
          <p className="leading-[120%]">
            — При отказе или задержке оплаты предоплата не возвращается.
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            5. Покупка и отправка авто
          </h2>
          <p className="leading-[120%]">1. Подготовка к перевозке:</p>
          <p className="leading-[120%]">
            — Авто выкупается и перегоняется на нашу стоянку.
          </p>
          <p className="leading-[120%]">
            — Вы получите инструкции по документам для растаможки.
          </p>
          <p className="leading-[120%]">2. Отправка в Россию:</p>
          <p className="leading-[120%]">
            — Грузим авто в контейнер (срок формирования группы — до 14 дней).
          </p>
          <p className="leading-[120%]">Доставка до Владивостока: ~14 суток.</p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            6. Таможенная очистка
          </h2>
          <p className="leading-[120%]">1. Оплата сборов:</p>
          <p className="leading-[120%]">
            — Через 2–4 дня после выгрузки оплатите.
          </p>
          <p className="leading-[120%]">— Таможенные платежи (через банк).</p>
          <p className="leading-[120%]">— Утильсбор (через банк).</p>
          <p className="leading-[120%]">2. Сроки растаможки:</p>
          <p className="leading-[120%]">3–5 рабочих дней.</p>
          <p className="leading-[120%]">После этого вы получите.</p>
          <p className="leading-[120%]">Электронный ПТС и СБКТС.</p>
          <p className="leading-[120%]">
            Оригиналы документов (в перчаточном ящике авто).
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            7. Получение автомобиля
          </h2>
          <p className="leading-[120%]">1. Хранение:</p>
          <p className="leading-[120%]">
            — Стоимость: 150 руб./сутки (платная стоянка во Владивостоке).
          </p>
          <p className="leading-[120%]">2. Варианты получения:</p>
          <p className="leading-[120%]">
            — Самовывоз: Заберите авто по паспорту.
          </p>
          <p className="leading-[120%]">
            — Доставка в ваш город: Оплачивается отдельно (зависит от расстояния
            и габаритов).
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            Важные примечания
          </h2>
          <p className="leading-[120%]">
            — ✔️ Расчет стоимости (авто + доставка до Владивостока + растаможка)
            предоставляется до подписания договора.
          </p>
          <p className="leading-[120%]">
            — ⚠️ Все этапы согласовываются с менеджером — не стесняйтесь
            задавать вопросы!
          </p>
          <p className="leading-[120%]">—</p>
          <p className="leading-[120%]">Готовы начать?</p>
          <p className="leading-[120%]">
            Начните с поиска авто на нашем сайте:{" "}
            <Link href={"/search-auto"} className="text-red-400">
              Вперед
            </Link>
          </p>
        </div>
        {/* <div className="mb-7">
          <h2 className="text-2xl md:text-3xl italic font-semibold mb-3">
            Обратите внимание!!!
          </h2>
          <p className="leading-[120%]">
            В случае транспортировки авто без защитной пленки наша компания не
            несет ответственности за сколы и повреждения кузова и стекла от
            камней и мелкого мусора
          </p>
          <p>Дополнительные услуги:</p>
          <p>● Бронирование кузова плёнкой от 27 000 рублей</p>
          <p>● Защита кузова одноразовой плёнкой от 15 000 рублей.</p>
          <p>● Растонировку лобового и передних стекол с удалением клея 5000 рублей</p>
          <p>● Отключение системы AdBlue (мочевина) и отключение клапана ЕГР- 25000 рублей</p>
          <p>● Отключение системы AdBlue (мочевина), отключение клапана ЕГР и чип тюнинг автомобиля- 35000 рублей</p>
          <p>● Русификация BMW (без карт)- от 12000 рублей</p>
          <p>● Русификация AUDI- от 18000 рублей</p>
          <p>● Русификация SsanYong (Rexton и Korando)- от 12000 рублей</p>
          <p>● Русификация Porsche- от 18000 рублей</p>
          <p>● Русификация Volkswagen- от 18000 рублей</p>
        </div> */}
      </Container>
    </section>
  );
};

export default PurchaseProcedure;
