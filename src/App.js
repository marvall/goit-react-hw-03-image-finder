import Loader from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/ImageGallery/Button";
import React, { useState, useEffect } from "react";
import { getImage } from "./api/pixabay.js";
import "./style.css";

function App() {
  const [gallery, setGallery] = useState([]);
  const [findQuery, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  /**
   *
   * @param {String} query - keyword for to find images
   */
  const handleGetQuery = (query) => {
    setQuery(query);
  };

  /**
   * Function increment currentPage on 1
   */
  const hanbleGetMore = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  useEffect(() => {
    setLoading(true);
    getImage(findQuery, currentPage)
      .then(({ hits }) => setGallery(hits))
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    (prevState) => {
      if (prevState !== currentPage) {
        setLoading(true);
        getImage(findQuery, currentPage)
          .then(({ hits }) =>
            setGallery((prevState) => [...prevState, ...hits])
          )
          .catch((error) => alert(error))
          .finally(() => {
            setLoading(false);
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentPage]
  );

  useEffect(
    (prevState) => {
      if (prevState !== findQuery) {
        setLoading(true);
        getImage(findQuery, 1)
          .then(({ hits }) => setGallery(hits))
          .catch((error) => alert(error))
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [findQuery]
  );

  return (
    <>
      <div className="wrapperApp">
        <Searchbar onSubmit={handleGetQuery} />
        <ImageGallery gallery={gallery} />

        {isLoading ? (
          <>
            <Loader
              className="loader"
              type="Puff"
              color="#FFBFFF"
              height={50}
              width={50}
            />
          </>
        ) : (
          <Button onClick={hanbleGetMore} />
        )}
      </div>
    </>
  );
}

export default App;
