import React from 'react'

export const MyForm = props => {
  const [dataForm, setDataForm] = React.useState({
    name: '',
    phone: '',
    email: '',
  })
  const updateState = e => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }
  React.useEffect(() => {
    props.getDataForm(dataForm)
  }, [dataForm])

  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Имя:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          onChange={updateState}
          placeholder="Введите имя"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Телефон:</label>
        <input
          type="tel"
          className="form-control"
          placeholder="Введите телефон"
          name="phone"
          onChange={updateState}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email:</label>
        <input
          type="email"
          className="form-control"
          placeholder="Введите email"
          name="email"
          onChange={updateState}
        />
      </div>
    </form>
  )
}
