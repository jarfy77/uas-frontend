import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import { useDispatch } from "react-redux";
import { getMe } from "../features/authSlice";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Products;
