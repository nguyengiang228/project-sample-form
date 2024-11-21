import { useNavigate } from "react-router-dom"
import Database from "../../assets/admins/database.png"
import Mail from "../../assets/admins/mail.png"
import Server from "../../assets/admins/server.png"
import ShoppingBag from "../../assets/admins/shopping-bag.png"
import Statistic from "../../assets/admins/statistic.png"
import User from "../../assets/admins/user.png"
import Customer from "../../assets/admins/users.png"

const items = [{ label: "Thống kê", icon: Statistic, url: "/admin/thong-ke", iconActive: ShoppingBag },
{ label: "Đơn hàng", icon: Server, url: "/admin/don-hang", iconActive: ShoppingBag },
{ label: "Sản phẩm", icon: Database, url: "/admin/san-pham", iconActive: ShoppingBag },
{ label: "Danh mục", icon: Server, url: "/admin/danh-muc", iconActive: ShoppingBag },
{ label: "Nhân viên", icon: User, url: "/admin/nhan-vien", iconActive: ShoppingBag },
{ label: "Khách hàng", icon: Customer, url: "/admin/khach-hang", iconActive: ShoppingBag },
{ label: "Tin nhắn", icon: Mail, url: "/admin/tin-nhan", iconActive: ShoppingBag }]

export default function AdminSideBar({ active }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white mr-5 py-3 px-4 h-fit" style={{
      width: "265px"
    }}>
      {
        items.map((item, index) => (
          <div key={item.label} onClick={() => navigate(item.url)} className={active == index ? "flex text-base items-center cursor-pointer bg-primary px-5 py-3 mt-4 text-white" : "flex items-center text-base cursor-pointer px-5 py-3 mt-4"} style={{
            borderRadius: active == index ? "20px" : 0
          }}>
            <img src={active === index ? item.iconActive : item.icon} alt="" className="pr-3 h-full" />
            {item.label}
          </div>
        ))
      }
    </div>
  )
}