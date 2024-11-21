import { useNavigate } from "react-router-dom";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import r1 from "./r1.png";
import r2 from "./r2.png";

import "./style.css";

export default function AccountInfoPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="bg_body py-8">
        <div className="max-w-1310 flex justify-between mx-auto">
          <div className="bg-white p-2 mr-5">
            <div
              className="pb-4 pt-2 text-22 font-bold text-primary"
              style={{
                borderBottom: "1px solid #00000040",
                width: "265px",
              }}
            >
              TÀI KHOẢN
            </div>
            <div className="mt-6">
              <div
                onClick={() => navigate("/thong-tin-tai-khoan")}
                className="text-sm cursor-pointer text-primary px-3 py-4"
                style={{
                  borderRadius: "10px",
                  background: "#0000001A",
                }}
              >
                Thông tin tài khoản
              </div>
              <div
                onClick={() => navigate("/thong-bao")}
                className="text-sm cursor-pointer px-3 py-4"
              >
                Thông báo
              </div>
              <div
                onClick={() => navigate("/")}
                className="text-sm cursor-pointer px-3 py-4"
              >
                Đơn hàng của tôi
              </div>
              <div
                onClick={() => navigate("/")}
                className="text-sm cursor-pointer px-3 py-4"
              >
                Ví voucher
              </div>
            </div>
          </div>
          <div
            className="bg-white flex-grow flex items-center flex-col "
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              borderRadius: "10px",
            }}
          >
            <div className="uppercase text-22 font-bold mt-4">
              thông tin tài khoản
            </div>
            <div className="mt-4">
              <div className="w-550 text-sm">
                <span className="text-red-600">*</span>
                Họ
              </div>
              <input
                type="text"
                placeholder="Nhập họ của bạn"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div className="mt-4">
              <div className="w-550 text-sm">
                <span className="text-red-600">*</span>
                Tên
              </div>
              <input
                type="text"
                placeholder="Nhập tên của bạn"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div className="mt-4">
              <div className="w-550 text-sm">
                {/* <span className="text-red-600">*</span> */}
                Giới tính
              </div>
              <div className="flex items-center mt-2">
                <div className="mbthanhton-elip5 flex items-center mr-20">
                  <img
                    onClick={(e) => {
                      e.target.parentNode?.parentNode.querySelectorAll('img').forEach(x => {
                        x.src = r2
                      })
                      if (!e.target.src.includes(r1)) {
                        e.target.src = r1
                      } else {
                        e.target.src = r2
                      }
                    }}
                    alt="Ellipse13I362"
                    src={r2}
                    className="mbthanhton-ellipse135 mr-3"
                  />
                  Nam
                </div>

                <div className="mbthanhton-elip5 flex items-center">
                  <img
                    onClick={(e) => {
                      e.target.parentNode?.parentNode.querySelectorAll('img').forEach(x => {
                        x.src = r2
                      })
                      if (!e.target.src.includes(r1)) {
                        e.target.src = r1
                      } else {
                        e.target.src = r2
                      }
                    }}
                    alt="Ellipse13I362"
                    src={r2}
                    className="mbthanhton-ellipse135 mr-3"
                  />
                  Nữ
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-550 text-sm">
                {/* <span className="text-red-600">*</span> */}
                Địa chỉ email
              </div>
              <input
                type="text"
                placeholder="Nhập email"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div className="mt-4">
              <div className="w-550 text-sm">
                {/* <span className="text-red-600">*</span> */}
                Địa chỉ giao hàng
              </div>
              <input
                type="text"
                placeholder="Nhập địa chỉ giao hàng"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <button
              className="rounded-md text-white p-4 bg-primary my-4"
              onClick={() => navigate("/")}
            >
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
