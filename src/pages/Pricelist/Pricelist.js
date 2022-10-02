import "./price.css";
import Header from "../../components/header/Header";
import Table from "../../components/pricelist-table/Table";
import TableHeader from "../../components/pricelist-table-header/Price-table-header";

import Footer from "..//..//components/footer/Footer";

function Pricelist() {
  return (
    <div className="price__page">
      <div className="price__page__content wrapper">
        <Header />
        <div className="table__header">
          <TableHeader
            productId={"Product ID"}
            productName={"Customer"}
            productCost={"Amount due"}
            productPayment={"Payment"}
          />
          <TableHeader
            productId={"Product ID"}
            productName={"Customer"}
            productCost={"Amount due"}
            productPayment={"Payment"}
          />
        </div>
        <div className="price__page__table">
          <Table
            productCost={"$300"}
            productId={"1234"}
            productName={"John"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$400"}
            productId={"9874"}
            productName={"Jaldi"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$500"}
            productId={"0837"}
            productName={"Finger"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$600"}
            productId={"8274"}
            productName={"Winner"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$600"}
            productId={"8274"}
            productName={"Winner"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$600"}
            productId={"8274"}
            productName={"Winner"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$600"}
            productId={"8274"}
            productName={"Winner"}
            productPayment={"cash"}
          />
          <Table
            productCost={"$600"}
            productId={"8274"}
            productName={"Winner"}
            productPayment={"cash"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Pricelist;
