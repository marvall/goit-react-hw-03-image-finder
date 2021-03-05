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

export default ImageGalleryItem;
