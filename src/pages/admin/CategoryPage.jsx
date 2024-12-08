import { useNavigate } from "react-router-dom";
import Delete from "../../assets/admins/delete.png";
import Edit from "../../assets/admins/edit.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";
import "./style.css";

export default function AdminCategoryPage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={3} />
          <div className=" flex-grow">
            <div
              className="bg-white p-2"
              style={
                {
                  // boxShadow: '0px 4px 4px 0px #00000040'
                }
              }
            >
              <div className="flex justify-between">
                <div className="text-22 font-semibold">Quản lý danh mục</div>
                <div className="text-sm ">
                  <button
                    className="p-2 bg-hover text-white rounded-md mx-2"
                    onClick={() => navigate("/admin/them-danh-muc")}
                  >
                    Thêm danh mục mới +
                  </button>
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

              <div>
                <div className="overflow-x-auto mt-5">
                  <table className="table-auto w-full border-collapse">
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-200 h-16">
                        <td className="px-4 py-2">Mã danh mục</td>
                        <td className="px-4 py-2">Tên danh mục</td>
                        <td className="px-4 py-2">Tồn kho có thể bán</td>
                        <td className="px-4 py-2 text-center">Lợi nhuận</td>
                        <td className="px-4 py-2 text-center">Thao tác</td>
                      </tr>
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">VH</td>
                        <td className="px-4 py-2">Sách văn học</td>
                        <td className="px-4 py-2">305</td>
                        <td className="px-4 py-2 text-center">99,898,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">KT</td>
                        <td className="px-4 py-2">Sách Kinh Tế</td>
                        <td className="px-4 py-2">225</td>
                        <td className="px-4 py-2 text-center">65,090,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">TL - KNS</td>
                        <td className="px-4 py-2">
                          Sách Tâm Lý - Kỹ Năng Sống
                        </td>
                        <td className="px-4 py-2">410</td>
                        <td className="px-4 py-2 text-center">120,550,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">TN</td>
                        <td className="px-4 py-2">Sách Thiếu Nhi</td>
                        <td className="px-4 py-2">345</td>
                        <td className="px-4 py-2 text-center">130,268,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">KHKT</td>
                        <td className="px-4 py-2">Sách Khoa Học Kỹ Thuật</td>
                        <td className="px-4 py-2">400</td>
                        <td className="px-4 py-2 text-center">78,145,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">TS - HK</td>
                        <td className="px-4 py-2">Sách Tiểu Sử - Hồi Ký</td>
                        <td className="px-4 py-2">198</td>
                        <td className="px-4 py-2 text-center">50,998,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
                      <tr className="py-2 h-14">
                        <td className="px-4 py-3">NN</td>
                        <td className="px-4 py-2">Sách Nước Ngoài</td>
                        <td className="px-4 py-2">333</td>
                        <td className="px-4 py-2 text-center">96,690,000 đ</td>
                        <td className="px-4 py-2 flex justify-center items-center">
                          <img
                            src={Edit}
                            alt=""
                            className="pr-4 cursor-pointer h-full"
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
              </div>
            </div>
            <div
              className="bg-white p-2 mt-4"
              style={
                {
                  // boxShadow: '0px 4px 4px 0px #00000040'
                }
              }
            >
              <div className="text-medium text-primary ml-3">
                Hiển thị 7/7 danh mục sản phẩm
              </div>
              {/* <div className="flex items-center">
                  <div className="cursor-pointer rounded-md text-white bg-primary flex items-center justify-center w-9 h-9 text-center">1</div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">2</div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">3</div>
                  <div className="cursor-pointer rounded-md ml-2 flex items-end justify-center w-9 h-9 text-center">...</div>
                  <div className="cursor-pointer border-primary rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">38</div>
                  <div className="cursor-pointer rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">
                    <img src={ArrowRight} alt="" width={16} />
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
