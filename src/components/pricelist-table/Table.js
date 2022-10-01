import React from "react";
import "./table.css";
export const Table = ({
  productId,
  productName,
  productCost,
  productPayment,
}) => {
  return (
    <div className="pricelist__table">
      <div className="product__id">{productId}</div>
      <div className="product__name">{productName}</div>
      <div className="product__cost">{productCost}</div>
      <div className="product__payment">{productPayment}</div>
    </div>
  );
};
export default Table;
