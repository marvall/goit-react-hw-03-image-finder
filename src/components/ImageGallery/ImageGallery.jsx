import ImageGalleryItem from "./ImageGalleryItem";
import propTypes from "prop-types";

function ImageGallery(props) {
  return (
    <ul className="ImageGallery">
      {props.gallery.map((image) => (
        <ImageGalleryItem
          key={image.id}
          url={image.largeImageURL}
          description={image.tags}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  gallery: propTypes.array,
};
export default ImageGallery;
