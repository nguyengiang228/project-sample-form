import BottomNavigation from "../../containers/BottomNavigation";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import i1 from "./emojione_dog.png";

export default function SuggestPage() {
  return (
    <div className="m_pb_footer">
      <div className="desktop_only">
        <Header />
      </div>
      <div className="mobile_only text-center text-22 text-white py-5" style={{
        backgroundColor: "#F3F6F6",
        color: "#5A4141"
      }}>
        Gợi Ý Dành Riêng Cho Bạn
      </div>

      <div className="flex flex-col items-center mt-32">
        <img src={i1} alt="" draggable={false} className="mx-auto" />
        <div className="text-center text-xl mt-10">
          Để xem được gợi ý dành cho bạn. Vui lòng <br /> xem ít nhất ba sản phẩm
        </div>
      </div>

      <div className="desktop_only">
        <Footer />
      </div>
      <BottomNavigation active={"suggest"} />
    </div>
  );
}
