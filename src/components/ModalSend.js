import React from 'react'
import Modal from 'react-bootstrap/Modal'

export const ModalSend = props => {
  //const { choice } = props
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
        <button className="btn btn-order" onClick={props.handleClose}>
          Заказать
        </button>
      </Modal.Footer>
    </Modal>
  )
}
