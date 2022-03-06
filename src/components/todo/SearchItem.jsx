import "./Todo.scss";

export const SearchItem = ({search, setSearch}) => {
  return (
    <form className="Search" onSubmit={(e) => e.preventDefault()}>
      <div className="search-cont">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Items"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </div>
    </form>
  );
};
