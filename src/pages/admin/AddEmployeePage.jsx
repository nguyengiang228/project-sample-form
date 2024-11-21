import { useNavigate } from "react-router-dom";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminAddEmployeePage() {
  const navigate = useNavigate()
  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={4} />
          <div className="flex-grow">
            <div
              className="bg-white flex-grow p-2 pb-8"
              style={{
                boxShadow: "0px 4px 4px 0px #00AB9F80",
              }}
            >
              <div className="flex items-center text-22 font-semibold">
                Thêm nhân viên
              </div>

              <div className="flex">
                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Mã nhân viên
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      className=" text-xs rounded-full"
                      style={{
                        border: "1px solid #00AB9F80",
                        padding: "8px",
                      }}
                      placeholder="Nhập mã nhân viên"
                    />
                  </div>
                </div>

                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Tên nhân viên
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      className=" text-xs rounded-full"
                      style={{
                        border: "1px solid #00AB9F80",
                        padding: "8px",
                      }}
                      placeholder="Nhập tên nhân viên"
                    />
                  </div>
                </div>

                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">Giới tính</div>
                  <div className="flex">
                    <label htmlFor="" className="mr-8">
                      <input type="radio" className="mr-3" name="" id="" />
                      Nam
                    </label>
                    <label htmlFor="">
                      <input type="radio" className="mr-3" name="" id="" />
                      Nữ
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex mt-3">
                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Email
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      className=" text-xs rounded-full"
                      style={{
                        border: "1px solid #00AB9F80",
                        padding: "8px",
                      }}
                      placeholder="Nhập mã nhân viên"
                    />
                  </div>
                </div>

                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Địa chỉ
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      className=" text-xs rounded-full"
                      style={{
                        border: "1px solid #00AB9F80",
                        padding: "8px",
                      }}
                      placeholder="Nhập tên nhân viên"
                    />
                  </div>
                </div>

                <div className="mt-2 flex-grow w-1/3">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Số điện thoại
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      className=" text-xs rounded-full"
                      style={{
                        border: "1px solid #00AB9F80",
                        padding: "8px",
                      }}
                      placeholder="Nhập tên nhân viên"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-primary px-2 py-3 font-medium text-white rounded-md mr-4">
                Thêm nhân viên
              </button>
              <button className="text-black border-primary px-6 py-2 bg-white rounded-md" onClick={() => navigate('/admin/nhan-vien')}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
