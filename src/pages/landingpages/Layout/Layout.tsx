import "./Layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/LayoutComponent/Footer/Footer";
import Navbar from "../../../components/LayoutComponent/Navbar/Navbar";
import Layout, { Content } from "antd/es/layout/layout";

const LandingPagesLayout = () => {
  return (
    <Layout>
      {/* customise NavBar */}
      <Navbar></Navbar>
      <Content>
        <Outlet />
      </Content>
      {/* customise Footer */}
      <Footer></Footer>
    </Layout>
  );
};

export default LandingPagesLayout;
