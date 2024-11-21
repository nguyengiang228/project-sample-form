import { useNavigate } from "react-router-dom";
import ArrowDown from "../../assets/arrow-down.png";
import ArrowLeft from "../../assets/arrow-left.png";
import ArrowRight2 from "../../assets/arrow-right2.png";
import b1 from "../../assets/books/b1.png";
import b2 from "../../assets/books/b2.png";
import b3 from "../../assets/books/b3.png";
import b4 from "../../assets/books/b4.png";
import b5 from "../../assets/books/b5.png";
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
import r1 from "../../assets/books/r1.png";
import r2 from "../../assets/books/r2.png";
import r3 from "../../assets/books/r3.png";
import r4 from "../../assets/books/r4.png";
import r5 from "../../assets/books/r5.png";
import r6 from "../../assets/books/r6.png";
import Star from "../../assets/star.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import "./style.css";

export default function CategoryPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="desktop_only">
        <Header />
      </div>

      {/* mobile */}
      <div
        className="mobile_only text-center text-22 text-white py-5 relative"
        style={{
          backgroundColor: "#00AB9F",
        }}
      >
        <div className="absolute left-6 top-6">
          <img
            src={ArrowLeft}
            draggable={false}
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        SÁCH VĂN HỌC
      </div>

      <div className="mobile_only px-8 mt-3 cm_xx">
        <div className="h-12 flex items-center p-2">
          Sắp xếp theo: <span className="mx-4">Mới nhất</span>{" "}
          <img src={ArrowDown} alt="" />
        </div>

        {/* mobile */}
        <div className="desktop_hidden flex justify-between bg-white cm8_1 flex-wrap">
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={Book8}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>

          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b1}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b2}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b3}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b4}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b5}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b1}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b2}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b3}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b4}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>

          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={b5}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
          <div
            className="card flex flex-col justify-center px-6 m-2 cursor-pointer h-fit pt-2"
            onClick={() => navigate("/chi-tiet")}
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
              width: "162px",
              paddingTop: "5px !important",
            }}
          >
            <img
              src={Book8}
              alt=""
              className="rounded-md mx-auto block w-fit mt-4"
              style={{
                height: "146px",
              }}
            />
            <div className="bookTitle text-center text-black mt-2 mb-3 book-title text-xs">
              Cách nghĩ để thành công 1
            </div>

            <div className="price flex justify-between">
              <div className="text-base font-bold">69,000 đ</div>
              <div className="text-base line-through">99,000 đ </div>
            </div>
          </div>
        </div>

        <div className="desktop_hidden mx-auto w-fit flex mb-32">
          <div className="w-6 h-6 rounded border border-black text-center mr-4">
            1
          </div>
          <div className="w-6 h-6 rounded border border-black text-center mr-4">
            2
          </div>
          <div className="w-6 h-6 rounded text-center mr-4">...</div>
          <div className="w-6 h-6 rounded border border-black text-center mr-4">
            7
          </div>
        </div>
      </div>

      <div className="desktop_only bg_body py-6">
        <div className="max-w-1310 mx-auto">
          <div className="breadcrumbs bg-white w-fit p-2 px-3">
            <span className="italic font-medium">Trang chủ</span>
            <span>{" > "}</span>
            <span className="italic font-medium">Sách Văn Học</span>
          </div>
        </div>

        <div className="flex justify-between max-w-1310 mx-auto">
          <div className="bg-white w-64 rounded-md border-primary h-fit">
            <div>
              <div className="font-bold border-b p-2">Nhóm sản phẩm</div>
              <div className="py-3 px-5">
                <div className="font-bold">Tất cả nhóm sản phẩm</div>
                <div className="font-normal mt-5 ml-4">Sách văn học</div>
                <div className="font-normal mt-5 ml-4">Tiểu thuyết</div>
                <div className="font-normal mt-5 ml-4">
                  Truyện ngắn - Tản văn
                </div>
                <div className="font-normal mt-5 ml-4">Tác phẩm kinh điển</div>
                <div className="font-normal mt-5 ml-4">Ngôn tình</div>
                <div className="font-normal mt-5 ml-4 mb-3 cursor-pointer">
                  Xem thêm...{" "}
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold border-t mb-2 pt-2 text-base px-5">
                Giá
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>0đ - 100,000đ</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>100,0000đ - 200,000đ</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>200,000đ - 5000,000đ</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>Trên 500,000đ</div>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold border-t mb-2 pt-2 text-base px-5 mt-5">
                Nhà cung cấp
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>Nhã Nam</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>NXB Trẻ</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>Đinh Tỵ</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>NXB Tổng hợp TP.HCM</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>NXB Kim Đồng</div>
                  </label>
                </div>
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>AZ Việt Nam</div>
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-4">
              <div className="font-bold border-t mb-2 pt-2 text-base px-5 mt-5">
                Độ tuổi
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>13 đến 18 tuổi</div>
                  </label>
                </div>
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>19 đến 29 tuổi</div>
                  </label>
                </div>
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>30 đến 49 tuổi</div>
                  </label>
                </div>
              </div>
              <div className="px-5">
                <div className="flex items-center ps-4 mt-5">
                  <label className="custom-checkbox text-sm">
                    <input type="checkbox" />
                    <span></span>
                    <div>50 tuổi trở lên</div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white w-64 rounded-md flex-grow ml-5"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="h-12 flex items-center p-2 border-b-primary relative w-fit pr-10 select_origin">
              Sắp xếp theo: <span className="mx-4 select_origin">Mới nhất</span>{" "}
              <img src={ArrowDown} alt="" className="select_origin" />
              <div
                className="absolute bg-white"
                style={{
                  border: "1px solid #00AB9F",
                  borderTop: "none",
                  right: -20,
                  top: 45,
                }}
              >
                <div className="px-4 cursor-pointer select_cat pr-16 py-3">
                  Xem thêm
                </div>
                <div className="px-4 cursor-pointer select_cat pr-16 py-3">
                  Nổi bật
                </div>
                <div className="px-4 cursor-pointer select_cat pr-16 py-3">
                  Chiết khẩu
                </div>
                <div className="px-4 cursor-pointer select_cat pr-16 py-3">
                  Giá bán
                </div>
                <div className="px-4 cursor-pointer select_cat pr-16 py-3">
                  Mới nhất
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between">
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={c1}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={Book8}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={c2}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={c3}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={c4}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={c5}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={image1}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={image2}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={image3}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={image4}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r1}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r2}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r3}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r4}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r5}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
              <div
                className="card-2 flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
                onClick={() => navigate("/chi-tiet")}
              >
                <img
                  src={r6}
                  alt=""
                  className="rounded-md h-64 w-44 mx-auto mt-2 block"
                />
                <div className="bookTitle text-center text-black mt-2 mb-3">
                  Đừng Nhìn Lén Nữa <br /> Anh Cũng Thích Em
                </div>

                <div className="price flex justify-between mt-2 items-center">
                  <div className="text-base font-bold text-black">69,000 đ</div>
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
                <div className="flex justify-center mt-4 mb-1">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-2 mb-5 select-none">
              <div className="border-primary flex page_num cursor-pointer text-base items-center justify-center rounded-md mx-3">
                1
              </div>
              <div className="border-primary flex page_num cursor-pointer text-base items-center justify-center rounded-md mx-3">
                2
              </div>
              <div className="border-primary flex page_num cursor-pointer text-base items-center justify-center rounded-md mx-3">
                3
              </div>
              <div className="border-primary flex page_num cursor-pointer text-base items-center justify-center rounded-md mx-3">
                4
              </div>
              <div className="flex page_num cursor-pointer text-base items-center justify-center rounded-md -bottom-2 text-22 relative">
                ...
              </div>
              <div className="border-primary flex page_num cursor-pointer text-base items-center justify-center rounded-md mx-3">
                9
              </div>
              <div className="flex items-center cursor-pointer text-base">
                <img src={ArrowRight2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop_only">
        <Footer />
      </div>
    </div>
  );
}
