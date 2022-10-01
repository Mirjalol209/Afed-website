import React from "react";
import "./price-table-header.css";
export const TableHeader = ({
  productId,
  productName,
  productCost,
  productPayment,
}) => {
  return (
    <div className="price__table__header">
      <div className="id">{productId}</div>
      <div className="customer">{productName}</div>
      <div className="price__tag">{productCost}</div>
      <div className="payment">{productPayment}</div>
    </div>
  );
};

export default TableHeader;
