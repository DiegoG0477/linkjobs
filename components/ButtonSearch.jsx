import Link from "next/link";
import "./styles.css";
function ButtonSearch(props) {
  return (
    <div>
      {props.id == 1 ? (
          <button className="button__searchChange">{props.text}</button>
      ) : (
        <Link href="/jobs/searchjobs">
          <button className="button__search">{props.text}</button>
        </Link>
      )}
    </div>
  );
}

export default ButtonSearch;
