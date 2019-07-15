import React from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'

export const ModalSend = props => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')

  const updateState = (e, setState) => {
    setState(e.target.value)
  }

  const resetForm = () => {
    setName('')
    setPhone('')
    setEmail('')
  }

  const checkedItems = props.choice
  const sendMail = () => {
    axios
      .post('./action_ajax_form.php', {
        name: name,
        phone: phone,
        email: email,
        checkedItems: checkedItems,
      })
      .then(function(response) {
        props.handleClose()
        resetForm()
      })
      .catch(function(error) {})
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
              value={name}
              onChange={e => updateState(e, setName)}
              placeholder="Введите имя"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Телефон:</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Введите телефон"
              value={phone}
              onChange={e => updateState(e, setPhone)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Введите email"
              value={email}
              onChange={e => updateState(e, setEmail)}
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
