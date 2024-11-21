import { useNavigate } from "react-router-dom";
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
          <AdminSideBar active={5} />
          <div
            className="bg-white flex-grow p-2"
            style={{
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
          >
            <div className="flex justify-between">
              <div className="text-22 font-semibold">Quản lý khách hàng</div>
              <div className="text-sm ">
                <select name="" id="" className="border p-2 mr-4">
                  <option value="">Sắp xếp theo Tên KH</option>
                  <option value="">Sắp xếp theo ngày giao dịch cuối</option>
                  
                </select>
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
                      <td className="px-4 py-2">Tên khách hàng</td>
                      <td className="px-4 py-2">Địa chỉ email</td>
                      <td className="px-4 py-2">Số điện thoại</td>
                      <td className="px-4 py-2 text-center">Địa chỉ</td>
                      <td className="px-4 py-2 text-right">Giao dịch cuối</td>
                      <td className="px-4 py-2 text-center">Thao tác</td>
                    </tr>
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn khánh toàn</td>
                      <td className="px-4 py-2">ntt1920@gmail.com</td>
                      <td className="px-4 py-2">0989888212</td>
                      <td className="px-4 py-2 text-center">Hà Đông, Hà Nội</td>
                      <td className="px-4 py-2 text-right">19/02/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Trần Đức Cảnh</td>
                      <td className="px-4 py-2">duccanh121@gmail.com</td>
                      <td className="px-4 py-2">0987236122</td>
                      <td className="px-4 py-2 text-center">Hoàng Mai, Hà Nội</td>
                      <td className="px-4 py-2 text-right">11/09/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Lê Văn Lương</td>
                      <td className="px-4 py-2">lvl1782@gmail.com</td>
                      <td className="px-4 py-2">0989922311</td>
                      <td className="px-4 py-2 text-center">Hoàng Mai, Hà Nội</td>
                      <td className="px-4 py-2 text-right">19/02/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn Đức Tiến</td>
                      <td className="px-4 py-2">tienduc1@gmail.com</td>
                      <td className="px-4 py-2">0999121524</td>
                      <td className="px-4 py-2 text-center">Hoàn Kiếm, Hà Nội</td>
                      <td className="px-4 py-2 text-right">07/11/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Trần Hạnh Nguyên</td>
                      <td className="px-4 py-2">nguyen1220@gmail.com</td>
                      <td className="px-4 py-2">0989238212</td>
                      <td className="px-4 py-2 text-center">Tây Hồ, Hà Nội</td>
                      <td className="px-4 py-2 text-right">01/03/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Vũ Căn Hà</td>
                      <td className="px-4 py-2">canha891@gmail.com</td>
                      <td className="px-4 py-2">0932858212</td>
                      <td className="px-4 py-2 text-center">Thanh Xuân, Hà Nội</td>
                      <td className="px-4 py-2 text-right">19/02/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn Đức Hà</td>
                      <td className="px-4 py-2">nhasyui@gmail.com</td>
                      <td className="px-4 py-2">0999215347</td>
                      <td className="px-4 py-2 text-center">Tây Hồ, Hà Nội</td>
                      <td className="px-4 py-2 text-right">01/12/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Hà Thị Trung</td>
                      <td className="px-4 py-2">trungha222@gmail.com</td>
                      <td className="px-4 py-2">0981218212</td>
                      <td className="px-4 py-2 text-center">Tây Hồ, Hà Nội</td>
                      <td className="px-4 py-2 text-right">08/03/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn Văn Mười</td>
                      <td className="px-4 py-2">nv10@gmail.com</td>
                      <td className="px-4 py-2">0988232132</td>
                      <td className="px-4 py-2 text-center">Gia Lâm, Hà Nội</td>
                      <td className="px-4 py-2 text-right">15/01/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn khánh Hoàng</td>
                      <td className="px-4 py-2">Khoang20@gmail.com</td>
                      <td className="px-4 py-2">0989672312</td>
                      <td className="px-4 py-2 text-center">Hoàn Kiếm, Hà Nội</td>
                      <td className="px-4 py-2 text-right">12/02/2024</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Vũ Thị Trang</td>
                      <td className="px-4 py-2">vutrang123@gmail.com</td>
                      <td className="px-4 py-2">098898212</td>
                      <td className="px-4 py-2 text-center">Hoàng Mai, Hà Nội</td>
                      <td className="px-4 py-2 text-right">29/12/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Đào Gia Lộc</td>
                      <td className="px-4 py-2">locgia200@gmail.com</td>
                      <td className="px-4 py-2">0916273212</td>
                      <td className="px-4 py-2 text-center">Đống Đa, Hà Nội</td>
                      <td className="px-4 py-2 text-right">11/12/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn Hà Phương</td>
                      <td className="px-4 py-2">phuongng112@gmail.com</td>
                      <td className="px-4 py-2">0983322212</td>
                      <td className="px-4 py-2 text-center">Long Biên, Hà Nội</td>
                      <td className="px-4 py-2 text-right">19/06/2023</td>
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
                    <tr
                      className="border-b border-gray-200 py-1 cursor-pointer"
                      onClick={() => navigate("/admin/chi-tiet-khach-hang")}
                    >
                      <td className="px-4 py-3">Nguyễn Thu Huyền</td>
                      <td className="px-4 py-2">thuhuyen12@gmail.com</td>
                      <td className="px-4 py-2">0923888212</td>
                      <td className="px-4 py-2 text-center">Hà Đông, Hà Nội</td>
                      <td className="px-4 py-2 text-right">11/02/2024</td>
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
                  Hiển thị 14/798 khách hàng
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
                    80
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
