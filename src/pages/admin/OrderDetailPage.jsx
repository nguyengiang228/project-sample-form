import { useNavigate } from "react-router-dom";
import OrderDetail from "../../assets/admins/order_detail.png";
import OrderDetail2 from "../../assets/admins/order_detail2.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminOrderDetailPage({ type }) {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={1} />
          {/* <div className="bg-white flex-grow p-2" style={{
            boxShadow: '0px 4px 4px 0px #00000040'
          }}>

          </div> */}
          <div>
            <img src={type === 1 ? OrderDetail : OrderDetail2} alt="" draggable={false} />
            {
              type === 1 ? (
                <div className="mt-6 flex items-center justify-center text-base">
                  <button className="text-white rounded-md bg-primary px-4 py-2 mr-2" onClick={() => { window.print() }}>In hoá đơn</button>
                  <button className="text-black bg-white rounded-md border-primary px-4 py-2 ml-2" onClick={() => navigate(-1)}>Quay lại</button>
                </div>
              ) : (
                <div className="mt-6 flex items-center justify-center text-base">
                  <button className="text-white rounded-md bg-primary px-4 py-2 mr-2" onClick={() => navigate('/admin/don-hang')}>Xác nhận</button>
                  <button className="text-black bg-white rounded-md border-primary px-4 py-2 ml-2" onClick={() => navigate('/admin/don-hang')}>Huỷ</button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}