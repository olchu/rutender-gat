import React from 'react'

export const SendModal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Оформить заявку
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
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

              <button type="submit" className="btn btn-primary">
                Заказать
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
