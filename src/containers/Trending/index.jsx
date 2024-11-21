import { useNavigate } from "react-router-dom";
import ArrowRight from "../../assets/arrow-right.png";
import Book8 from "../../assets/books/comytu.png";
import r1 from "../../assets/books/r1.png";
import r2 from "../../assets/books/r2.png";
import r3 from "../../assets/books/r3.png";
import r4 from "../../assets/books/r4.png";
import r5 from "../../assets/books/r5.png";
import r6 from "../../assets/books/r6.png";
import r7 from "../../assets/books/r7.png";
import r8 from "../../assets/books/r8.png";
import r9 from "../../assets/books/r9.png";
import GGTrending from "../../assets/gg_trending.png";
import "./style.css";

export default function Trending() {
  const navigate = useNavigate();
  return (
    <div
      className="my-3 rounded-b-md mt-4 bg-white mobile_hidden"
      style={
        {
          // "box-shadow": "0px 4px 4px 0px #00000040",
        }
      }
    >
      <div
        className="flex justify-between items-center"
        style={{
          background: "#00AB9F",
        }}
      >
        <div className="flex items-center my-3 mx-6">
          <div className="font-bold text-22 mr-2">Xu hướng mua sắm</div>
          <img src={GGTrending} alt="" />
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
      <div className="trendingType bg-white pb-2">
        <div
          className="text-sm font-medium text-center text-gray-500 border-b border-gray-200"
          style={{
            borderBottom: "1px solid #ACACAC",
          }}
        >
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                href="#"
                className="ml-2 inline-block  p-4 border-b-2 border-transparent rounded-t-lg text-primary text-base border-b-primary"
              >
                Xu hướng theo ngày
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 text-black rounded-t-lg active text-base"
                aria-current="page"
              >
                Deal hời - Lời 100
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
              >
                Best Seller truyện tranh
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-between  bg-white pb-3 rounded-b-md">
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>

        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
          onClick={() => navigate("/chi-tiet")}
        >
          <img
            src={r7}
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
          onClick={() => navigate("/chi-tiet")}
        >
          <img
            src={r8}
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
        </div>
        <div
          className="card flex flex-col justify-center px-6 py-3 m-2 cursor-pointer"
          onClick={() => navigate("/chi-tiet")}
        >
          <img
            src={r9}
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
        </div>
      </div>

      <div className="flex">
        <div
          className="mx-auto border rounded-md text-black p-2 mb-4 cursor-pointer button_second"
          style={{
            border: "1px solid rgba(0, 171, 159, 1)",
          }}
          onClick={() => navigate("/danh-muc-san-pham")}
        >
          Xem thêm
        </div>
      </div>
    </div>
  );
}
