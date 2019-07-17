import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import { ModalMessage } from './ModalMessage'
import { MyForm } from './MyForm'
import axios from 'axios'
import '../style/calc.scss'

import order from '../data/order.json'

const sendMail = (dataForm, checkedItems, responseFunc) => {
  axios
    .post('../action_ajax_form.php', {
      name: dataForm.name,
      phone: dataForm.phone,
      email: dataForm.email,
      checkedItems: checkedItems,
    })
    .then(function(response) {
      responseFunc()
    })
    .catch(function(error) {})
}

export const CalcPrice = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [ischecked, setChecked] = React.useState(
    order.reduce((obj, next) => {
      obj[next.title] = false
      return obj
    }, {})
  )
  const [sum, setSum] = React.useState(0)
  const [dataForm, setDataForm] = React.useState({})
  const [isResetDataForm, resetDataForm] = React.useState(false)

  const onInputChange = e => {
    setChecked({
      ...ischecked,
      [e.target.name]: e.target.checked,
    })
    if (e.target.checked) {
      setSum(sum + Number(e.target.value))
    } else {
      setSum(sum - Number(e.target.value))
    }
  }

  const responseFunc = () => {
    resetDataForm(true)
    setChecked(
      order.reduce((obj, next) => {
        obj[next.title] = false
        return obj
      }, {})
    )
    setSum(0)
  }

  const clickOrder = () => {
    if (sum === 0) {
      setShowModal(true)
      return null
    }
    const checkedItems = order.reduce((obj, next) => {
      if (ischecked[next.title]) {
        obj.push(next.title)
      }
      return obj
    }, [])
    sendMail(dataForm, checkedItems, responseFunc)
    resetDataForm(false)
  }

  return (
    <section id="calc">
      <div className="container">
        <div name="separate" className="separate">
          <div className="row justify-content-center text-center">
            <h2 className="price-hedding">Расчет услуг отдельно</h2>
          </div>
          <div className="row">
            <div className="col-md-6 send-col-form">
              <MyForm
                getDataForm={dataForm => setDataForm(dataForm)}
                isSubmitted={isResetDataForm}
              />
            </div>
            <div className="col-md-6">
              {order.map(({ title, price, value }, key) => {
                return (
                  <label key={key}>
                    <input
                      type="checkbox"
                      onChange={onInputChange}
                      name={title}
                      data-label={title}
                      value={value}
                      checked={ischecked[title]}
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
        </div>

        <div className="row">
          <div className="sum">
            Итоговая стоимость:
            <span id="sum">{sum === 0 ? 'Выберете услуги' : `${sum} ₽`}</span>
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
