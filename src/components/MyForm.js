import React from 'react'

export const MyForm = props => {
  const formFilds = {
    name: '',
    phone: '',
    email: '',
  }
  const [dataForm, setDataForm] = React.useState(formFilds)
  const [prevIsSubmitted, setPrevIsSubmitted] = React.useState(
    props.isSubmitted
  )
  if (prevIsSubmitted !== props.isSubmitted) {
    if (props.isSubmitted) {
      setDataForm(formFilds)
    }
    setPrevIsSubmitted(props.isSubmitted)
  }

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
          value={dataForm['name']}
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
          value={dataForm['phone']}
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
          value={dataForm['email']}
          className="form-control"
          placeholder="Введите email"
          name="email"
          onChange={updateState}
        />
      </div>
    </form>
  )
}
