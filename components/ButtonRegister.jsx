import Link from 'next/link'
function ButtonRegister(props) {
  return (
    <div>
        {(props.id!=1?(
            <button className="buttonRegister" type={props.type}>{props.text}</button>
        ):(
            <Link href="/">
                <button className="buttonRegisterStyle" type={props.type}>{props.text}</button>
            </Link>
        ))}
    </div>
  )
}

export default ButtonRegister