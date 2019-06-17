import React from "react"

export const CarouselSection = () => {
  return (
    <section id="my-carousel">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active slide-all slide-1">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1>Сопровождение тендеров с фиксированной ценой</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <p class="slide-sub-title">
                    Поможем на любом этапе: от планирования закупок до
                    подписания контракта
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button
                    type="button"
                    class="btn  my-2 my-sm-0 send-form"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="slide-description-options">от 1800 Р</p>
                  <span>за услугу</span>
                  <a href="#" class="all-price">
                    Все цены <i class="fas fa-chevron-right"></i>
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
