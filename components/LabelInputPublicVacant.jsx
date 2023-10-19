function LabelInputPublicVacant(props) {
  return (
    <div className="labelInputPublicVacant__container">
        <label className="labelPublicVacant" >{props.label}</label>
        {(props.id==1?(
            <input type="text" name={props.name} placeholder={props.holder} className="inputPublicVacantShort" />
        ):(
            <input type="text" name={props.name} placeholder={props.holder} className="inputPublicVacant" />
        ))}
    </div>
  )
}

export default LabelInputPublicVacant