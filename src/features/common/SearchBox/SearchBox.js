import { SearchIcon } from "../../../icon";

import "./SearchBox.css";

function SearchBox(props) {
  return (
    <div className={`search-box text-md ${props.className}`}>
      <span className="icon-button">
        <SearchIcon fontSize="inherit" />
      </span>

      <input type="search" className="text-md" placeholder="Search..." />
    </div>
  );
}

export default SearchBox;
