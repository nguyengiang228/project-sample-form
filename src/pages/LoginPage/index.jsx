import { useNavigate } from "react-router-dom";
import login_b from "../../assets/login_b.png";
import BottomNavigation from "../../containers/BottomNavigation";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Login from "../../containers/Login";

export default function LoginPage() {
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
        }}
      >
        Đăng nhập
      </div>

      <div
        style={{
          backgroundColor: "#E1E1E1",
        }}
        className="py-6 m-bg-white"
      >
        <Login />
      </div>

      <div className="desktop_only">
        <Footer />
      </div>

      <div className="mobile_only">
        <img
          src={login_b}
          alt=""
          className="mx-auto"
          onClick={() => navigate("/dang-ky")}
        />
      </div>
      <BottomNavigation active={"login"} />
    </div>
  );
}
