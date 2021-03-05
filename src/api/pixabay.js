import axios from "axios";

const USER_KEY = "19268663-7f88b2c67b4246c5b4cd88041";
/**
 *
 * @param {strin} query - keyword for to find images
 * @param {number} pageNumber - the number page on pixabay
 */
export const getImage = (query, pageNumber) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);
};
