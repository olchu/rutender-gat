import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

export const PriceSection = props => {
  const pressMy = choice => {
    props.setChoice(choice)
    props.setShowModal(true)
  }
  return (
    <section id="price">
      <div className="container">
        <ScrollAnimation
          className="row justify-content-center text-center"
          animateIn="fadeIn"
          delay={50}
          duration={0.4}
          animateOnce
        >
          <h2 className="price-hedding">Тарифы комплексного сопровождения</h2>
        </ScrollAnimation>
        <ScrollAnimation
          className="row justify-content-center"
          animateIn="fadeIn"
          delay={50}
          duration={0.4}
          animateOnce
        >
          <div className="card-columns justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Старт
                  <span
                    className="special-price-icon"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-content="Тариф «Старт» можно купить, если вы ранее не участвовали в торгах по 44-ФЗ"
                  >
                    <i className="fas fa-star"></i>
                  </span>
                </h5>
                <p className="card-text">
                  Одна закупка из любой сферы, кроме строительной. Для новых
                  поставщиков в торгах по 44-ФЗ
                </p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">4000 ₽</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Старт'])}
                >
                  Заказать
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Простой</h5>
                <p className="card-text">
                  Одна закупка из любой сферы, кроме строительной
                </p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">12 000 ₽</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Простой'])}
                >
                  Заказать
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Деловой</h5>
                <p className="card-text">
                  Четыре закупки в любой сфере, кроме строительной
                </p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">36 000 ₽</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Деловой'])}
                >
                  Заказать
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Строительный</h5>
                <p className="card-text">Четыре закупки в строительной сфере</p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">80 000 ₽</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Строительный'])}
                >
                  Заказать
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Строительный профи</h5>
                <p className="card-text">Восемь закупок в строительной сфере</p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">140 000 ₽</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Строительный профи'])}
                >
                  Заказать
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Эксклюзив</h5>
                <p className="card-text">
                  10 000 + % от контракта по договоренности
                </p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">10 000 ₽ + %</div>
                <button
                  className="btn btn-order"
                  onClick={() => pressMy(['Тариф - Эксклюзив'])}
                >
                  Заказать
                </button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <div className="row justify-content-center ">
          <div className="col">
            <blockquote className="blockquote">
              <p className="alert ">
                В стоимость пакетов НЕ ВКЛЮЧЕНЫ: расходы на обеспечения заявок
                всех организаций, расходы на обеспечения контрактов по аукционам
              </p>
            </blockquote>
          </div>
        </div>
        <ScrollAnimation
          className="row justify-content-center text-center"
          animateIn="fadeIn"
          delay={50}
          duration={0.4}
          animateOnce
        >
          <h4 className="what-include">Что входит в сопровождение</h4>
        </ScrollAnimation>
        <div className="row justify-content-center">
          <ScrollAnimation
            className="col-sm-12 col-md-6"
            animateIn="fadeIn"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Помощь в аккредитации на ЭТП / регистрация в ЕИС</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Отправка запроса на разъяснение документов</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Анализ документации на корректность</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Составление и отправка жалобы в ФАС</div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-6"
            animateIn="fadeIn"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Составление заявки</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Подача заявки</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Проведение аукциона</div>
            </div>
            <div className="include-item">
              <FontAwesomeIcon className="price-icon" icon={faCheckCircle} />
              <div>Контроль подписания контракта</div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
