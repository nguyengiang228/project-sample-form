import Upload from "../../assets/admins/upload.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminAddCategoryPage() {
  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={3} />
          <div className="flex-grow">
            <div
              className="bg-white flex-grow p-2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex items-center text-22 font-semibold">
                Thêm danh mục
              </div>
              <div className="font-bold text-base mt-3">Thông tin danh mục</div>

              <div className="mt-2">
                <div className="text-sm">
                  <span className="text-red-500">*</span> Mã danh mục
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-1/2 text-xs"
                    style={{
                      border: "1px solid #00000040",
                      padding: "8px",
                    }}
                    placeholder="Nhập mã danh mục"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm">
                  <span className="text-red-500">*</span> Tên danh mục
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-1/2 text-xs"
                    style={{
                      border: "1px solid #00000040",
                      padding: "8px",
                    }}
                    placeholder="Nhập tên danh mục"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="mt-4 w-1/2">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Mô tả
                  </div>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      className="w-full text-xs resize-none"
                      style={{
                        border: "1px solid #00000040",
                        padding: "8px",
                      }}
                      rows={18}
                      placeholder="Nhập mô tả danh mục sản phẩm tại đây"
                    ></textarea>
                  </div>
                </div>
                <div className="mt-4 flex-grow ml-4">
                  <div className="text-sm">
                    <span className="text-red-500">*</span> Thêm hình ảnh danh
                    mục
                  </div>
                  <div className="mt-1">
                    <label>
                      <img
                        src={Upload}
                        alt=""
                        className="w-full h-full cursor-pointer"
                        draggable={false}
                      />
                      <input type="file" name="" id="" hidden />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-primary px-2 py-3 font-medium text-white rounded-md mr-4">
                Thêm danh mục
              </button>
              <button className="text-black border-primary px-6 py-2 bg-white rounded-md">
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
