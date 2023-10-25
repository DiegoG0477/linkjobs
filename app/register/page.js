import FormRegister from "@/components/FormRegister";
import "../globals.css";
import ButtonRegister from "@/components/ButtonRegister";
function RegisterPage() {
  return (
    <div className="register__container">
      <div className="register">
        <h1 className="title">Registro</h1>
        <FormRegister/>
        <div className="line">
            
        </div>
        <p className="text_cuenta">Ya tienes una cuenta?</p>
        <div className="btn_center">
            <ButtonRegister text="Iniciar sesion" id={1}/>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
