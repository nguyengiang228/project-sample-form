import { useNavigate } from "react-router-dom";
import khach1 from "../../assets/khach1.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminCustomerDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={5} />

          <div>
            <img src={khach1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
