import Footer from "../footer/Footer";
import Header from "../header/Header";
import Section from "../main/Section";
import Sidebar from "../sidebar/Sidebar";
import "./cssLayout.css";
const Layout = () => {
  return (
    <div className="conteiner-l">
      <header className="header">
        <Header />
      </header>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="section">
        <Section />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
