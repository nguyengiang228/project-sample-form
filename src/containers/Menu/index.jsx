import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../../assets/books.png";
import "./style.css";

export default function Menu() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="menu justify-center pt-24 text-black text-base ">
      <div
        className="overlay"
        onClick={() => {
          // alert(1);
          document.querySelector(".menu").style = "display: none !important";
          setTimeout(() => {
            document.querySelector(".menu").style = "";
          }, 1000);
        }}
      ></div>
      <div
        className="flex p-4 bg-white rounded-md h-fit z-50"
        style={{
          boxShadow: "0px 4px 4px 0px #00000040",
          width: "1100px",
        }}
      >
        <div
          className=""
          style={{
            width: "290px",
          }}
        >
          <div className="text-22 font-bold">Danh mục sản phẩm</div>
          <div
            className="border-r mt-3"
            style={{
              borderRight: "2px solid #D1D1D1",
            }}
          >
            <div
              onClick={() => setActive(1)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 1 ? "text-primary" : ""
              }`}
            >
              Sách Văn học
            </div>
            <div
              onClick={() => setActive(2)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 2 ? "text-primary" : ""
              }`}
            >
              Sách Kinh tế
            </div>
            <div
              onClick={() => setActive(3)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 3 ? "text-primary" : ""
              }`}
            >
              Sách Tâm lý - Kỹ năng sống
            </div>
            <div
              onClick={() => setActive(4)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 4 ? "text-primary" : ""
              }`}
            >
              Sách Thiếu nhi
            </div>
            <div
              onClick={() => setActive(5)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 5 ? "text-primary" : ""
              }`}
            >
              Sách Khoa học kỹ thuật
            </div>
            <div
              onClick={() => setActive(6)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 6 ? "text-primary" : ""
              }`}
            >
              Sách Tiểu sử - Hồi ký
            </div>
            <div
              onClick={() => setActive(7)}
              className={`cursor-pointer font-medium text-base py-3 ${
                active === 7 ? "text-primary" : ""
              }`}
            >
              Sách Nước ngoài
            </div>
          </div>
        </div>
        <div className="px-6 flex-grow">
          {active === 1 && (
            <div>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Văn Học
                </div>
              </div>
              <table className="mt-3 w-full">
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Tiểu thuyết
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Light Novel
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Ca dao - Thành ngữ - Tục ngữ
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Huyền bí - Kinh dị
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Truyện ngắn - Tản văn
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Ngôn tình
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Trinh thám - Kiếm hiệp
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Phóng sự - Ký sự
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Tác phẩm kinh điển
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Du ký
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Truyện cổ tích - Ngụ ngôn
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Tác giả - Tác phẩm
                  </td>
                </tr>
              </table>
            </div>
          )}

          {active === 2 && (
            <div>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Kinh Tế
                </div>
              </div>
              <table className="mt-3 w-full">
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Quản trị - Lãnh đạo
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Phân tích kinh tế
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Nhân vật - Việc làm
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Chứng khoán
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Marketing - Bán hàng
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Khởi nghiệp - Làm giàu
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Tài chính
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Nhân vật - Bài học KD
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Bất động sản
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Kế toán
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
              </table>
            </div>
          )}

          {active === 3 && (
            <div>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Kỹ Năng Sống
                </div>
              </div>
              <table className="mt-3 w-full">
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Kỹ năng sống
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Tâm lý
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Hướng nghiệp & phát triển bản thân
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Rèn luyện nhân cách
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Sách cho tuổi mới lớn
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
              </table>
            </div>
          )}

          {active === 4 && (
            <div>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Thiếu Nhi
                </div>
              </div>
              <table className="mt-3 w-full">
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Y học và sức khoẻ
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Công nghệ thông tin
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Khoa học khác
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Kiến thức Khoa học & Tự nhiên
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Toán học
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Bách khoa tri thức
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Thiết kế - Kiến trúc - Xây dựng{" "}
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
              </table>
            </div>
          )}

          {active === 5 && (
            <>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Khoa Học Kỹ Thuật
                </div>
              </div>
              <table className="mt-3">
                <tr>
                  <td width={290} className=" py-2">
                    Y học và sức khoẻ
                  </td>
                  <td width={290} className=" py-2">
                    Công nghệ thông tin
                  </td>
                  <td className=" py-2">Khoa học khác</td>
                </tr>
                <tr>
                  <td width={290} className=" py-2">
                    Kiến thức Khoa học & Tự nhiên
                  </td>
                  <td width={290} className=" py-2">
                    Toán học
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
                <tr>
                  <td width={290} className=" py-2">
                    Bách khoa tri thức
                  </td>
                  <td width={290} className=" py-2">
                    Thiết kế - Kiến trúc - Xây dựng{" "}
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  ></td>
                </tr>
              </table>
            </>
          )}

          {active === 6 && (
            <>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Tiểu Sử - Hồi Ký
                </div>
              </div>
              <table className="mt-3">
                <tr>
                  <td className="pr-24 py-2">Câu chuyện cuộc đời</td>
                  <td className="pr-24 py-2">Nghệ thuật giải trí</td>
                </tr>
                <tr>
                  <td className="pr-24 py-2">Kinh tế</td>
                  <td className="pr-24 py-2">Chính trị</td>
                </tr>
              </table>
            </>
          )}

          {active === 7 && (
            <div>
              <div className="flex items-center">
                <img src="" alt="" />
                <div className="text-22 font-bold flex items-center">
                  <img src={Book} alt="" className="pr-3" />
                  Sách Nước Ngoài
                </div>
              </div>
              <table className="mt-3 w-full">
                <tr>
                  <td className="py-2 font-bold">Children’s</td>
                  <td className="py-2 font-bold">History</td>
                  <td className="py-2 font-bold">Religion & Spirituality</td>
                  <td className="py-2 font-bold">More Categories</td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Action & Adventure
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Asian
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Agnosticism
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Romance
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Cars & Trucks
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    African
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Astrology
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Sci-Fi & Fantasy
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Animals
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Ancient
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Atheism
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Science & Math
                  </td>
                </tr>
                <tr>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Classics
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Black history
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Buddhism
                  </td>
                  <td
                    className="py-2"
                    onClick={() => navigate("/danh-muc-san-pham")}
                  >
                    Teen & Young Adult
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
