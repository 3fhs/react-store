import React from "react";
import "../Products.css";

function ProductFilterSort({ filterSort, setFilterSort }) {
  const onChangeSort = (e) => {
    setFilterSort(e.target.id);
  };

  return (
    <div className="sort-product">
      <div className="form-group">
        <input
          value={filterSort}
          onChange={onChangeSort}
          type="radio"
          name="sort"
          id="nosort"
        />
        <label htmlFor="nosort"> بدون ترتيب </label>
      </div>
      <div className="form-group">
        <input
          value={filterSort}
          onChange={onChangeSort}
          type="radio"
          name="sort"
          id="low"
        />
        <label htmlFor="low"> من الارخص للاعلى سعر </label>
      </div>
      <div className="form-group">
        <input
          value={filterSort}
          onChange={onChangeSort}
          type="radio"
          name="sort"
          id="high"
        />
        <label htmlFor="high"> من الاعلى سعر الى الارخص </label>
      </div>
    </div>
  );
}

export default ProductFilterSort;
