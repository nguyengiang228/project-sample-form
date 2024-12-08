import { useNavigate } from "react-router-dom";
import Calendar from "../../assets/admins/calenda.png";
import Delete from "../../assets/admins/delete.png";
import Edit from "../../assets/admins/edit.png";
import ArrowRight from "../../assets/arrow-right2.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminCustomerPage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={2} />
          <div
            className="bg-white flex-grow p-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex justify-between">
              <div className="text-22 font-semibold">Quản lý sản phẩm</div>
              <div className="text-sm ">
                {/* <select name="" id="" className="border p-2 mr-4">
                  <option value="">Sắp xếp theo Tên KH</option>
                  <option value="">Sắp xếp theo Ngày Giao dịch</option>
                  <option value="">Sắp xếp theo Tên KH</option>
                </select> */}
                {/* <div className="relative"> */}
                <input
                  type="text"
                  placeholder="Tìm kiếm"
                  className="p-2 px-4 pr-8 border rounded-3xl inp"
                />
                {/* <img src={Search} alt="" className="absolute top-3 right-3 bottom-0 select-none" draggable={false} /> */}
                {/* </div> */}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                Khung thời gian
                <img src={Calendar} alt="" className="pl-4 pr-2" />
                Hôm nay: Tới 22:00 hôm nay
                <div className="ml-6 mr-4">Loại sản phẩm</div>
                <select name="" id="" className="border p-2">
                  <option value="">Đã thêm gần đây</option>
                  <option value="">Đang giao</option>
                  <option value="">Đã giao</option>
                </select>
              </div>
              <button
                className="p-2 bg-hover text-white rounded-md mx-2"
                onClick={() => navigate("/admin/them-san-pham")}
              >
                Thêm sản phẩm mới +
              </button>
            </div>

            <div>
              <div className="overflow-x-auto mt-5">
                <table className="table-auto w-full border-collapse">
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2">Mã vận đơn</td>
                      <td className="px-4 py-2">Danh mục SP</td>
                      <td className="px-4 py-2">Tên sản phẩm</td>
                      <td className="px-4 py-2 text-center">Tồn kho</td>
                      <td className="px-4 py-2 text-right">Giá tiền</td>
                      <td className="px-4 py-2 text-center">Thao tác</td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">VH213</td>
                      <td className="px-4 py-2">Sách Văn Học</td>
                      <td className="px-4 py-2">Bước chân con bước chân cha</td>
                      <td className="px-4 py-2 text-center">126</td>
                      <td className="px-4 py-2 text-right">106,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">VH099</td>
                      <td className="px-4 py-2">Sách Văn Học</td>
                      <td className="px-4 py-2">Ác nữ trùng sinh</td>
                      <td className="px-4 py-2 text-center">67</td>
                      <td className="px-4 py-2 text-right">159,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">KT128</td>
                      <td className="px-4 py-2">Sách Kinh Tế</td>
                      <td className="px-4 py-2">Những cánh đồng kim cương</td>
                      <td className="px-4 py-2 text-center">333</td>
                      <td className="px-4 py-2 text-right">30,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TL998</td>
                      <td className="px-4 py-2">Sách Tâm Lý</td>
                      <td className="px-4 py-2">Hiểu về trái tim</td>
                      <td className="px-4 py-2 text-center">99</td>
                      <td className="px-4 py-2 text-right">135,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TS789</td>
                      <td className="px-4 py-2">Sách Tiểu Sử Hồi Ký</td>
                      <td className="px-4 py-2">Đời dũng cảm của Kim Đồng</td>
                      <td className="px-4 py-2 text-center">143</td>
                      <td className="px-4 py-2 text-right">20,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TN182</td>
                      <td className="px-4 py-2">Sách Thiếu Nhi</td>
                      <td className="px-4 py-2">Conan - Tập 102</td>
                      <td className="px-4 py-2 text-center">448</td>
                      <td className="px-4 py-2 text-right">22,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TL978</td>
                      <td className="px-4 py-2">Sách Tâm Lý</td>
                      <td className="px-4 py-2">Lý thuyết trò chơi</td>
                      <td className="px-4 py-2 text-center">599</td>
                      <td className="px-4 py-2 text-right">110,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NN222</td>
                      <td className="px-4 py-2">Sách Ngoại Ngữ</td>
                      <td className="px-4 py-2">
                        Sổ tay tiếng nhật thương mại
                      </td>
                      <td className="px-4 py-2 text-center">456</td>
                      <td className="px-4 py-2 text-right">71,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TS798</td>
                      <td className="px-4 py-2">Tiểu Sử hồi ký</td>
                      <td className="px-4 py-2">
                        Lý Quang Diệu - người cha lập quốc
                      </td>
                      <td className="px-4 py-2 text-center">119</td>
                      <td className="px-4 py-2 text-right">55,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">TN112</td>
                      <td className="px-4 py-2">Sách Thiếu Nhi</td>
                      <td className="px-4 py-2">Doraemon - Tập 99</td>
                      <td className="px-4 py-2 text-center">412</td>
                      <td className="px-4 py-2 text-right">20,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer"
                          draggable={false}
                        />
                        <img
                          src={Delete}
                          alt=""
                          className="cursor-pointer"
                          draggable={false}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-5">
                <div className="text-medium text-primary ml-3">
                  Hiển thị 10/369 sản phẩm
                </div>
                <div className="flex items-center">
                  <div className="cursor-pointer rounded-md text-white bg-primary flex items-center justify-center w-9 h-9 text-center">
                    1
                  </div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">
                    2
                  </div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">
                    3
                  </div>
                  <div className="cursor-pointer rounded-md ml-2 flex items-end justify-center w-9 h-9 text-center">
                    ...
                  </div>
                  <div className="cursor-pointer border-primary rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">
                    37
                  </div>
                  <div className="cursor-pointer rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">
                    <img src={ArrowRight} alt="" width={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
