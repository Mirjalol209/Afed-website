
import "./price.css";
import Header from "../../components/header/Header";
import Table from "../../components/pricelist-table/Table";
import Footer from "..//..//components/footer/Footer"
function Pricelist() {
  return (
    <div className="price__page">
      <Header />
      <Table />
      <Footer/>

    </div>
  );
}
export default Pricelist;
