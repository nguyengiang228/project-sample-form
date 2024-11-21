import { useNavigate } from "react-router-dom";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import { useState } from "react";
import "./style.css";

export default function NotificationPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  return (
    <div>
      <Header />
      <div className="bg_body py-8">
        <div className="max-w-1310 flex justify-between mx-auto">
          <div className="bg-white p-2 mr-5">
            <div
              className="pb-4 pt-2 text-22 font-bold text-primary uppercase"
              style={{
                borderBottom: "1px solid #00000040",
                width: "265px",
              }}
            >
              tài khoản
            </div>
            <div className="mt-6">
              <div
                className="text-sm  px-3 py-4 cursor-pointer"
                onClick={() => navigate("/thong-tin-tai-khoan")}
              >
                Thông tin tài khoản
              </div>
              <div
                className="text-sm px-3 py-4 cursor-pointer text-primary"
                style={{
                  borderRadius: "10px",
                  background: "#0000001A",
                }}
              >
                Thông báo
              </div>
              <div
                className="text-sm px-3 py-4 cursor-pointer"
                onClick={() => navigate("/thanh-toan")}
              >
                Đơn hàng của tôi
              </div>
              <div className="text-sm px-3 py-4 cursor-pointer">Ví voucher</div>
            </div>
          </div>
          <div
            className="bg-white flex-grow "
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
              borderRadius: "10px",
            }}
          >
            <div className="uppercase text-22 font-bold mt-4 text-center">
              Thông báo
            </div>

            <div className="px-4 pb-8">
              <div className="border-b-primary-1 px-2 flex pt-4 pb-2">
                <div
                  className={
                    "font-medium cursor-pointer px-1 mr-8 text-base py-2" +
                    (tab === 1 ? " border-b-primary text-primary" : "")
                  }
                  onClick={() => setTab(1)}
                >
                  Tất Cả
                </div>
                <div
                  className={
                    "font-medium cursor-pointer px-1 mr-8 text-base py-2" +
                    (tab === 2 ? " border-b-primary text-primary" : "")
                  }
                  onClick={() => setTab(2)}
                >
                  Đơn Hàng
                </div>
                <div
                  className={
                    "font-medium cursor-pointer px-1 mr-8 text-base py-2" +
                    (tab === 3 ? " border-b-primary text-primary" : "")
                  }
                  onClick={() => setTab(3)}
                >
                  Sự Kiện
                </div>
                <div
                  className={
                    "font-medium cursor-pointer px-1 mr-8 text-base py-2" +
                    (tab === 4 ? " border-b-primary text-primary" : "")
                  }
                  onClick={() => setTab(4)}
                >
                  Mã Giảm Giá
                </div>
                <div
                  className={
                    "font-medium cursor-pointer px-1 mr-8 text-base py-2" +
                    (tab === 5 ? " border-b-primary text-primary" : "")
                  }
                  onClick={() => setTab(5)}
                >
                  Xác Nhận
                </div>
              </div>

              <div className="text-base py-2">
                <div
                  className=""
                  style={{
                    borderBottom: "1px solid #0000001A",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center mt-2"
                    style={{
                      backgroundColor: "#FEFFDA",
                    }}
                  >
                    <div className="">
                      <div className="font-bold ">Quà Tặng Ngập Tràn</div>
                      <div className="mt-2">
                        BookStore gửi ngàn yêu thương đến bạn!
                      </div>
                    </div>
                    <i className="text-sm">09:53 am 24/04/2024</i>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    borderBottom: "1px solid #0000001A",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center mt-2"
                    style={{
                      backgroundColor: "#FEFFDA",
                    }}
                  >
                    <div className="">
                      <div className="font-bold ">Tương tác cùng bookStore</div>
                      <div className="mt-2">
                        Nhận ngay vô vàn voucher hấp dẫn khi mua hàng tại BookStore từ 2 sản phẩm bất kỳ
                      </div>
                    </div>
                    <i className="text-sm">09:53 am 24/04/2024</i>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    borderBottom: "1px solid #0000001A",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center mt-2"
                    style={{
                      backgroundColor: "#FEFFDA",
                    }}
                  >
                    <div className="">
                      <div className="font-bold ">BookStore cập bến tri thức</div>
                      <div className="mt-2">
                        Hàng ngàn cuốn sách quý giá đã cập bến BookStore
                      </div>
                    </div>
                    <i className="text-sm">09:53 am 24/04/2024</i>
                  </div>
                </div>

                <div
                  className=""
                  style={{
                    borderBottom: "1px solid #0000001A",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center mt-2"
                    style={{
                      backgroundColor: "#FEFFDA",
                    }}
                  >
                    <div className="">
                      <div className="font-bold ">FlashSale 22/04</div>
                      <div className="mt-2">
                        Duy nhất ngày 22/04 FlashSale từ 11h tới 16h. Nhanh tay nào mọi người ơiiiiii
                      </div>
                    </div>
                    <i className="text-sm">09:53 am 24/04/2024</i>
                  </div>
                </div>
                <div
                  className=""
                  style={{
                    borderBottom: "1px solid #0000001A",
                    paddingBottom: "4px",
                  }}
                >
                  <div
                    className="flex justify-between px-4 py-2 items-center mt-2"
                    style={{
                      backgroundColor: "#FEFFDA",
                    }}
                  >
                    <div className="">
                      <div className="font-bold ">Thông báo bảo trì website</div>
                      <div className="mt-2">
                        Để tăng tính trải nghiệm của quý khách hàng, chúng tôi sẽ bảo trì website định kì. Mong quý khách thông cảm!
                      </div>
                    </div>
                    <i className="text-sm">09:53 am 24/04/2024</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
