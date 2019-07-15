import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons'
import '../style/calc.scss'

const order = [
  {
    title: 'Регистрация в ЕИС и ЕСИА Госуслуг',
    price: '5 000 ₽',
    value: 5000,
    checked: false,
    id: 0,
  },
  {
    title: 'Аккредитация на коммерческой ЭТП',
    price: '3 000 ₽',
    value: 3000,
    checked: true,
    id: 1,
  },
]
export const CalcPrice = () => {
  // const [sum, setSum] = React.useState(0)

  // const summPlus = num => {
  //   setSum(sum + num)
  // }
  // const summMinus = num => {
  //   setSum(sum - num)
  // }

  const [ischecked, setChecked] = React.useState(() => {
    let obj = []
    obj = order.map(item => {
      return item.checked
    })
    return obj
  })

  console.log('state', ischecked)

  /*  const inputChange = key => {
    setChecked(() => {
    let obj=[]
    obj = ischecked.map(item =>{
      if item
      return
    })
    })
  } */

  return (
    <section id="calc">
      <div className="container">
        <form name="separate" className="separate">
          <div className="row justify-content-center text-center">
            <h2 className="price-hedding">Расчет услуг отдельно</h2>
          </div>
          <div className="row">
            <div className="col-md-6 send-col-form">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Имя:</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введите имя"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Телефон:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введите телефон"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Введите email"
                  name="email"
                />
              </div>
            </div>
            <div className="col-md-6">
              {order.map(item => {
                return (
                  <label key={item}>
                    <input
                      type="checkbox"
                      onChange={e => {
                        setChecked(ischecked => {
                          let obj = []
                          obj = ischecked.map(key => {
                            return item === key ? !ischecked[key] : key
                          })
                          return obj
                        })
                      }}
                      checked={ischecked[item]}
                      data-label={item.title}
                    />
                    <div className="sep-item sep-item--checked">
                      <div className="sep-item-icon--checked">
                        <FontAwesomeIcon
                          className="price-icon"
                          icon={item.checked ? faCheckCircle : faCircle}
                        />
                      </div>
                      <div>{item.title}</div>
                      <span>{item.price}</span>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>
        </form>

        <div className="row">
          <div className="sum">
            Итоговая стоимость: <span id="sum"> Выберете услуги </span>
          </div>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-outline my-2 my-sm-0 send-form-outline"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Заказать
          </button>
        </div>
      </div>
    </section>
  )
}
