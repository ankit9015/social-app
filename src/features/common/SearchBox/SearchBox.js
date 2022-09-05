import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "../../../icon";

import "./SearchBox.css";

function SearchBox() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("s") ?? "");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location.pathname]);

  return (
    <form
      className={`search-box text-md`}
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search", { state: query });
      }}
    >
      <button type="submit" className="icon-button pointer">
        <SearchIcon fontSize="large" />
      </button>

      <input
        type="search"
        className="text-md"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.trim())}
      />
    </form>
  );
}

export default SearchBox;
