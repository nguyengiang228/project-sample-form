import { useNavigate } from "react-router-dom"
import Calendar from "../../assets/admins/calenda.png"
import Delete from "../../assets/admins/delete.png"
import Edit from "../../assets/admins/edit.png"
import Search from "../../assets/admins/search.png"
import ArrowRight from "../../assets/arrow-right2.png"
import AdminHeader from "../../containers/AdminHeader"
import AdminSideBar from "../../containers/AdminSidebar"

export default function AdminOrderPage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={1} />
          <div className="bg-white flex-grow p-2" style={{
            boxShadow: '0px 4px 4px 0px #00000040'
          }}>
            <div className="text-22 font-semibold">
              Quản lý đơn hàng
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Khung thời gian
                <img src={Calendar} alt="" className="pl-4 pr-2" />
                Hôm nay: Tới 22:00 hôm nay
                <div className="ml-6 mr-4">Loại đơn hàng</div>
                <select name="" id="" className="border p-2">
                  <option value="">Chờ giao hàng</option>
                  <option value="">Đang giao</option>
                  <option value="">Đã giao</option>
                </select>
              </div>
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm" className="p-2 px-4 pr-8 border rounded-3xl" />
                <img src={Search} alt="" className="absolute top-3 right-3 bottom-0 select-none" draggable={false} />
              </div>

            </div>
            <div>
              <div className="overflow-x-auto mt-5">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr className="text-base">
                      <th className="text-left px-2 py-2">Tất cả</th>
                      <th className="px-4 py-2">Chờ lấy hàng</th>
                      <th className="px-4 py-2">Chờ giao hàng</th>
                      <th className="px-4 py-2">Đã giao</th>
                      <th className="px-4 py-2">Đã huỷ</th>
                      <th className="px-4 py-2">Hoàn/Đổi trả</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2">Mã vận đơn</td>
                      <td className="px-4 py-2">Tên khách hàng</td>
                      <td className="px-4 py-2">Tên sản phẩm</td>
                      <td className="px-4 py-2 text-center">Trạng thái</td>
                      <td className="px-4 py-2 text-right">Giá tiền</td>
                      <td className="px-4 py-2 text-center">Thao tác</td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS992</td>
                      <td className="px-4 py-2">Xuân Phúc</td>
                      <td className="px-4 py-2">Bước chân cha bước chân con</td>
                      <td className="px-4 py-2 text-center text-red-500 font-medium">Đã huỷ</td>
                      <td className="px-4 py-2 text-right">502,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS120</td>
                      <td className="px-4 py-2">Trần Văn Tín</td>
                      <td className="px-4 py-2">Ác Nữ Trùng Sinh</td>
                      <td className="px-4 py-2 text-center"><span className="text-primary font-medium text-primary">Đã giao hàng</span></td>
                      <td className="px-4 py-2 text-right">159,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS672</td>
                      <td className="px-4 py-2">Nguyễn Thi Vân</td>
                      <td className="px-4 py-2">Bộ Ba</td>
                      <td className="px-4 py-2 text-center text-primary">Đã giao hàng</td>
                      <td className="px-4 py-2 text-right">264,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS234</td>
                      <td className="px-4 py-2">Trần Văn Thành</td>
                      <td className="px-4 py-2">Us</td>
                      <td className="px-4 py-2 text-center text-gray-400">Chờ giao hàng</td>
                      <td className="px-4 py-2 text-right">1.099,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet-2')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS214</td>
                      <td className="px-4 py-2">Trần Anh Tú</td>
                      <td className="px-4 py-2">Phố Ngũ Hương</td>
                      <td className="px-4 py-2 text-center text-primary">Đã giao hàng</td>
                      <td className="px-4 py-2 text-right">174,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS673</td>
                      <td className="px-4 py-2">Võ Thi Chính</td>
                      <td className="px-4 py-2">Xích Sao Băng</td>
                      <td className="px-4 py-2 text-center text-primary">Đã giao hàng</td>
                      <td className="px-4 py-2 text-right">135,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS923</td>
                      <td className="px-4 py-2">Nguyễn Linh Trang</td>
                      <td className="px-4 py-2">Bão Táp Phong Vân</td>
                      <td className="px-4 py-2 text-center"><span className="text-red-500 font-medium">Đã huỷ</span></td>
                      <td className="px-4 py-2 text-right">72,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS917</td>
                      <td className="px-4 py-2">Phạm Thùy Trang</td>
                      <td className="px-4 py-2">Ông già và biển cả</td>
                      <td className="px-4 py-2 text-center text-primary">Đã giao hàng</td>
                      <td className="px-4 py-2 text-right">40,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS375</td>
                      <td className="px-4 py-2">Vũ Thanh Vân</td>
                      <td className="px-4 py-2">Ngày qua em có nhớ tôi</td>
                      <td className="px-4 py-2 text-center text-gray-400">Chờ giao hàng</td>
                      <td className="px-4 py-2 text-right">1,099,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet-2')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 py-1">
                      <td className="px-4 py-3">BS911</td>
                      <td className="px-4 py-2">Trần Đức Trung</td>
                      <td className="px-4 py-2">Khi nhìn chằm chằm vào vực thẳm</td>
                      <td className="px-4 py-2 text-center text-primary">Đã giao hàng</td>
                      <td className="px-4 py-2 text-right">116,000 đ</td>
                      <td className="px-4 py-2 flex justify-center">
                        <img src={Edit} alt="" onClick={() => navigate('/admin/don-hang-chi-tiet')} className="pr-4 cursor-pointer" draggable={false} />
                        <img src={Delete} alt="" className="cursor-pointer" draggable={false} />
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-5">
                <div className="text-medium text-primary ml-3">
                  Hiển thị 10/380 đơn hàng
                </div>
                <div className="flex items-center">
                  <div className="cursor-pointer rounded-md text-white bg-primary flex items-center justify-center w-9 h-9 text-center">1</div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">2</div>
                  <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">3</div>
                  <div className="cursor-pointer rounded-md ml-2 flex items-end justify-center w-9 h-9 text-center">...</div>
                  <div className="cursor-pointer border-primary rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">38</div>
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

  )
}