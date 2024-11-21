import { useNavigate } from "react-router-dom";
import ArrowUpIcon from "../../assets/mdi_arrow-top-bold.png";
import Book1 from "../../assets/saleranks/bookk.png";
import SaleRankIcon from "../../assets/solar_chart-bold.png";
import "./style.css";

import l1 from "../../assets/books/l1.png";
import l2 from "../../assets/books/l2.png";
import l3 from "../../assets/books/l3.png";
import l4 from "../../assets/books/l4.png";

export default function SaleRank() {
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
      <div className="flex justify-between items-center bg-black">
        <div className="flex items-center my-3 mx-6">
          <div className="font-bold text-22 mr-2 text-white">
            Xu hướng mua sắm
          </div>
          <img src={SaleRankIcon} alt="" />
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
                Văn học
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 text-black rounded-t-lg active text-base"
                aria-current="page"
              >
                Kỹ năng sống
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
              >
                Thiếu nhi
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
              >
                Kinh tế
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
              >
                Sách nước ngoài
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block text-black p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-base"
              >
                Thể loại khác
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="flex justify-between  bg-white pb-3 rounded-b-md"
        style={{
          height: "692px",
        }}
      >
        <div
          className="saleLeft p-2 pb-4 overflow-y-scroll"
          style={{
            width: "465px",
            height: "690px",
            minWidth: "465px",
          }}
          id="scrollbar1"
        >
          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                01 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                02 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={l1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                03 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={l2}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                04 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={l3}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                05 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={l4}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                06 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={l4}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                07 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>

          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                08 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>
          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                09 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>
          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                01 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>
          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                01 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>
          <div
            className="flex  text-black cursor-pointer"
            onClick={() => navigate("/chi-tiet")}
          >
            <div className="flex items-center mr-2">
              <div className="text-center p-1 font-bold">
                01 <br />
                <img src={ArrowUpIcon} alt="" />
              </div>
              <img
                src={Book1}
                alt=""
                width={88}
                height={132}
                className="mr-2 ml-1"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <div className="text-sm">
                Ghi chép pháp y - Những tử thi không hoàn chỉnh
              </div>
              <div className="my-4 text-sm italic">Lưu Bát Bách</div>
              <div className="text-primary text-sm">998 điểm</div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow pl-11">
          <div className="w-44 min-w-44">
            <img src={Book1} alt="" width={170} height={255} />
          </div>
          <div className="text-black pr-6">
            <div className="font-bold text-22">
              Ghi chép pháp y - Những tử thi không hoàn chỉnh
            </div>
            <div className="py-2 text-xs">Tác giả: Lưu Bát Bách</div>
            <div className="text-xs">
              Nhà xuất bản: Thanh niên<span></span>
            </div>
            <div className="price flex justify-between mt-2 items-center py-2 w-52">
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
            <div className="font-bold italic py-2 text-base">
              Ghi chép pháp y - Những tử thi không hoàn chỉnh
            </div>
            <div className="italic text-base font-light">
              “Ghi chép pháp y - Những thi thể không hoàn chỉnh” là phần thứ 3,
              tiếp nối series đình đám “Ghi chép pháp y” được tác giả Pháp y Tần
              Minh và Phó giám đốc Hiệp hội pháp y Trung Quốc - Châu Diệc Vũ đặc
              biệt giới thiệu. Cuốn sách bao gồm 7 vụ án có thật, được viết bởi
              bác sĩ pháp y Lưu Bát Bách với 18 năm kinh nghiệm giải phẫu cho
              hơn 800 thi thể.
              <br />
              Nếu phần 1 đi sâu vào việc phá án bằng nghiệp vụ chuyên môn, phần
              2 là sự đồng cảm với những xác chết không thể lên tiếng thì ở phần
              3, tác giả sẽ tập trung miêu tả những hiện...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
