import React from 'react'
import info from '../images/info.png'
import notebook from '../images/notebook.png'
import usb from '../images/usb.png'
import search from '../images/search.png'
import reciept from '../images/reciept.png'
import send from '../images/send.png'
import torg from '../images/torg.png'
import fas from '../images/fas.png'
import hands from '../images/hands.png'
import bag from '../images/bag.png'

export const ServiceSection = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="row justify-content-center">
          <h2>Услуги</h2>
        </div>
        <div
          className="row"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="col">
            <div className="title">Аккредитация на ЭТП</div>
          </div>
        </div>
        <div
          className="row service-row justify-content-center"
          data-aos="fade-in"
          data-aos-delay="100"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            <img
              src={info}
              alt="Регистрация в ЕИС и ЕСИА Госуслуг"
              className="service-icon"
            />
            <p className="service-description">
              Регистрация в ЕИС и ЕСИА Госуслуг
            </p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={notebook}
              alt="Аккредитация на коммерческой ЭТП"
              className="service-icon"
            />
            <p className="service-description">
              Аккредитация на коммерческой ЭТП
            </p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={usb}
              alt="Регистрация сертификата на ЭТП"
              className="service-icon"
            />
            <p className="service-description">
              Регистрация сертификата на ЭТП
            </p>
          </div>
        </div>
        <div
          className="row"
          data-aos="fade-right"
          data-aos-easing="fade-in-out"
          data-aos-once="true"
        >
          <div className="col">
            <div className="title">Сопровождение торгов</div>
          </div>
        </div>
        <div
          className="row justify-content-center service-row"
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img src={search} alt="Поиск заказа" className="service-icon" />
            <p className="service-description">Поиск заказа</p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={reciept}
              alt="Составление заявки, запросы на разъяснение"
              className="service-icon"
            />
            <p className="service-description">
              Составление заявки, запросы на разъяснение
            </p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={send}
              alt="Размещение заявки на площадке"
              className="service-icon"
            />
            <p className="service-description">Размещение заявки на площадке</p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img src={torg} alt="Участие в тендере" className="service-icon" />
            <p className="service-description">Участие в тендере</p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img src={fas} alt="Подача жалоб в ФАС" className="service-icon" />
            <p className="service-description">Подача жалоб в ФАС</p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="slide-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={hands}
              alt="Подписание контракта"
              className="service-icon"
            />
            <p className="service-description">Подписание контракта</p>
          </div>
          <div
            className="col-sm-12 col-md-4 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={bag}
              alt="Сопровождение торгов в комплексе"
              className="service-icon"
            />
            <p className="service-description">
              Сопровождение торгов в комплексе
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
