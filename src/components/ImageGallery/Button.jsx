import propTypes from "prop-types";

function Button(props) {
  return (
    <button className="Button" onClick={props.onClick}>
      load more
    </button>
  );
}
export default Button;
