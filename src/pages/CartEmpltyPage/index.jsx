import { useNavigate } from "react-router-dom";
import BottomNavigation from "../../containers/BottomNavigation";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import i1 from "./emojione_dog.png";

export default function CartEmplyPage() {
  const navigate = useNavigate();
  return (
    <div className="m_pb_footer">
      <div className="desktop_only">
        <Header />
      </div>
      <div
        className="mobile_only text-center text-22 text-white py-5"
        style={{
          backgroundColor: "#00AB9F",
          color: "white",
        }}
      >
        Giỏ hàng
      </div>

      <div className="flex flex-col items-center mt-32">
        <img src={i1} alt="" draggable={false} className="mx-auto" />
        <div className="text-center text-xl">
          Chưa có sản phẩm trong giỏ hàng của bạn
        </div>

        <button
          className="bg-primary px-6 py-3 text-white rounded-full mt-16"
          onClick={() => navigate("/")}
        >
          Mua sắm ngay
        </button>
      </div>

      <div className="desktop_only">
        <Footer />
      </div>
      <BottomNavigation active={"cart"} />
    </div>
  );
}
