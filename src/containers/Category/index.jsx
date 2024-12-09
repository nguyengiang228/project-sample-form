import { useNavigate } from "react-router-dom";
import ArrowRight from "../../assets/arrow-right.png";
import ArrowRight2 from "../../assets/arrow-right2.png";
import Book1 from "../../assets/books/Book1.png";
import Book2 from "../../assets/books/Book2.png";
import Book3 from "../../assets/books/Book3.png";
import Book4 from "../../assets/books/Book4.png";
import Book5 from "../../assets/books/Book5.png";
import b1 from "../../assets/books/b1.png";
import b2 from "../../assets/books/b2.png";
import b3 from "../../assets/books/b3.png";
import b4 from "../../assets/books/b4.png";
import b5 from "../../assets/books/b5.png";
import Book6 from "../../assets/books/book6.png";
import Book7 from "../../assets/books/book7.png";
import Book8 from "../../assets/books/book8.png";
import c1 from "../../assets/books/c1.png";
import c2 from "../../assets/books/c2.png";
import c3 from "../../assets/books/c3.png";
import c4 from "../../assets/books/c4.png";
import c5 from "../../assets/books/c5.png";
import image1 from "../../assets/books/image1.png";
import image2 from "../../assets/books/image2.png";
import image3 from "../../assets/books/image3.png";
import image4 from "../../assets/books/image4.png";
import brand1 from "../../assets/brand/1.png";
import brand2 from "../../assets/brand/2.png";
import brand3 from "../../assets/brand/3.png";
import brand4 from "../../assets/brand/4.png";
import CaChep from "../../assets/categories/ca chep 2.png";
import HozLine from "../../assets/hozline.png";
import Line from "../../assets/line.png";
import Menu from "../../assets/menu.png";
import Process from "../../assets/process.png";
import SaleRank from "../SaleRank";
import Trending from "../Trending";
import "./style.css";

import i1 from "./assets/1.png";
import i2 from "./assets/2.png";
import i3 from "./assets/3.png";
import i4 from "./assets/4.png";
import i6 from "./assets/6.png";
import i7 from "./assets/7.png";

