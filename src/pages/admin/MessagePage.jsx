import { useNavigate } from "react-router-dom";
import mess from "../../assets/admins/mess.png";
import mess_action from "../../assets/admins/mess_action.png";
import Search from "../../assets/admins/search.png";
import ArrowRight from "../../assets/arrow-right2.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminMessagePage() {
  const navigate = useNavigate();

  return (
    <div className="bg_body min-h-screen pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={6} />
          <div className="bg-white flex-grow p-2" style={{
            boxShadow: '0px 4px 4px 0px #00000040'
          }}>
            <div className="flex justify-between">
              <div className="relative">
                <input type="text" placeholder="Tìm kiếm" className="p-2 px-4 pr-8 border rounded-3xl" />
                <img src={Search} alt="" className="absolute top-3 right-3 bottom-0 select-none" draggable={false} />
              </div>
              <div>
                <img src={mess_action} alt="" draggable={false} />
              </div>
            </div>
            <div>
              <img src={mess} alt="" draggable={false} />
            </div>

            <div className="flex justify-between mt-5">
              <div className="text-medium text-primary ml-3">
                Hiển thị 10/80 tin nhắn
              </div>
              <div className="flex items-center">
                <div className="cursor-pointer rounded-md text-white bg-primary flex items-center justify-center w-9 h-9 text-center">1</div>
                <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">2</div>
                <div className="cursor-pointer border-primary rounded-md ml-5 flex items-center justify-center w-9 h-9 text-center">3</div>
                <div className="cursor-pointer rounded-md ml-2 flex items-end justify-center w-9 h-9 text-center">...</div>
                <div className="cursor-pointer border-primary rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">8</div>
                <div className="cursor-pointer rounded-md ml-2 flex items-center justify-center w-9 h-9 text-center">
                  <img src={ArrowRight} alt="" width={16} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}