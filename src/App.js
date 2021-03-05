import Loader from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/ImageGallery/Button";
import React, { useState } from "react";
import "./style.css";

function App() {
  const [gallery, setGallery] = useState([]);
  const [findQuery, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="wrapperApp">
        <Searchbar />
        <ImageGallery />
        <Button />
        <Loader
          className="loader"
          type="Puff"
          color="#FFBFFF"
          height={50}
          width={50}
          timeout={3000} //3 secs
        />
      </div>
    </>
  );
}

export default App;
