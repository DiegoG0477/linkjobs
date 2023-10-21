import "./styles.css";
function ButtonSearch(props) {
  return (
    <div>
      {(
        props.id==1?(
          <button className="button__searchChange">{props.text}</button>
        ):(
          <button className="button__search">{props.text}</button>
        )
      )}
    </div>
  );
}

export default ButtonSearch;
