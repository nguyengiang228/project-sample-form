import { useNavigate } from "react-router-dom";
import register_b from "../../assets/register_b.png";
import BottomNavigation from "../../containers/BottomNavigation";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Register from "../../containers/Register";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="m_pb_footer">
      <div className="desktop_only">
        <Header />
      </div>
      <div
        className="mobile_only text-center text-22 text-white py-5"
        style={{
          backgroundColor: "#006962",
        }}
      >
        Đăng ký
      </div>

      <div
        style={{
          backgroundColor: "#E1E1E1",
        }}
        className="py-6 m-bg-white"
      >
        <Register />
      </div>

      <div className="desktop_only">
        <Footer />
      </div>

      <div className="mobile_only">
        <img
          src={register_b}
          alt=""
          className="mx-auto mt-6"
          onClick={() => navigate("/dang-nhap")}
        />
      </div>
      <BottomNavigation active={"login"} />
    </div>
  );
}
