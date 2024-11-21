import { useNavigate } from "react-router-dom";
import Edit from "../../assets/admins/edit.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";
import "./style.css";

export default function AdminEmployeePage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={4} />
          <div
            className="bg-white flex-grow p-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex justify-between">
              <div className="text-22 font-semibold">Quản lý nhân viên</div>
              <div className="text-sm ">
                <select name="" id="" className="border p-2">
                  <option value="">Chờ giao hàng</option>
                  <option value="">Đang giao</option>
                  <option value="">Đã giao</option>
                </select>
                <button
                  className="p-2 bg-primary text-white rounded-md mx-2"
                  onClick={() => navigate("/admin/them-nhan-vien")}
                >
                  Thêm TT nhân viên mới +
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
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2">Mã nhân viên</td>
                      <td className="px-4 py-2">Tên nhân viên</td>
                      <td className="px-4 py-2">Email</td>
                      <td className="px-4 py-2 text-center">Số điện thoại</td>
                      <td className="px-4 py-2 text-right">Địa chỉ</td>
                      <td className="px-4 py-2 text-center">Thao tác</td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NV01</td>
                      <td className="px-4 py-2">Trần Thị Trang</td>
                      <td className="px-4 py-2">tttrang1192@gmail.com</td>
                      <td className="px-4 py-2 text-center">0985868566</td>
                      <td className="px-4 py-2 text-right w-36">
                        Định Công, Hoàng Mai, HN
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer h-full"
                          draggable={false}
                        />
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NV02</td>
                      <td className="px-4 py-2">Nguyễn Anh Hào</td>
                      <td className="px-4 py-2">nahaohehe@gmail.com</td>
                      <td className="px-4 py-2 text-center">0917289122</td>
                      <td className="px-4 py-2 text-right w-36">
                        Đền Lừ, Hoàng Mai, HN
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer h-full"
                          draggable={false}
                        />
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NV03</td>
                      <td className="px-4 py-2">Nguyễn Thanh Vân</td>
                      <td className="px-4 py-2">ntv90102@gmail.com</td>
                      <td className="px-4 py-2 text-center">0988932874</td>
                      <td className="px-4 py-2 text-right w-36">
                        Nguyễn Trãi, Thanh Xuân, HN
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer h-full"
                          draggable={false}
                        />
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NV04</td>
                      <td className="px-4 py-2">Phùng Thảo Vân</td>
                      <td className="px-4 py-2">ptv2001@gmail.com</td>
                      <td className="px-4 py-2 text-center">0983335236</td>
                      <td className="px-4 py-2 text-right w-36">
                        Bát Tràng, Gia Lâm, HN
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer h-full"
                          draggable={false}
                        />
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">NV05</td>
                      <td className="px-4 py-2">Vũ Văn Thơm</td>
                      <td className="px-4 py-2">vvthom1102@gmail.com</td>
                      <td className="px-4 py-2 text-center">0988362232</td>
                      <td className="px-4 py-2 text-right w-36">
                        Vạn Phúc, Hà Đông, HN
                      </td>
                      <td className="px-4 py-2 flex justify-center items-center">
                        <img
                          src={Edit}
                          alt=""
                          className="pr-4 cursor-pointer h-full"
                          draggable={false}
                        />
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-5">
                <div className="text-medium text-primary ml-3">
                  Hiển thị 5/5 nhân viên
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
    </div>
  );
}
