import Banner from "../../containers/Banner";
import BottomNavigation from "../../containers/BottomNavigation";
import Category from "../../containers/Category";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import "./style.css";

export default function HomePage() {
  return (
    <div className="m_pb_footer">
      <Header />
      <Banner />
      <Category />
      <Footer />

      <BottomNavigation active={"home"} />
    </div>

  );
}
