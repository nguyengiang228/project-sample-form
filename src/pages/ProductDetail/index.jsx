import { useState } from "react";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight from "../../assets/arrow-right.png";
import ArrowRight2 from "../../assets/arrow-right2.png";
import c1 from "../../assets/books/c1.png";
import c2 from "../../assets/books/c2.png";
import c3 from "../../assets/books/c3.png";
import c4 from "../../assets/books/c4.png";
import c5 from "../../assets/books/c5.png";
import Book8 from "../../assets/books/comytu.png";
import image1 from "../../assets/books/image1.png";
import image2 from "../../assets/books/image2.png";
import image3 from "../../assets/books/image3.png";
import image4 from "../../assets/books/image4.png";
import Image1 from "../../assets/chacon.png";
import Csbh from "../../assets/csbh.png";
import Doitra from "../../assets/doitra.png";
import success from "../../assets/success.png";

import cart2 from "../../assets/cart2.png";
import HozLine from "../../assets/gray_hozline.png";
import GrayStar from "../../assets/gray_star.png";
import home from "../../assets/home.png";
import Minus from "../../assets/minus.png";
import Plus from "../../assets/plus.png";
import Process from "../../assets/process.png";
import Promotion from "../../assets/promotion.png";
import search_w from "../../assets/search_w.png";
import Shipping from "../../assets/shipping.png";
import Star from "../../assets/star.png";
import BgPromotion from "../../assets/subtract.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import BottomAddCart from "../../containers/BottomAddCart";
import ProductDetailMobile from "../mobile/ProductDetail";
import "./style.css";

