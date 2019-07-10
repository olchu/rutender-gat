import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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
        <ScrollAnimation
          className="row"
          animateIn="fadeInLeft"
          duration={0.5}
          animateOnce
        >
          <div className="col">
            <div className="title">Аккредитация на ЭТП</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="row service-row justify-content-center"
          animateIn="fadeIn"
          delay={50}
          duration={0.4}
          animateOnce
        >
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={info}
              alt="Регистрация в ЕИС и ЕСИА Госуслуг"
              className="service-icon"
            />
            <p className="service-description">
              Регистрация в ЕИС и ЕСИА Госуслуг
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={notebook}
              alt="Аккредитация на коммерческой ЭТП"
              className="service-icon"
            />
            <p className="service-description">
              Аккредитация на коммерческой ЭТП
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={usb}
              alt="Регистрация сертификата на ЭТП"
              className="service-icon"
            />
            <p className="service-description">
              Регистрация сертификата на ЭТП
            </p>
          </ScrollAnimation>
        </ScrollAnimation>
        <ScrollAnimation
          className="row"
          animateIn="fadeInLeft"
          duration={0.5}
          animateOnce
        >
          <div className="col">
            <div className="title">Сопровождение торгов</div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          className="row justify-content-center service-row"
          animateIn="fadeIn"
          delay={50}
          duration={0.4}
          animateOnce
        >
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img src={search} alt="Поиск заказа" className="service-icon" />
            <p className="service-description">Поиск заказа</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={reciept}
              alt="Составление заявки, запросы на разъяснение"
              className="service-icon"
            />
            <p className="service-description">
              Составление заявки, запросы на разъяснение
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={send}
              alt="Размещение заявки на площадке"
              className="service-icon"
            />
            <p className="service-description">Размещение заявки на площадке</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img src={torg} alt="Участие в тендере" className="service-icon" />
            <p className="service-description">Участие в тендере</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img src={fas} alt="Подача жалоб в ФАС" className="service-icon" />
            <p className="service-description">Подача жалоб в ФАС</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={hands}
              alt="Подписание контракта"
              className="service-icon"
            />
            <p className="service-description">Подписание контракта</p>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 text-center"
            animateIn="fadeInUp"
            delay={70}
            duration={0.3}
            animateOnce
          >
            <img
              src={bag}
              alt="Сопровождение торгов в комплексе"
              className="service-icon"
            />
            <p className="service-description">
              Сопровождение торгов в комплексе
            </p>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </section>
  )
}
