
import "./price.css";
import Header from "../../components/header/Header";
import Table from "../../components/pricelist-table/Table";
function Pricelist() {
  return (
    <div className="price__page">
      <Header />
      <Table />
    </div>
  );
}
export default Pricelist;
