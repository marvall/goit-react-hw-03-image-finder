import ImageGalleryItem from "./ImageGalleryItem";

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
export default ImageGallery;
