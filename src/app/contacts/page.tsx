import React from 'react'
import Container from '@/components/Container'


const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-8 md:py-12">
      <Container>
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Контакты</h1>
          <div className="text-base md:text-lg mb-8 leading-relaxed space-y-3">
            <div>
              Бесплатный канал телеграмм, в котором публикуются все новые объявления с сайта encar — <b>перейти в канал <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Telegram</a></b>
            </div>
            <div>
              Группа в телеграмм для публичного обсуждения автомобилей encar-russia.ru — <b>перейти в группу <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Telegram</a></b>
            </div>
            <div>
              Любые вопросы по авто и доставке — <b>написать в <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Telegram</a></b>
            </div>
            <div>
              Написать по ватсап <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">Whatsapp</a>
            </div>
            <div>
              Наш канал на Youtube <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">encar-russia</a>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-montserrat">Наши контакты:</h2>
          <div className="text-base md:text-lg leading-relaxed space-y-2">
            <div>ИП Закиров Динар Гулемович</div>
            <div>ОГРН ИП/ИНН 320028000011158/027809568709</div>
            <div>Телефон: <a href="tel:+7" className="text-blue-600 font-semibold hover:underline">+7-XXX-XXX-XXXX</a></div>
            <div>Режим работы: Пн.-Пт. 9:00 — 18:00</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact