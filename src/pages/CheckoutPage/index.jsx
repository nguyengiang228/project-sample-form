import { useState } from "react";
import ArrowRight from "../../assets/arrow-right2.png";
import Chacon from "../../assets/chacon.png";
import CheckedIcon from "../../assets/check-cirrcle.png";
import Icon2 from "../../assets/checkout/mdi_cod (1).png";
import Icon3 from "../../assets/checkout/mdi_cod (2).png";
import Icon4 from "../../assets/checkout/mdi_cod (3).png";
import Icon5 from "../../assets/checkout/mdi_cod (4).png";
import Icon1 from "../../assets/checkout/mdi_cod.png";
import Csbh from "../../assets/csbh.png";
import Doitra from "../../assets/doitra.png";
import HozLine from "../../assets/gray_hozline.png";
import Process from "../../assets/process.png";
import Promotion from "../../assets/promotion.png";
import RadioChecked from "../../assets/radio-checked.png";
import RadioUncheck from "../../assets/radio-uncheck.png";
import ShippingIcon from "../../assets/shipping-icon.png";
import Shipping from "../../assets/shipping.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import i1 from "./1.png";
import i2 from "./2.png";
import r1 from "./r1.png";
import r2 from "./r2.png";

import { useNavigate } from "react-router-dom";
import CheckoutMobile from "../mobile/Checkout";
import "./style.css";

export default function CheckoutPage() {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const [payment, setPayment] = useState(1);

  return (
    <>
      <div className="desktop_only">
        <Header />
        <div className="bg_body py-6">
          <div className="max-w-1310 mx-auto mb-2">
            <div className="breadcrumbs bg-white w-fit p-2 px-3 text-base">
              <span className="italic font-medium">Trang chủ</span>
              <span>{" > "}</span>
              <span className="italic font-medium">Sách Văn Học</span>
              <span>{" > "}</span>
              <span className="italic font-medium">Tiểu thuyết</span>
              <span>{" > "}</span>
              <span className="italic font-medium">
                Bước chân cha bước chân con
              </span>
              <span>{" > "}</span>
              <span className="italic font-medium">Thanh toán</span>
            </div>
          </div>

          <div className="flex justify-between max-w-1310 mx-auto">
            <div
              className="flex-grow mr-5 p-2 bg-white rounded-xl"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="text-22 font-bold">Chọn hình thức giao hàng</div>
              <div
                className="p-2 mt-2 w-64"
                style={{
                  backgroundColor: "#00AB9F1A",
                  borderRadius: "5px",
                }}
              >
                <div
                  className="flex items-center"
                  onClick={() => setChecked((prev) => !prev)}
                >
                  <input
                    type="radio"
                    name="r1"
                    id="r1"
                    className="mr-2 text-sm"
                    hidden
                  />
                  {checked ? (
                    <img
                      src={RadioChecked}
                      alt=""
                      className="mr-3 ml-1 checked"
                    />
                  ) : (
                    <img
                      src={RadioUncheck}
                      alt=""
                      className="mr-3 ml-1 uncheck"
                    />
                  )}

                  <label
                    htmlFor="r1"
                    onClick={() => setChecked((prev) => !prev)}
                  >
                    Giao hàng siêu tốc 2h
                  </label>
                </div>
                <div
                  className="flex items-center mt-2"
                  onClick={() => setChecked((prev) => !prev)}
                >
                  <input
                    type="radio"
                    name="r1"
                    id="r2"
                    className="mr-2 text-sm"
                    hidden
                  />
                  {!checked ? (
                    <img
                      src={RadioChecked}
                      alt=""
                      className="mr-3 ml-1 checked"
                    />
                  ) : (
                    <img
                      src={RadioUncheck}
                      alt=""
                      className="mr-3 ml-1 uncheck"
                    />
                  )}

                  <label
                    htmlFor="r2"
                    onClick={() => setChecked((prev) => !prev)}
                  >
                    Giao hàng tiết kiệm
                  </label>
                </div>
              </div>
            </div>
            <div
              className="bg-white rounded-lg p-4"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
                width: "370px",
              }}
            >
              <div
                className="flex justify-between pb-2"
                style={{
                  borderBottom: "1px solid #B0B0B0",
                }}
              >
                <div className="text-base font-medium">Giao tới</div>
                <div
                  className="underline font-medium text-primary cursor-pointer"
                  onClick={() => {
                    navigate("/dia-chi");
                  }}
                >
                  Thay đổi
                </div>
              </div>
              <div className="flex justify-between my-4 items-center">
                <div className="text-sm">Nghiêm Hưng</div>
                <div className="font-bold text-base">0377893603</div>
              </div>
              <div className="text-sm italic">
                Số 2 đường Nguyễn Trãi, quận Thanh Xuân, TP. Hà Nội
              </div>
            </div>
          </div>

          <div className="flex justify-between max-w-1310 mx-auto mt-4">
            <div
              className="flex-grow mr-5 p-2 bg-white rounded-xl px-7"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="text-22 font-bold">Chi tiết đơn hàng</div>
              <div className="flex justify-between">
                <div>
                  <div className="mt-4 flex border-2 rounded-md">
                    <div>
                      <img src={Chacon} alt="" width={74} height={111} />
                    </div>
                    <div className="ml-6 h-24 flex flex-col flex-grow justify-between">
                      <div className="text-base">
                        Bước chân con bước chân cha
                      </div>
                      <div className="text-base">Số lượng : 1</div>
                    </div>
                    <div className="w-24 font-medium flex items-center">
                      106,000 <span className="underline">đ</span>
                    </div>
                  </div>
                  <div className="mt-4 flex border-2 rounded-md">
                    <div>
                      <img src={i1} alt="" width={74} height={111} />
                    </div>
                    <div className="ml-6 h-24 flex flex-col flex-grow justify-between">
                      <div className="text-base">Ác Nữ Trùng Sinh</div>
                      <div className="text-base">Số lượng : 1</div>
                    </div>
                    <div className="w-24 font-medium flex items-center">
                      106,000 <span className="underline">đ</span>
                    </div>
                  </div>
                  <div className="mt-4 flex border-2 rounded-md">
                    <div>
                      <img src={i2} alt="" width={74} height={111} />
                    </div>
                    <div className="ml-6 h-24 flex flex-col flex-grow justify-between">
                      <div className="text-base">Bão táp phong vân</div>
                      <div className="text-base">Số lượng : 1</div>
                    </div>
                    <div className="w-24 font-medium flex items-center ml-20">
                      106,000 <span className="underline">đ</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center px-4 py-3 border-2 rounded-xl">
                    <img src={ShippingIcon} alt="" />
                    <div className="w-52 ml-5">
                      Được giao bởi nhà sách Ân Thi Smart Logistic (giao từ HN)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg p-4 bg-white">
                <div className="rounded-xl ">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center text-base font-medium">
                      <img src={Promotion} alt="" className="mr-2" width={26} />
                      Mã giảm giá
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary cursor-pointer">
                      Xem thêm
                      <img
                        src={ArrowRight}
                        alt=""
                        width={14}
                        className="ml-1"
                      />
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="text-base font-medium">GIẢM 100K</div>
                    <div className="text-xs italic font-light">
                      Đơn tối thiểu 600K
                    </div>
                    <div className="flex justify-between items-center">
                      <div
                        className="relative"
                        style={{
                          height: "6px",
                        }}
                      >
                        <img
                          src={HozLine}
                          alt=""
                          className="z-0"
                          height={6}
                          width={285}
                        />
                        <img
                          src={Process}
                          alt=""
                          className="absolute left-0 bottom-0 top-0 z-40"
                          style={{
                            height: "6px",
                            top: "2px",
                          }}
                          width={285}
                          height={6}
                        />
                      </div>
                      <div>
                        <img src={CheckedIcon} alt="" />
                      </div>
                    </div>
                    <div className="italic font-light text-xs">
                      Có thể áp dụng
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="text-base font-medium">GIẢM 100K</div>
                    <div className="text-xs italic font-light">
                      Đơn tối thiểu 600K
                    </div>
                    <div className="flex justify-between items-center">
                      <div
                        className="relative"
                        style={{
                          height: "6px",
                        }}
                      >
                        <img
                          src={HozLine}
                          alt=""
                          className="z-0"
                          height={6}
                          width={285}
                        />
                        <img
                          src={Process}
                          alt=""
                          className="absolute left-0 bottom-0 top-0 z-40"
                          style={{
                            height: "6px",
                            top: "2px",
                          }}
                          width={200}
                          height={6}
                        />
                      </div>
                      <div className="rounded-full border w-6 h-6">
                        {/* <img src={CheckedIcon} alt="" /> */}
                      </div>
                    </div>
                    <div className="italic font-light text-xs">
                      Có thể áp dụng
                    </div>
                  </div>
                  <div className="py-2">
                    <div className="text-base font-medium">GIẢM 100K</div>
                    <div className="text-xs italic font-light">
                      Đơn tối thiểu 600K
                    </div>
                    <div className="flex justify-between items-center">
                      <div
                        className="relative"
                        style={{
                          height: "6px",
                        }}
                      >
                        <img
                          src={HozLine}
                          alt=""
                          className="z-0"
                          height={6}
                          width={285}
                        />
                        <img
                          src={Process}
                          alt=""
                          className="absolute left-0 bottom-0 top-0 z-40"
                          style={{
                            height: "6px",
                            top: "2px",
                          }}
                          width={150}
                          height={6}
                        />
                      </div>
                      <div>
                        <img src={CheckedIcon} alt="" />
                      </div>
                    </div>
                    <div className="italic font-light text-xs">
                      Có thể áp dụng
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex bg-white mt-4 rounded-lg p-2"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                  width: "370px",
                }}
              >
                <div className="mr-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-4 scale-150 ml-1 mr-2"
                  />
                </div>
                <div>
                  <div className="font-medium text-base ">Yêu cầu hoá đơn</div>
                  <div className="mt-2">
                    nhà sách Ân Thi chỉ xuất hoá đơn điện tử
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-1310 mx-auto flex justify-between items-center mt-4">
            <div
              className="bg-white rounded-md py-2 flex-grow"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="ml-2 font-bold text-22">
                Phương thức thanh toán
              </div>
              <div
                onClick={() => setPayment(1)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 1 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 1 ? r2 : r1} alt="" />
                <img src={Icon1} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán khi nhận hàng
                </span>
              </div>
              <div
                onClick={() => setPayment(2)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 2 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 2 ? r2 : r1} alt="" />
                <img src={Icon2} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán bằng ví momo
                </span>
              </div>
              <div
                onClick={() => setPayment(3)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 3 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 3 ? r2 : r1} alt="" />
                <img src={Icon3} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán bằng ví Viettel Money
                </span>
              </div>
              <div
                onClick={() => setPayment(4)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 4 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 4 ? r2 : r1} alt="" />
                <img src={Icon4} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán bằng ví ZaloPay
                </span>
              </div>
              <div
                onClick={() => setPayment(5)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 5 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 5 ? r2 : r1} alt="" />
                <img src={Icon5} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán bằng VNPAY
                </span>
              </div>
              <div
                onClick={() => setPayment(6)}
                className="ml-4 rounded-lg cursor-pointer p-2 flex items-center mt-2"
                style={{
                  width: "500px",
                  border: payment === 6 ? "1px solid #00AB9F80" : "none",
                }}
              >
                <img src={payment == 6 ? r2 : r1} alt="" />
                <img src={Icon5} alt="" className="mr-3 ml-5" />
                <span className="text-sm font-normal">
                  Thanh toán bằng thẻ quốc tế Visa, MasterCard, JCB
                </span>
              </div>
            </div>

            <div
              className="bg-white rounded-lg ml-5"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
                width: "370px",
              }}
            >
              <div className="flex justify-between items-center  p-2">
                <div className="text-base font-medium">Đơn hàng</div>
                <div className="text-sm text-primary font-normal">Thay đổi</div>
              </div>
              <div
                className="px-4"
                style={{
                  borderBottom: "1px solid #B0B0B0",
                }}
              >
                3 sản phẩm
              </div>
              <div
                className="text-sm font-normal"
                style={{
                  borderBottom: "1px solid #B0B0B0",
                }}
              >
                <div className="flex justify-between px-4 py-2">
                  <div>Tạm tính</div>
                  <div>602,000 đ</div>
                </div>
                <div className="flex justify-between px-4 py-2">
                  <div>Phí vận chuyển</div>
                  <div>30,000 đ</div>
                </div>
                <div className="flex justify-between px-4 py-2">
                  <div>Khuyến mãi vận chuyển</div>
                  <div>- 30,000 đ</div>
                </div>
                <div className="flex justify-between px-4 py-2">
                  <div>Giảm giá</div>
                  <div>- 100,000 đ</div>
                </div>
              </div>
              <div className="flex justify-between px-4 py-2 my-2">
                <div className="text-base font-medium">Tổng tiền</div>
                <div className="text-primary font-black text-base">
                  502,000 đ
                </div>
              </div>
              <div
                className="italic font-light px-4"
                style={{
                  fontSize: "10px",
                  color: "#ACACAC",
                }}
              >
                giá này đã bao gồm thuế GTGT, phí đóng gói, phí vận chuyển và
                các chi phí phát sinh khác
              </div>
              <div className="flex items-center justify-center my-2">
                <button
                  className="p-3 px-10 text-white bg-secondaryColor rounded-md font-bold"
                  onClick={() => navigate("/dat-hang-thanh-cong")}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>

          <div
            className="max-w-1310 mx-auto bg-white mt-3 rounded-md py-2 flex justify-around items-center"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="text-base flex items-center">
              <img src={Csbh} alt="" className="mr-3" />
              Chính sách bảo hành
            </div>
            <div className="text-base flex items-center">
              <img src={Shipping} alt="" className="mr-3" />
              Chính sách vận chuyển
            </div>
            <div className="text-base flex items-center">
              <img src={Doitra} alt="" className="mr-3" />
              Chính sách đổi trả
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <CheckoutMobile />
    </>
  );
}
