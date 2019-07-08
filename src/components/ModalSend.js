import React from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

export const ModalSend = props => {
  console.log('modal =', props.choice)
  const sendMail = () => {
    console.log('modal in', props.choice)
    const checkedItems = JSON.stringify(props.choice)
    console.log(checkedItems)
    axios
      .post('/action_ajax_form.php', checkedItems)
      .then(function(response) {
        console.log('secsess')
        console.log(response)
      })
      .catch(function(error) {
        console.log('error')
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
            <label for="exampleInputEmail1">Имя:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите имя"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Телефон:</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите телефон"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
