import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "../../../helperFunction";
import { ArrowDropDownIcon } from "../../../icon";
import { filterLatestPosts, filterTrendingPosts } from "../../posts/postsSlice";
import Modal from "../Modal/Modal";
import "./FilterDropdown.css";

function FilterDropdown() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { filterBy } = useSelector((state) => state.posts);
  const filterRef = useRef();
  const { coords, updateCoords } = usePosition();

  useEffect(() => {
    switch (filterBy) {
      case "LATEST":
        dispatch(filterLatestPosts());
        break;
      case "TRENDING":
        dispatch(filterTrendingPosts());
        break;
      default:
        return;
    }
  }, [filterBy, dispatch]);

  return (
    <div
      ref={filterRef}
      onClick={() => {
        setShowModal((prev) => !prev);
        updateCoords(filterRef.current);
      }}
    >
      <p className="text-md pointer">
        <ArrowDropDownIcon fontSize="large" />
        Filter: {filterBy}
      </p>
      {showModal && (
        <Modal
          coords={{
            left: coords.left + "px",
            top: coords.top + coords.height + "px",
          }}
          updateCoords={() => updateCoords(filterRef.current)}
          position="bottom-left"
        >
          <div className="filter-modal flex-column">
            <button
              onClick={() => {
                dispatch(filterTrendingPosts());
                setShowModal((prev) => !prev);
              }}
            >
              Trending
            </button>
            <button
              onClick={() => {
                dispatch(filterLatestPosts());
                setShowModal((prev) => !prev);
              }}
            >
              Latest
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default FilterDropdown;
