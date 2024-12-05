import { useNavigate } from "react-router-dom";
import ArrowRight from "../../assets/arrow-right2.png";
import Chacon from "../../assets/chacon.png";
import CheckedIcon from "../../assets/check-cirrcle.png";
import HozLine from "../../assets/gray_hozline.png";
import Process from "../../assets/process.png";
import Promotion from "../../assets/promotion.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import Policy from "../../containers/Policy";
import CartMobile from "../mobile/CartMobile";
import i1 from "./1.png";
import i2 from "./2.png";
import "./style.css";

export default function CartPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="desktop_only">
        <Header />
        <div className="bg_body py-6">
          <div className="max-w-1310 mx-auto mb-5">
            <div className="text-22 font-bold">Giỏ hàng</div>
            <div className="flex justify-between">
              <div
                className="bg-white rounded-lg mr-5 flex flex-grow flex-col p-4"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                  width: "370px",
                }}
              >
                <div className=" flex rounded-md ">
                  <div className="mr-10 flex flex-col items-center justify-center">
                    Chọn tất cả (3 sản phẩm)
                  </div>
                  <div
                    style={{
                      width: "74px",
                      height: "2px",
                    }}
                  >
                    {/* <img src={Chacon} alt="" width={74} height={111} /> */}
                  </div>
                  <div className="flex flex-col justify-between ml-6 flex-grow">
                    {/* <div className="text-base">Bước chân con bước chân cha</div>
                  <div className="font-medium text-base">106,000 đ</div> */}
                  </div>
                  <div className="text-base mx-10 flex items-center mr-16">
                    Số lượng
                  </div>
                  <div className="w-24 text-base flex items-center ml-16">
                    Thành tiền
                  </div>
                </div>
                <div className="mt-4 flex rounded-md ">
                  <div className="mr-10 flex flex-col items-center justify-center">
                    <label className="custom-checkbox text-sm">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                  <div>
                    <img src={Chacon} alt="" width={74} height={111} />
                  </div>
                  <div className="h-24 flex flex-col justify-between ml-6 flex-grow">
                    <div className="text-base">Bước chân con bước chân cha</div>
                    <div className="font-medium text-base">
                      106,000 <span className="underline">đ</span>
                    </div>
                  </div>
                  <div className="text-base mx-10 flex items-center mr-16">
                    1
                  </div>
                  <div className="w-24 text-base flex items-center ml-16">
                    106,000 đ
                  </div>
                </div>
                <div className="mt-6 flex rounded-md ">
                  <div className="mr-10 flex flex-col items-center justify-center">
                    <label className="custom-checkbox text-sm">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                  <div>
                    <img src={i2} alt="" width={74} height={111} />
                  </div>
                  <div className="h-24 flex flex-col justify-between ml-6 flex-grow">
                    <div className="text-base">Ác Nữ Trùng Sinh</div>
                    <div className="font-medium text-base">
                      159,000 <span className="underline">đ</span>
                    </div>
                  </div>
                  <div className="text-base mx-10 flex items-center mr-16">
                    1
                  </div>
                  <div className="w-24 text-base flex items-center ml-16">
                    159,000 đ
                  </div>
                </div>
                <div className="mt-6 flex rounded-md ">
                  <div className="mr-10 flex flex-col items-center justify-center">
                    <label className="custom-checkbox text-sm">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                  <div>
                    <img src={i1} alt="" width={74} height={111} />
                  </div>
                  <div className="h-24 flex flex-col justify-between ml-6 flex-grow">
                    <div className="text-base">Bão Táp Phong Vân</div>
                    <div className="font-medium text-base">
                      72,000 <span className="underline">đ</span>
                    </div>
                  </div>
                  <div className="text-base mx-10 flex items-center mr-16">
                    1
                  </div>
                  <div className="w-24 text-base flex items-center ml-16">
                    72,000 đ
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-lg ml-5 p-4"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                  width: "370px",
                }}
              >
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
                  <div className="flex justify-between my-4">
                    <div className="text-base font-medium">Tổng tiền</div>
                    <div className="text-base font-black text-primary">
                      502,000 đ
                    </div>
                  </div>
                  <div className="flex justify-center pt-4">
                    <button
                      className="bg-secondaryColor p-2 rounded-md text-white"
                      onClick={() => navigate("/thanh-toan")}
                    >
                      Tiến hành thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Policy />
        </div>
        <Footer />
      </div>
      <CartMobile />
    </>
  );
}
