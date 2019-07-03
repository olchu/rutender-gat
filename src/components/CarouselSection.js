import React from 'react'

export const CarouselSection = props => {
  return (
    <section id="my-carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active slide-all slide-1">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Сопровождение тендеров с фиксированной ценой</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <p className="slide-sub-title">
                    Поможем на любом этапе: от планирования закупок до
                    подписания контракта
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    className="btn  my-2 my-sm-0 send-form"
                    onClick={props.setShowModal}
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="slide-description-options">от 1800 Р</p>
                  <span>за услугу</span>
                  <a href="#" className="all-price">
                    Все цены <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
