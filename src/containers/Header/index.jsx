import { Popover } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bell from "../../assets/bell.png";
import Cart from "../../assets/cart.png";
import Logo from "../../assets/logo.png";
import Mega from "../../assets/mega-menu.png";
import success from "../../assets/success.png";
import User from "../../assets/user.png";
import Menu from "../Menu";

import glass from "./assets/glass.png";
import m1 from "./assets/m1.png";
import m2 from "./assets/m2.png";
import m3 from "./assets/m3.png";
import m4 from "./assets/m4.png";
import m5 from "./assets/m5.png";
import search from "./assets/search.png";
import "./style.css";

export default function Header({ cartChange }) {
  const [cart, setCart] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (cartChange === undefined) return;
    setCart(true);

    setTimeout(() => {
      setCart(false);
    }, 3000);
  }, [cartChange]);
  const navigate = useNavigate();
  return (
    <>
      {location.pathname === "/" && (
        <div className="bg-white py-2 res1 mobile_hidden">
          <div className="max-w-1310 mx-auto flex justify-between">
            <div className="text-base font-bold text-black">
              Every Purchase Supports Independent Bookstores. A Better Way to
              Buy Books Online.
            </div>
            <div
              className="text-base font-semibold text-primary italic cursor-pointer"
              onClick={() => navigate("/dang-nhap")}
            >
              Đăng nhập/Đăng ký nhanh
            </div>
          </div>
        </div>
      )}
      <div
        className="flex align-middle header text-white justify-between mobile_hidden"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10000000000,
        }}
      >
        <div className="containers mx-auto flex align-middle justify-between">
          <div className="flex items-center mobile_hidden">
            <img
              src={Logo}
              alt={"Logo"}
              className="logoIcon w-fit cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div className="relative menu-icon">
              <img
                src={Mega}
                alt={"Mega"}
                className="leftIcon w-fit ml-14 cursor-pointer"
              />
              <Menu active={6} />
            </div>
          </div>
          <div className="center flex items-center">
            <input
              type=""
              className="p-5  searchInput text-black outline-none mx-auto"
              placeholder="Tìm kiếm"
              style={{
                width: "645px",
              }}
            />
          </div>
          <div
            className="right flex justify-between mobile_hidden"
            style={{
              maxWidth: "240px",
            }}
          >
            <div
              className="rightItem account_info flex flex-col justify-center items-center cursor-pointer relative"
              // onClick={() => navigate("/thong-tin-tai-khoan")}
            >
              <img src={User} alt="" className="rightIcon" />
              <div className="rightLabel text-sm">Tài khoản</div>

              <div
                className="header_account_menu absolute z-50  bottom-0 bg-white text-base text-black w-64 top-full hidden"
                style={{
                  left: "10%",
                }}
              >
                <div
                  className="flex p-4 bg-white"
                  onClick={() => navigate("/thong-tin-tai-khoan")}
                >
                  <div>
                    <img src={m1} alt="" />
                  </div>
                  <div className="font-bold ml-4">Tài khoản BookStore</div>
                </div>
                <div
                  className="flex p-4 bg-white"
                  onClick={() => {
                    navigate("/thanh-toan");
                  }}
                >
                  <div>
                    <img src={m2} alt="" />
                  </div>
                  <div className="font-bold ml-4">Đơn hàng của tôi</div>
                </div>
                <div className="flex p-4 bg-white">
                  <div>
                    <img src={m3} alt="" />
                  </div>
                  <div className="font-bold ml-4">Sản phẩm yêu thích</div>
                </div>
                <div className="flex p-4 bg-white">
                  <div>
                    <img src={m4} alt="" />
                  </div>
                  <div className="font-bold ml-4">Ví Voucher</div>
                </div>
                <div className="flex p-4 bg-white">
                  <div>
                    <img src={m5} alt="" />
                  </div>
                  <div className="font-bold ml-4">Thoát tài khoản</div>
                </div>
              </div>
            </div>
            <Popover
              content={
                <div>
                  <div className="flex items-center " style={{}}>
                    <div>
                      <img src={success} alt="" />
                    </div>
                    <div className="font-bold text-center text-base ml-6 flex-grow">
                      Thêm vào giỏ hàng thành công!
                    </div>
                  </div>

                  <button
                    className="bg-primary px-4 py-2 rounded-md text-white w-full mt-4"
                    onClick={() => navigate("/gio-hang")}
                  >
                    Xem giỏ hàng và thanh toán
                  </button>
                </div>
              }
              trigger=""
              open={cart}
            >
              <div
                className="rightItem flex flex-col justify-center items-center cursor-pointer"
                onClick={() => navigate("/gio-hang")}
              >
                <img src={Cart} alt="" className="rightIcon" />
                <div className="rightLabel text-sm">Giỏ hàng</div>
              </div>
            </Popover>
            <div
              className="rightItem flex flex-col justify-center items-center cursor-pointer"
              onClick={() => navigate("/thong-bao")}
            >
              <img src={Bell} alt="" className="rightIcon" />
              <div className="rightLabel text-sm">Thông báo</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="desktop_hidden relative flex justify-between items-center bg-primary px-6"
        style={{
          height: "63px",
        }}
      >
        <div>
          <img src={Mega} alt="" width={60} onClick={() => navigate("/menu")} />
        </div>
        {!!value && (
          <div
            className="absolute px-8"
            style={{
              // bottom: "-100%",
              right: 0,
              left: 0,
              top: 66,
              zIndex: 10000,
              width: "100vw",
            }}
          >
            <img
              src={search}
              alt=""
              className="w-full"
              onClick={() => navigate("/chi-tiet")}
            />
          </div>
        )}
        <div className="flex-grow ml-5 relative">
          <input
            type=""
            className="p-5  searchInput text-black outline-none mx-auto"
            placeholder="Tìm kiếm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <img
            src={glass}
            alt=""
            className="absolute"
            style={{
              top: 8,
              right: 20,
            }}
          />
        </div>
      </div>
    </>
  );
}
