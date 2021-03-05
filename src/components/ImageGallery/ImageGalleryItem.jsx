import propTypes from "prop-types";

function ImageGalleryItem(props) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={props.url}
        alt={props.description}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  url: propTypes.string,
  description: propTypes.string,
};
export default ImageGalleryItem;
