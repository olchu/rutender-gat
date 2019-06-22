import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import content from '../data/whyData.json'

export const WhySection = () => {
  return (
    <section id="why">
      <div className="container">
        <div className="row justify-content-center">
          <h2>Почему мы</h2>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-4 why-wrap"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Профессиональный подход к исполнению обязательств</div>
          </div>
          <div
            className="col-sm-12 col-md-4  why-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Опыт работ с момента выхода 44-ФЗ и 223-ФЗ</div>
          </div>
          <div
            className="col-sm-12 col-md-4  why-wrap"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>
              В одном из вариантов сопровождения не берем процент от выигранного
              контракта
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-4 why-wrap"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Готовим Форму 2 по любым закупкам</div>
          </div>
          <div
            className="col-sm-12 col-md-4 why-wrap"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>Юридическая поддержка в сложных случаях</div>
          </div>
          <div
            className="col-sm-12 col-md-4 why-wrap"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <FontAwesomeIcon className="why-icon" icon={faCheckCircle} />
            <div>
              Обеспечиваем исполнительной документацией по строительным
              контрактам
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