export default function ProducDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [cartChange, setCartChange] = useState(undefined);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/admin/thong-ke");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="desktop_only">
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closeIcon={false}
          footer={<></>}
          className="loginn--modal"
        >
          <div className="flex pt-3" style={{}}>
            <div>
              <img src={success} alt="" />
            </div>
            <div className="font-bold text-center text-base ml-6">
              Lưu mã giảm giá thành công!
            </div>
          </div>
        </Modal>

        <div className="desktop_only">
          <Header cartChange={cartChange} />
        </div>

        {/* mobile */}
        <div
          className="mobile_only text-center text-22 text-white py-5 relative flex justify-end"
          style={{
            backgroundColor: "#00AB9F",
          }}
        >
          <div className="absolute left-6 top-5">
            <img
              src={ArrowLeft}
              draggable={false}
              alt=""
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex w-fit mr-7">
            <img
              src={search_w}
              draggable={false}
              alt=""
              onClick={() => navigate("/")}
              className="ml-6"
            />
            <img
              src={home}
              draggable={false}
              alt=""
              onClick={() => navigate("/")}
              className="ml-6"
            />
            <img
              src={cart2}
              draggable={false}
              alt=""
              onClick={() => navigate("/cart")}
              className="ml-6"
            />
          </div>
        </div>

        <div className=" bg_body py-6">
          <div className="desktop_only max-w-1310 mx-auto mb-2">
            <div className="breadcrumbs bg-white w-fit p-2 px-3">
              <span className="italic font-medium">Trang chủ</span>
              <span>{" > "}</span>
              <span className="italic font-medium">Sách Văn Học</span>
              <span>{" > "}</span>
              <span className="italic font-medium">Tiểu thuyết</span>
              <span>{" > "}</span>
              <span className="italic font-medium">
                Bước chân cha bước chân con
              </span>
            </div>
          </div>

          <div className="flex justify-between max-w-1310 mx-auto">
            <div
              className="rounded-md bg-white w-full py-4 px-2 flex"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex w-1/3 mr-28">
                <div className="mr-5">
                  <img
                    src={Image1}
                    alt=""
                    className="rounded-md"
                    width={74}
                    height={111}
                  />
                  <img
                    src={Image1}
                    alt=""
                    className="rounded-md mt-4"
                    width={74}
                    height={111}
                  />
                </div>
                <div>
                  <img src={Image1} alt="" className="rounded-md" width={265} />
                </div>
              </div>
              <div className="flex-grow max-w-xl">
                <div className="font-bold">Bước chân cha bước chân của con</div>
                <div className="flex justify-between">
                  <div className="w-full">
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm font-normal mt-4">
                          Nhà cung cấp:{" "}
                          <span className="text-primary">
                            Công ty văn hoá Văn Lang
                          </span>
                        </div>
                        <div className="text-sm font-normal mt-2">
                          Nhà xuất bản:{" "}
                          <span className="text-primary">Hồng Đức</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-normal mt-4">
                          Tác giả:{" "}
                          <span className="text-primary">Tây Vũ Khách</span>
                        </div>
                        <div className="text-sm font-normal mt-2">
                          Hình thức bìa: Bìa mềm
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-2 mb-1">
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                      <img src={Star} alt="" />
                    </div>
                  </div>
                </div>
                <div className="price flex mt-2 items-center">
                  <div className="text-base font-bold text-black text-22 text-second mr-8 my-10">
                    69,000 đ
                  </div>
                  <div className="flex items-center">
                    <div className="font-bold text-gray line-through text-xs mr-2 italic">
                      99,000 đ{" "}
                    </div>
                    <div
                      className="text-base font-bold text-white bg-primary px-1 italic rounded-md"
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      -27%
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mt-4">
                    <div className="text-sm font-normal w-36 mr-16">
                      Thời gian giao hàng
                    </div>
                    <div className="text-sm font-normal">
                      Giao hàng tới:{" "}
                      <span className="text-primary font-medium">Thay đổi</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="text-sm font-normal w-36 mr-16">
                      Chính sách đổi trả
                    </div>
                    <div className="text-sm font-normal">
                      Đổi trả sản phẩm trong 30 ngày
                    </div>
                  </div>
                </div>
                <div className="flex items-center my-10">
                  <div className="mr-32">Số lượng</div>
                  <div className="flex justify-between items-center w-44  rounded-md border-primary px-3 py-2 ">
                    <div>
                      <img
                        src={Minus}
                        alt=""
                        className="select-none cursor-pointer"
                        draggable={false}
                        onClick={() => setQuantity((prev) => prev - 1)}
                      />
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="outline-none w-4"
                      value={quantity}
                    />
                    <div>
                      <img
                        src={Plus}
                        alt=""
                        className="select-none cursor-pointer"
                        draggable={false}
                        onClick={() => setQuantity((prev) => prev + 1)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <button
                    className="border-primary px-4 py-2 rounded-md mr-5"
                    onClick={() => setCartChange((prev) => !prev)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                  <button
                    className="bg-primary px-4 py-2 rounded-md text-white"
                    onClick={() => navigate("/thanh-toan")}
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md max-w-1310 mx-auto">
            <div className="bg-white w-full py-4 px-2 flex mt-2">
              <div className="flex items-center ml-1">
                <div className="mr-5">
                  <img src={Promotion} alt="" />
                </div>
                <div className="text-22 font-bold">
                  Ưu đãi dành riêng cho bạn
                </div>
              </div>
            </div>

            <div className="trendingType bg-white pb-2">
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 p-2 border-b-primary-1">
                <ul className="flex flex-wrap -mb-px">
                  <li className="me-2">
                    <a
                      href="#"
                      className="ml-2 inline-block  p-1 border-b-2 border-transparent rounded-t-lg text-primary text-base border-b-primary"
                    >
                      Tất cả
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-1 text-black rounded-t-lg active text-base"
                      aria-current="page"
                    >
                      Mã giảm giá
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block text-black p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
                    >
                      Mã thanh toán
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block text-black p-1 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
                    >
                      Ưu đãi khác
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white flex pt-1 pb-4 px-2 justify-between">
              <div
                className="flex mx-2 flex-grow"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <div className="relative">
                  <img
                    src={BgPromotion}
                    alt=""
                    className="select-none mr-1"
                    draggable={false}
                  />
                  <div className="w-full absolute top-0 text-white mt-2">
                    <div className="text-sm font-bold text-center">
                      CHAO
                      <br />
                      BAN
                      <br /> MOI
                    </div>
                    <div
                      className="text-center"
                      style={{
                        fontSize: "11px",
                      }}
                    >
                      Giảm tối đa 50k
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-2 items-center flex-grow">
                  <div>
                    <div className="font-bold text-base">Giảm tối đa 50K</div>
                    <div className="text-base">Đơn tối thiểu 0đ</div>
                    <div className="italic text-gray mt-2">
                      Có thể áp dụng ngay bây giờ
                    </div>
                  </div>
                  <button
                    onClick={showModal}
                    className=" bg-primary px-4 py-2 rounded-md text-white h-8 flex items-center justify-center font-bold"
                  >
                    Lưu
                  </button>
                </div>
              </div>
              <div
                className="flex mx-2 flex-grow"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <div className="relative">
                  <img
                    src={BgPromotion}
                    alt=""
                    className="select-none mr-1"
                    draggable={false}
                  />
                  <div className="w-full absolute top-0 text-white mt-2">
                    <div className="text-sm font-bold text-center">
                      CHAO
                      <br />
                      BAN
                      <br /> MOI
                    </div>
                    <div
                      className="text-center"
                      style={{
                        fontSize: "11px",
                      }}
                    >
                      Giảm tối đa 50k
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-2 items-center flex-grow">
                  <div>
                    <div className="font-bold text-base">Giảm tối đa 50K</div>
                    <div className="text-base">Đơn tối thiểu 0đ</div>
                    <div className="italic text-gray mt-2">
                      Có thể áp dụng ngay bây giờ
                    </div>
                  </div>
                  <button
                    onClick={showModal}
                    className=" bg-primary px-4 py-2 rounded-md text-white h-8 flex items-center justify-center font-bold"
                  >
                    Lưu
                  </button>
                </div>
              </div>
              <div
                className="flex mx-2 flex-grow"
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
              >
                <div className="relative">
                  <img
                    src={BgPromotion}
                    alt=""
                    className="select-none mr-1"
                    draggable={false}
                  />
                  <div className="w-full absolute top-0 text-white mt-2">
                    <div className="text-sm font-bold text-center">
                      CHAO
                      <br />
                      BAN
                      <br /> MOI
                    </div>
                    <div
                      className="text-center"
                      style={{
                        fontSize: "11px",
                      }}
                    >
                      Giảm tối đa 50k
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-2 items-center flex-grow">
                  <div>
                    <div className="font-bold text-base">Giảm tối đa 50K</div>
                    <div className="text-base">Đơn tối thiểu 0đ</div>
                    <div className="italic text-gray mt-2">
                      Có thể áp dụng ngay bây giờ
                    </div>
                  </div>
                  <button
                    onClick={showModal}
                    className=" bg-primary px-4 py-2 rounded-md text-white h-8 flex items-center justify-center font-bold"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="max-w-1310 mx-auto bg-white mt-2 rounded-md"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div
              className="flex items-center py-2 px-2"
              style={{
                borderBottom: "1px solid #B0B0B0",
                // boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="text-22 font-bold">Thông tin chi tiết</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Mã sản phẩm</div>
              <div className="text-sm font-normal">VH213</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">
                Tên nhà cung cấp
              </div>
              <div className="text-sm font-normal">
                <span className="text-primary">Công ty Văn Hoá Văn Lang</span>
              </div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Tác giả</div>
              <div className="text-sm font-normal">Tây Vũ Khách</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Nhà xuất bản</div>
              <div className="text-sm font-normal">Bảo Ngọc</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Năm xuất bản</div>
              <div className="text-sm font-normal">2024</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Ngôn ngữ</div>
              <div className="text-sm font-normal">2024</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">
                Trọng lượng (gr)
              </div>
              <div className="text-sm font-normal">290</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">
                Kích thước bao bì (cm)
              </div>
              <div className="text-sm font-normal">21 x 13 x 1</div>
            </div>
            <div className="flex items-center px-4 pt-3">
              <div className="text-sm font-normal w-36 mr-72">Số trang</div>
              <div className="text-sm font-normal">256</div>
            </div>
            <div className="flex items-center px-4 pt-3 pb-3">
              <div className="text-sm font-normal w-36 mr-72">Hình thức</div>
              <div className="text-sm font-normal">Bìa mềm</div>
            </div>
          </div>

          <div
            className="max-w-1310 mx-auto bg-white mt-2 rounded-md"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div
              className="flex items-center py-2 px-4"
              style={
                {
                  // borderBottom: "1px solid #B0B0B0",
                  // boxShadow: "0px 4px 4px 0px #00000040",
                }
              }
            >
              <div className="text-base font-bold">
                BƯỚC CHÂN CON BƯỚC CHÂN CHA
              </div>
            </div>
            <div className="flex items-center px-4 mt-1">
              <div className="text-sm font-normal">
                Lâm Phương Đắc - người đàn ông trung niên mất việc lại còn mắc
                bệnh nan y, dắt cậu con trai - Lâm Hậu Phác thi rớt, không chịu
                cầu tiến ra ngoài ngao du. Người cha hứa với con trai, kết thúc
                hành trình ba mươi ngày, con sẽ được tự do. Cách xây dựng cốt
                truyện này từ đầu đã đi thẳng vào chủ đề: Khích lệ con trai và
                mài giũa ý chí trong hành trình ngao du gian khổ. Nhưng đọc đến
                cuối cùng, tôi vô cùng cảm động trước cách cư xử của hai cha
                con. Trên con đường đời gặp phải những trắc trở là chuyện bình
                thường, chuyến đi là một sự tượng trưng
              </div>
            </div>
            <div className="flex items-center px-4 py-4">
              <div className="text-sm font-normal">
                Đi ra ngoài là để tìm kiếm, khám phá, hai thế hệ cùng nhau tìm
                tòi, cùng nhau phát hiện, cùng nhau trưởng thành. Cuốn tiểu
                thuyết không những cho ta hiểu được tình yêu thiêng liêng cao cả
                của đấng sinh thành, góp phần bồi đắp, vun vén tình cảm giữa cha
                mẹ và con cái, mà còn bộc lộ được sức mạnh của tư tưởng triết
                học “Lộ mạn mạn kì tu viễn hề, ngô tương thượng hạ cầu tác” (Con
                đường dài đằng đẵng, ta còn ngược xuôi kiếm tìm). Đời người luôn
                ở trên đường, đây mới là đời người
              </div>
            </div>
          </div>

          <div
            className="max-w-1310 mx-auto bg-white mt-2 rounded-md pb-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex items-center py-2 px-2">
              <div className="text-22 font-bold">Đánh giá sản phẩm</div>
            </div>
            <div className="px-8">
              <div className="font-bold text-base">Tổng quan</div>
              <div className="flex items-center mt-2">
                <div className="text-sm">4,9</div>
                <div className="flex mx-4">
                  <img width={18} src={Star} alt="" />
                  <img width={18} src={Star} alt="" />
                  <img width={18} src={Star} alt="" />
                  <img width={18} src={Star} alt="" />
                  <img width={18} src={Star} alt="" />
                </div>
                <div className="text-sm">(190 đánh giá)</div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center my-2">
                    <div className="flex">
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                    </div>
                    <div className="relative mx-4">
                      <img src={HozLine} alt="" className="z-0" />
                      <img
                        src={Process}
                        alt=""
                        className="absolute left-0 bottom-0 z-40 h-2"
                        width={200}
                      />
                    </div>
                    <div className="text-sm">172</div>
                  </div>
                  <div className="flex items-center my-2">
                    <div className="flex">
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                    </div>
                    <div className="relative mx-4">
                      <img src={HozLine} alt="" className="z-0" />
                      <img
                        src={Process}
                        alt=""
                        className="absolute left-0 bottom-0 z-40 h-2"
                        width={100}
                      />
                    </div>
                    <div className="text-sm">100</div>
                  </div>
                  <div className="flex items-center my-2">
                    <div className="flex">
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                    </div>
                    <div className="relative mx-4">
                      <img src={HozLine} alt="" className="z-0" />
                      <img
                        src={Process}
                        alt=""
                        className="absolute left-0 bottom-0 z-40 h-2"
                      />
                    </div>
                    <div className="text-sm">172</div>
                  </div>
                  <div className="flex items-center my-2">
                    <div className="flex">
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                    </div>
                    <div className="relative mx-4">
                      <img src={HozLine} alt="" className="z-0" />
                      <img
                        src={Process}
                        alt=""
                        className="absolute left-0 bottom-0 z-40 h-2"
                      />
                    </div>
                    <div className="text-sm">172</div>
                  </div>
                  <div className="flex items-center my-2">
                    <div className="flex">
                      <img width={18} src={Star} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                      <img width={18} src={GrayStar} alt="" />
                    </div>
                    <div className="relative mx-4">
                      <img src={HozLine} alt="" className="z-0" />
                      <img
                        src={Process}
                        alt=""
                        className="absolute left-0 bottom-0 z-40 h-2"
                      />
                    </div>
                    <div className="text-sm">172</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-normal mt-4 mr-10">
                    Chỉ có thành viên mới có thể viết nhận xét. Vui lòng
                    <span className="text-primary mx-1">đăng nhập</span>hoặc
                    <span className="text-primary mx-1">đăng ký</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="max-w-1310 mx-auto bg-white mt-2 rounded-md pb-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div
              className="flex justify-between items-center"
              style={{
                background: "#00AB9F",
              }}
            >
              <div className="flex items-center my-3 mx-6">
                <div className="font-bold text-22 mr-2 text-white">
                  BookStore giới thiệu tới bạn
                </div>
              </div>
              <div className="flex items-center my-3 mx-6">
                <div
                  className="underline text-base mr-1 text-white cursor-pointer"
                  onClick={() => navigate("/danh-muc-san-pham")}
                >
                  Xem tất cả
                </div>
                <img src={ArrowRight} alt="" />
              </div>
            </div>

            <div className="flex justify-between  bg-white pb-3 rounded-b-md relative mobile_hidden">
              <div className="absolute top-0 bottom-0 -right-6 flex items-center select-none">
                <img
                  src={ArrowRight2}
                  alt=""
                  className="cursor-pointer"
                  draggable={false}
                />
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={c1}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3 book-title">
                  Cách nghĩ để thành công 1
                </div>

                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={c2}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  7 thói quen để thành đạt
                </div>

                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={c3}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đắc nhân tâm
                </div>

                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={c4}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Cuộc sống không giới hạn
                </div>

                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={c5}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Hành trình về phương Đông
                </div>

                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="max-w-1310 mx-auto bg-white mt-3 rounded-md pb-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div
              className="flex justify-between items-center"
              style={{
                background: "#00AB9F",
              }}
            >
              <div className="flex items-center my-3 mx-6">
                <div className="font-bold text-22 mr-2 text-white">
                  BookStore - The best choice
                </div>
              </div>
              <div className="flex items-center my-3 mx-6">
                <div
                  className="underline text-base mr-1 text-white cursor-pointer"
                  onClick={() => navigate("/danh-muc-san-pham")}
                >
                  Xem tất cả
                </div>
                <img src={ArrowRight} alt="" />
              </div>
            </div>

            <div className="flex justify-between  bg-white pb-3 rounded-b-md relative">
              <div className="absolute top-0 bottom-0 -right-6 flex items-center select-none">
                <img
                  src={ArrowRight2}
                  alt=""
                  className="cursor-pointer"
                  draggable={false}
                />
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={Book8}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>
                <div className="sale text-black text-xs">
                  <i>Đã bán: 9</i> <br />
                  <div className="relative">
                    <img src={HozLine} alt="" className="z-0" />
                    <img
                      src={Process}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 z-40"
                    />
                  </div>
                </div>
                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={image1}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>
                <div className="sale text-black text-xs">
                  <i>Đã bán: 9</i> <br />
                  <div className="relative">
                    <img src={HozLine} alt="" className="z-0" />
                    <img
                      src={Process}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 z-40"
                    />
                  </div>
                </div>
                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={image2}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>
                <div className="sale text-black text-xs">
                  <i>Đã bán: 9</i> <br />
                  <div className="relative">
                    <img src={HozLine} alt="" className="z-0" />
                    <img
                      src={Process}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 z-40"
                    />
                  </div>
                </div>
                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={image3}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>
                <div className="sale text-black text-xs">
                  <i>Đã bán: 9</i> <br />
                  <div className="relative">
                    <img src={HozLine} alt="" className="z-0" />
                    <img
                      src={Process}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 z-40"
                    />
                  </div>
                </div>
                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
              </div>
              <div
                className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
                style={{
                  boxShadow: "0px 4px 4px 0px #0000001A",
                }}
              >
                <img
                  src={image4}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>
                <div className="sale text-black text-xs">
                  <i>Đã bán: 9</i> <br />
                  <div className="relative">
                    <img src={HozLine} alt="" className="z-0" />
                    <img
                      src={Process}
                      alt=""
                      className="absolute top-0 left-0 bottom-0 z-40"
                    />
                  </div>
                </div>
                <div className="price flex justify-between mt-2">
                  <div className="text-base font-bold text-primary">
                    69,000 đ
                  </div>
                  <div className="text-base font-bold text-gray line-through">
                    99,000 đ{" "}
                  </div>
                </div>
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

      <div className="mobile_only">
        <ProductDetailMobile />
        <BottomAddCart />
      </div>
    </>
  );
}
