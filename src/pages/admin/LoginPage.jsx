import { useNavigate } from "react-router-dom";
import Image1 from "../../assets/Logo3.png";
import Logo from "../../assets/logo2.png";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-1310 justify-around h-screen items-center mx-auto">
      <div>
        <img src={Image1} alt="" />
      </div>
      <div className="">
        <img src={Logo} alt="" />
        <div className="font-bold text-22 mt-2">Xin Chào!</div>
        <div className="font-base mt-1">
          Chào mừng bạn đến với trang quản lý.
        </div>
        <div>
          <input
            type="text"
            className="rounded-full inp px-5 py-3 mt-6"
            placeholder="Username"
            style={{
              border: "1px solid #00000080",
              width: "675px",
            }}
          />
        </div>
        <div>
          <input
            type="password"
            className="rounded-full inp px-5 py-3 mt-6"
            placeholder="Password"
            style={{
              border: "1px solid #00000080",
              width: "675px",
            }}
          />
        </div>
        <div className="text-end text-sm text-primary mt-4 cursor-pointer">
          Quên mật khẩu
        </div>
        <div className="flex justify-center">
          <button
            className="text-white text-base font-medium bg-primary py-4 rounded-xl mt-4"
            style={{
              width: "265px",
            }}
            onClick={() => navigate("/admin/thong-ke")}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}
