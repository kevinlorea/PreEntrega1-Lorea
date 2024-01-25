const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
    return (
      <div>
        <h2>Por favor complete la informacion solicitada</h2>
        <form className="formulario" onSubmit={enviarOrder}>
          <div  className="form-div">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datosForm.nombre}
            onChange={guardarDatosInput}
            required
          />
          </div>

          <div  className="form-div">
          <label htmlFor="nombre">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={datosForm.apellido}
            onChange={guardarDatosInput}
            required
          />
          </div>

          <div className="form-div">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={datosForm.telefono}
            onChange={guardarDatosInput}
            required
          />
          </div>
          
          <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datosForm.email}
            onChange={guardarDatosInput}
            required
          />
          </div>

          <div className="form-div">
          <label htmlFor="emailRepetido">Repetir Email</label>
          <input
            type="email"
            id="emailRepetido"
            name="emailRepetido"
            value={datosForm.emailRepetido}
            onChange={guardarDatosInput}
            required
          />
          </div>
  
          <button type="submit" className="btn-submit">Enviar orden</button>
        </form>
      </div>
    );
  };
  export default Form;
  