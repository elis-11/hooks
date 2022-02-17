import "../../styles/Todo.scss";
// import {FaSearch} from "react-icons/fa"

export const SearchItem = ({search, setSearch}) => {
  return (
    <form className="Search" onSubmit={(e) => e.preventDefault()}>
        <div className="container">
      <label htmlFor="search">
      {/* <FaSearch /> */}
      </label>
      <input 
      id="search"
      type="text"
      role="searchbox"
      placeholder="SEARCH"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </div>
    </form>
  );
};
