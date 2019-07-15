import React from 'react'
import Modal from 'react-bootstrap/Modal'

export const ModalMessage = props => {
  return (
    <Modal show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton> </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
    </Modal>
  )
}
