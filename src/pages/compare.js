import React from "react";
import { useSelector } from "react-redux";

const compare = () => {
  const toCompare = useSelector((state) => state.book.compareBooks);

  console.log(toCompare);
  return <div>compare</div>;
};

export default compare;
