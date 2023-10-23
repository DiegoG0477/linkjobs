import "./styles.css"
import Img from "next/image"
import imagen from "@/public/assets/no-visible.png"
function InputFormRegister(props) {
  return (
    <div>
    {(props.type != "password"?(
      <input type={props.type} name={props.name} placeholder={props.holder} className='inputRegister'/>
    ):(
      <div>
        <input type={props.type} name={props.name} placeholder={props.holder} className='inputRegisterImg'/>
      </div>
    ))}
    </div>
  )
}

export default InputFormRegister