import React from 'react'

export const PriceSection = () => {
  return (
    <section id="price">
      <div className="container">
        <div
          className="row justify-content-center text-center"
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h2 className="price-hedding">Тарифы комплексного сопровождения</h2>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-out"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
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
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
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
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
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
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Строительный</h5>
                <p className="card-text">Четыре закупки в строительной сфере</p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">80 000 ₽</div>
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Строительный профи</h5>
                <p className="card-text">Восемь закупок в строительной сфере</p>
              </div>
              <div className="  card-price text-center">
                <div className="price-value">140 000 ₽</div>
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
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
                <a
                  href="#"
                  className="btn btn-order"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Заказать
                </a>
              </div>
            </div>
          </div>
        </div>
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
        <div
          className="row justify-content-center text-center"
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h4 className="what-include">Что входит в сопровождение</h4>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-sm-12 col-md-6"
            data-aos="fade-out"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Помощь в аккредитации на ЭТП / регистрация в ЕИС</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Отправка запроса на разъяснение документов</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Анализ документации на корректность</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Составление и отправка жалобы в ФАС</div>
            </div>
          </div>
          <div
            className="col-sm-12 col-md-6"
            data-aos="fade-out"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Составление заявки</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Подача заявки</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Проведение аукциона</div>
            </div>
            <div className="include-item">
              <i className="far fa-check-circle price-icon"></i>
              <div>Контроль подписания контракта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}