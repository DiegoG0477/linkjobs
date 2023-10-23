import InputFormRegister from "./InputFormRegister"
import ButtonRegister from "./ButtonRegister"
function FormRegister() {
  return (
    <form>
          <div className="form">
            <div className="col">
              <InputFormRegister type="text" name="nombre" holder="Nombre(s)" />
              <InputFormRegister
                type="text"
                name="apellidoPat"
                holder="Apellido Paterno"
              />
              <InputFormRegister
                type="text"
                name="apellidoMat"
                holder="Apellido Materno"
              />
              <InputFormRegister type="date" name="fechaNacimiento" />
            </div>
            <div className="col">
              <InputFormRegister type="email" name="email" holder="Email" />
              <InputFormRegister
                type="password"
                name="password"
                holder="Password"
              />
              <InputFormRegister
                type="password"
                name="confirmPassword"
                holder="Confirmar password"
              />
              <ul>
                <li>Debe tener al menos 8 caracteres.</li>
                <li>
                  Evita que sea similar a tu nombre, apellidos o correo
                  electronico.
                </li>
              </ul>
            </div>
          </div>
          <p className="terminos">Al registrarte aceptas nuestros Terminos y condiciones y Aviso de privacidad de EDUPLANET.</p>
          <div className="btn_center">
            <ButtonRegister type="submit" text="Aceptar" />
          </div>
        </form>
  )
}

export default FormRegister