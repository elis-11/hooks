import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Search.scss";

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();

  const term = query.get("term");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    //prevent the default form submission
    e.preventDefault();

    //extract search term using refs.
    const searchValue = inputRef.current.value;
    navigate(`?term=${searchValue}`);
  };

  return (
    <div className="search">
      <form action="" onSubmit={formSubmitHandler}>
        <div className="container">
        <input className="first" type="text" name="term" ref={inputRef} />
        <input className="second" type="submit" value="Search" />
        </div>
        <div className="container">
        {/* Display the search term if it is present */}
        {term && <h2>Results for '{term}'</h2>}
        </div>
      </form>
    </div>
  );
};

export default Search;
