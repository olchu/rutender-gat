import React from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

export const ModalSend = props => {
  const name = 'oleg'
  const phone = '896372709070'
  const email = 'ochjj'

  const checkedItems = props.choice
  const sendMail = () => {
    axios
      .post('http://kontaklt.beget.tech/action_ajax_form.php', {
        name: name,
        phone: phone,
        email: email,
        checkedItems: checkedItems,
      })
      .then(function(response) {
        console.log(response)
        props.handleClose()
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Оформить заявку</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Имя:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Введите имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Телефон:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Введите телефон"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Введите email"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-order" onClick={sendMail}>
          Заказать
        </button>
      </Modal.Footer>
    </Modal>
  )
}
