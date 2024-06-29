import React from "react";
import ProductFilter from "./prodectSidebar/ProductFilter";
import ProductFilterSort from "./prodectSidebar/ProductFilterSort";

function ProductSidebar({
  filterItem,
  setFilterItem,
  filterSort,
  setFilterSort,
}) {
  return (
    <div className="product-sidebar">
      <div className="sidebar-item">
        <h4 className="sidebar-title"> فلتر حسب السلعة </h4>
        <ProductFilter filterItem={filterItem} setFilterItem={setFilterItem} />
      </div>
      <div className="sidebar-item">
        <h4 className="sidebar-title"> ترتيب حسب السعر </h4>
        <ProductFilterSort
          filterSort={filterSort}
          setFilterSort={setFilterSort}
        />
      </div>
    </div>
  );
}

export default ProductSidebar;
