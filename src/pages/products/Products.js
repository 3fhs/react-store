import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductSidebar from "./ProductSidebar";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/apiCalls/ProductCallApi";
import PaginationNumber from "./PaginationNumber";

function Products() {
  const dispatch = useDispatch();

  // state filter
  const [filterItem, setFilterItem] = useState("all");
  const [filterSort, setFilterSort] = useState("sellect");
  //pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  // i make filter
  const filterProducts = products.filter((product) =>
    filterItem === "laptop"
      ? product.islaptop === true
      : filterItem === "mobile"
      ? product.islaptop === false
      : product
  );
  // filter sort
  const sortProductFilter =
    filterSort === "low"
      ? filterProducts.sort((a, b) => a.price - b.price)
      : filterSort === "high"
      ? filterProducts.sort((a, b) => b.price - a.price)
      : filterProducts.sort((a, b) => (a.title > b.title ? 1 : -1));

  // i make pagination
  const paginationnumber = 9;
  const pages = Math.ceil(sortProductFilter.length / paginationnumber);
  //
  const startIndex = (currentPage - 1) * paginationnumber;
  const LastIndex = currentPage * paginationnumber;
  const orderedProducts = sortProductFilter.slice(startIndex, LastIndex);

  return (
    <>
      <div className="products">
        <ProductSidebar
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          filterSort={filterSort}
          setFilterSort={setFilterSort}
        />
        <ProductList products={orderedProducts} />
      </div>
      <PaginationNumber
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default Products;