export default function Category() {
  const navigate = useNavigate();

  return (
    <div className="bg_body py-4 cm1">
      <div className="max-w-1310 text-white mx-auto">
        {/* intro */}
        <div className="intro flex justify-between py-1">
          <div className=" intro_item flex flex-col items-start h-14 justify-center ml-24">
            <div className="font-bold cat_intro_label">Reding Reward</div>
            <div className="cat_intro_description">
              Tham gia ngay để có cơ hội nhận sách Miễn Phí
            </div>
          </div>
          <div className=" intro_item flex flex-col items-center h-14 justify-center relative px-12">
            <img src={Line} alt="" className="absolute left-0 top-4 bottom-0" />
            <div className="font-bold cat_intro_label">
              Deal hời nhà sách Ân Thi{" "}
            </div>
            <div className="cat_intro_description">
              Tiết kiệm tới 20% với Voucher dành riêng cho bạn{" "}
            </div>
            <img
              src={Line}
              alt=""
              className="absolute right-0 top-4 bottom-0"
            />
          </div>
          <div className=" intro_item flex flex-col items-end h-14 justify-center mr-24">
            <div className="font-bold cat_intro_label">
              Ứng dụng trên di động{" "}
            </div>
            <div className="cat_intro_description">
              Tích điểm, mua sắm nhanh chóng & tiện lợi{" "}
            </div>
          </div>
        </div>

        {/* list category  */}
        <div
          className="bg-white text-black my-4 pb-4 cm2 mobile_hidden"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="flex items-center p-2 border-b border-b-gray-300">
            <img src={Menu} alt="" />
            <span className="category_title">Danh mục sản phẩm</span>
          </div>

          <div className="cate_list flex justify-between mt-6">
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={Book5} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách văn học</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={Book1} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Tiểu sử - Hồi ký</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={Book2} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách kinh tế</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={Book3} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Kỹ năng sống</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={Book4} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách nước ngoài</div>
            </div>
          </div>

          <div className="cate_list flex justify-between mt-8">
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={b1} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách thiếu nhi</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={b2} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Khoa học kỹ thuật</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={b3} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách nuôi dạy con</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={b4} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Sách giáo khoa</div>
            </div>
            <div
              className="w-60 cursor-pointer"
              onClick={() => navigate("/danh-muc-san-pham")}
            >
              <div className="w-44 h-44 mx-auto">
                <img src={b5} alt="" className="w-full h-full" />
              </div>
              <div className="text-center">Thể loại khác</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mobile_hidden">
          <img src={Book7} alt="" className="-ml-1 block" />
          <img src={Book6} alt="" className="block" />
        </div>

        {/* gia tot */}
        <div
          className="my-3 rounded-b-md mobile_hidden"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div
            className="flex justify-between items-center"
            style={{
              background: "#006666",
            }}
          >
            <div className="font-bold my-3 mx-4 text-22">Giá tốt hôm nay</div>
            <div className="flex items-center my-3 mx-6">
              <div
                className="underline text-base mr-1 cursor-pointer"
                onClick={() => navigate("/danh-muc-san-pham")}
              >
                Xem tất cả
              </div>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
          <div className="flex justify-between  bg-white pb-3 rounded-b-md">
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
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                Khó Dỗ Dành
              </div>
              <div className="sale text-black text-xs">
                <i>Đã bán: 15</i> <br />
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
                  169,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  199,000 đ{" "}
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
                MBA bằng hình <br /> The Usual MBA
              </div>
              <div className="sale text-black text-xs">
                <i>Đã bán: 40</i> <br />
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
                  129,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  159,000 đ{" "}
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
                Muôn Kiếp Nhân Sinh <br />
              </div>
              <div className="sale text-black text-xs">
                <i>Đã bán: 25</i> <br />
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
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                Gió Nam Thầm Thì <br />
              </div>
              <div className="sale text-black text-xs">
                <i>Đã bán: 15</i> <br />
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
                  169,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  199,000 đ{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hay nhat thoi dai */}
        <div
          className="my-3 rounded-b-md mt-4 cm3"
          style={{
            "box-shadow": "0px 4px 4px 0px #00000040",
          }}
        >
          <div
            className="flex justify-between items-center cm6"
            style={{
              background: "#006666",
            }}
          >
            <div className="font-bold my-3 mx-4 text-22 cm4">
              Top 10 cuốn sách hay nhất mọi thời đại
            </div>
            <div className="flex items-center my-3 mx-6 cm7">
              <div
                className="underline text-base mr-1 cursor-pointer mb_nu cm5"
                onClick={() => navigate("/danh-muc-san-pham")}
              >
                Xem tất cả
              </div>
              <img src={ArrowRight} alt="" className="mobile_hidden " />
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
                <div className="text-base font-bold text-primary">45,500 đ</div>
                <div className="text-base font-bold text-gray line-through">
                  97,200 đ{" "}
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
                  110,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  210,000 đ{" "}
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
                  313,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  454,000 đ{" "}
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
                  109,500 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  188,000 đ{" "}
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
                <div className="text-base font-bold text-primary">79,000 đ</div>
                <div className="text-base font-bold text-gray line-through">
                  90,000 đ{" "}
                </div>
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="desktop_hidden flex justify-between bg-white cm8 cm10">
            <div
              className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
              onClick={() => navigate("/chi-tiet")}
              style={{
                boxShadow: "0px 4px 4px 0px #0000001A",
              }}
            >
              <img
                src={i1}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="bookTitle text-center text-black mt-2 mb-3 book-title">
                Cách nghĩ để thành công
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                src={i2}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                7 thói quen để thành đạt
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">
                  169,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  199,000 đ{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="desktop_hidden mt-6">
            <div
              className="flex justify-between items-center cm6"
              style={{
                background: "#006666",
              }}
            >
              <div className="font-bold my-3 mx-4 text-22 cm4">
                ĐÁNG CHÚ Ý DÀNH RIÊNG CHO BẠN
              </div>
              <div className="flex items-center my-3 mx-6 cm7">
                <div
                  className="underline text-base mr-1 cursor-pointer mb_nu cm5"
                  onClick={() => navigate("/danh-muc-san-pham")}
                >
                  Xem tất cả
                </div>
                <img src={ArrowRight} alt="" className="mobile_hidden " />
              </div>
            </div>
          </div>

          <div className="desktop_hidden flex justify-between bg-white cm8">
            <div
              className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
              onClick={() => navigate("/chi-tiet")}
              style={{
                boxShadow: "0px 4px 4px 0px #0000001A",
              }}
            >
              <img
                src={i3}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="bookTitle text-center text-black mt-2 mb-3 book-title">
                Trốn lên mái nhà để khóc
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                src={i4}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                Cổ mũ từ
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
                <div className="text-base font-bold text-gray line-through">
                  99,000 đ{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="desktop_hidden mt-6">
            <div
              className="flex justify-between items-center cm6"
              style={{
                background: "#006666",
              }}
            >
              <div className="font-bold my-3 mx-4 text-22 cm4">
                SÁCH MỚI PHÁT HÀNH
              </div>
              <div className="flex items-center my-3 mx-6 cm7">
                <div
                  className="underline text-base mr-1 cursor-pointer mb_nu cm5"
                  onClick={() => navigate("/danh-muc-san-pham")}
                >
                  Xem tất cả
                </div>
                <img src={ArrowRight} alt="" className="mobile_hidden " />
              </div>
            </div>
          </div>

          <div className="desktop_hidden flex justify-between bg-white cm8">
            <div
              className="card flex flex-col justify-center px-6 py-2 m-2 cursor-pointer"
              onClick={() => navigate("/chi-tiet")}
              style={{
                boxShadow: "0px 4px 4px 0px #0000001A",
              }}
            >
              <img
                src={i7}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="bookTitle text-center text-black mt-2 mb-3 book-title">
                Dám nghĩ lại
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                src={i6}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                Lý thuyết trò chơi 1
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
                <div className="text-base font-bold text-gray line-through">
                  99,000 đ{" "}
                </div>
              </div>
            </div>
          </div>

          <div
            className="desktop_hidden flex justify-between my-6 px-3 pb-6"
            style={{
              borderBottom: "1px solid black",
            }}
          >
            <img src={brand1} alt="" />
            <img src={brand3} alt="" />
            <img src={brand2} alt="" />
          </div>
        </div>

        {/* list category2 */}
        <div className="flex flex-wrap py-2 mt-4 bg-white justify-between mobile_hidden">
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={CaChep} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand1} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand2} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand3} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand4} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand4} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand1} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand3} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={CaChep} alt="" />
          </div>
          <div
            className="cate2_card flex justify-center mt-2 py-1 rounded-md"
            style={{
              width: "19.5%",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <img src={brand2} alt="" />
          </div>
        </div>

        {/* dang chu y */}
        <div
          className="my-3 rounded-b-md mt-4 mobile_hidden"
          style={{
            "box-shadow": "0px 4px 4px 0px #00000040",
          }}
        >
          <div
            className="flex justify-between items-center"
            style={{
              background: "#006666",
            }}
          >
            <div className="font-bold my-3 mx-4 text-22">
              Đáng chú ý & dành riêng cho bạn
            </div>
            <div className="flex items-center my-3 mx-6">
              <div
                className="underline text-base mr-1 cursor-pointer"
                onClick={() => navigate("/danh-muc-san-pham")}
              >
                Xem tất cả
              </div>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
          <div className="flex justify-between  bg-white pb-3 rounded-b-md">
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
              <div className="bookTitle text-center text-black mt-2 mb-3 book-title">
                Khó dỗ dành
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">
                  169,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  199,000 đ{" "}
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
                src={Book8}
                alt=""
                className="rounded-md h-64 w-44 mx-auto mt-2 block"
              />
              <div className="book-title bookTitle text-center text-black mt-2 mb-3">
                Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
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
                Muôn kiếp nhân sinh <br />
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">
                  129,000 đ
                </div>
                <div className="text-base font-bold text-gray line-through">
                  159,000 đ{" "}
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
                MBA Bằng Hình <br /> The Usual MBA
              </div>

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
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

              <div className="price flex justify-between mt-2">
                <div className="text-base font-bold text-primary">69,000 đ</div>
                <div className="text-base font-bold text-gray line-through">
                  99,000 đ{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Trending />
        <SaleRank />
      </div>
    </div>
  );
}
