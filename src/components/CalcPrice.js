import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import { ModalMessage } from './ModalMessage'
import { MyForm } from './MyForm'
import '../style/calc.scss'

import order from '../data/order.json'

export const CalcPrice = () => {
  const [showModal, setShowModal] = React.useState(false)

  const [ischecked, setChecked] = React.useState(
    order.reduce((obj, next) => {
      obj[next.title] = false
      return obj
    }, {})
  )

  const [sum, setSum] = React.useState(Number(0))

  const onChange = e => {
    setChecked({
      ...ischecked,
      [e.target.name]: e.target.checked,
    })
    if (e.target.checked) {
      setSum(Number(sum) + Number(e.target.value))
    } else {
      setSum(Number(sum) - Number(e.target.value))
    }
  }

  const clickOrder = () => {
    if (sum === 0) {
      setShowModal(true)
    }
  }
  const dataForm = {}
  console.log('calc dataForm', dataForm)
  return (
    <section id="calc">
      <div className="container">
        <form name="separate" className="separate">
          <div className="row justify-content-center text-center">
            <h2 className="price-hedding">Расчет услуг отдельно</h2>
          </div>
          <div className="row">
            <div className="col-md-6 send-col-form">
              <MyForm dataForm={dataForm} />
            </div>
            <div className="col-md-6">
              {order.map(({ title, price, value }, key) => {
                return (
                  <label key={key}>
                    <input
                      type="checkbox"
                      onChange={onChange}
                      name={title}
                      data-label={title}
                      value={value}
                    />
                    <div className="sep-item sep-item--checked">
                      <div className="sep-item-icon--checked">
                        <FontAwesomeIcon
                          className={
                            ischecked[title]
                              ? 'price-icon'
                              : 'price-icon-unchecked'
                          }
                          icon={ischecked[title] ? faCheckCircle : faCircle}
                        />
                      </div>
                      <div>{title}</div>
                      <span>{price}</span>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>
        </form>

        <div className="row">
          <div className="sum">
            Итоговая стоимость:
            <span id="sum">
              {sum === Number(0) ? 'Выберете услуги' : `${sum} ₽`}
            </span>
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-outline my-2 my-sm-0 send-form-outline"
            onClick={clickOrder}
          >
            Заказать
          </button>
        </div>
      </div>
      <ModalMessage
        show={showModal}
        toggle={() => setShowModal(!showModal)}
        message={'Вы не выбрали ни одной услуги'}
      />
    </section>
  )
}
