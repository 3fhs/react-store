import React from "react";
import "../Products.css";

function ProductFilter({ filterItem, setFilterItem }) {
  const onChangeFilter = (e) => {
    setFilterItem(e.target.id);
  };

  return (
    <div className="product-filter">
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeFilter}
          type="radio"
          name="filter"
          id="all"
        />
        <label htmlFor="all"> بدون فلتر </label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeFilter}
          type="radio"
          name="filter"
          id="laptop"
        />
        <label htmlFor="laptop"> لاب توب </label>
      </div>
      <div className="form-group">
        <input
          value={filterItem}
          onChange={onChangeFilter}
          type="radio"
          name="filter"
          id="mobile"
        />
        <label htmlFor="mobile"> تليفونات </label>
      </div>
    </div>
  );
}

export default ProductFilter;
