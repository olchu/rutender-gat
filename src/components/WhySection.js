import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'
//import content from '../data/whyData.json'

export const WhySection = () => {
  return (
    <section id="why">
      <div className="container">
        <div className="row justify-content-center">
          <h2>Почему мы</h2>
        </div>
        <div className="row">
          <ScrollAnimation
            className="col-sm-12 col-md-4 why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Профессиональный подход к исполнению обязательств</div>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4  why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Опыт работ с момента выхода 44-ФЗ и 223-ФЗ</div>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4  why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>
              В одном из вариантов сопровождения не берем процент от выигранного
              контракта
            </div>
          </ScrollAnimation>
        </div>
        <div className="row">
          <ScrollAnimation
            className="col-sm-12 col-md-4 why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Готовим Форму 2 по любым закупкам</div>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Юридическая поддержка в сложных случаях</div>
          </ScrollAnimation>
          <ScrollAnimation
            className="col-sm-12 col-md-4 why-wrap"
            animateIn="fadeInUp"
            delay={50}
            duration={0.4}
            animateOnce
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>
              Обеспечиваем исполнительной документацией по строительным
              контрактам
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
