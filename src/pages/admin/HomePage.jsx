import Calendar from "../../assets/admins/calenda.png";
import Chart from "../../assets/admins/chart.png";
import Export from "../../assets/admins/export.png";
import new1 from "../../assets/admins/new1.png";
import new2 from "../../assets/admins/new2.png";
import new3 from "../../assets/admins/new3.png";
import Rank from "../../assets/admins/rank.png";
import ArrowRight from "../../assets/arrow-right2.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminHomePage() {
  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={0} />
          <div className=" flex-grow">
            <div className="bg-white px-3">
              <div className="flex items-center justify-between py-2">
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
                  <img
                    src={Export}
                    alt=""
                    className=" cursor-pointer"
                    draggable={false}
                  />
                </div>
              </div>
            </div>

            <div
              className="bg-white mt-4"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="text-22 font-semibold px-4 py-2">Thống kê</div>
              <div className="flex justify-between">
                <div
                  className="text-center p-2 rounded-md"
                  style={{
                    border: "1px solid #00000040",
                    borderTop: "2px solid #00AB9F",
                    width: "19%",
                  }}
                >
                  <div className="text-base font-medium">Doanh số</div>
                  <div className="text-2xl font-bold text-primary mt-4">
                    589,999,789 <u>đ</u>
                  </div>
                </div>
                <div
                  className="text-center p-2 rounded-md"
                  style={{
                    border: "1px solid #00000040",
                    width: "19%",
                  }}
                >
                  <div className="text-base font-medium">Tổng đơn hàng</div>
                  <div className="text-2xl font-bold text-primary mt-4">
                    12067
                  </div>
                </div>
                <div
                  className="text-center p-2 rounded-md"
                  style={{
                    border: "1px solid #00000040",
                    width: "19%",
                  }}
                >
                  <div className="text-base font-medium">Đơn hoàn thành</div>
                  <div className="text-2xl font-bold text-primary mt-4">
                    12345
                  </div>
                </div>
                <div
                  className="text-center p-2 rounded-md"
                  style={{
                    border: "1px solid #00000040",
                    width: "19%",
                  }}
                >
                  <div className="text-base font-medium">Đơn đã huỷ</div>
                  <div className="text-2xl font-bold text-primary mt-4">40</div>
                </div>
                <div
                  className="text-center p-2 rounded-md"
                  style={{
                    border: "1px solid #00000040",
                    width: "19%",
                  }}
                >
                  <div className="text-base font-medium">Đơn hoàn/đổi trả</div>
                  <div className="text-2xl font-bold text-primary mt-4">
                    100
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white mt-4"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="text-22 font-semibold px-4 py-2">Biểu đồ</div>
              <img
                src={Chart}
                className="select-none relative -bottom-1"
                draggable={false}
                alt=""
              />
            </div>

            <div
              className="bg-white mt-4"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex justify-between py-4">
                <div className="text-22 font-semibold px-4 py-2">
                  Thứ hạng sản phẩm
                </div>
                <div className="pr-4">
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="p-2 px-4 pr-8 border rounded-3xl inp"
                  />
                </div>
              </div>
              <div className="">
                <img src={Rank} draggable={false} alt="" />
              </div>
            </div>

            <div
              className="bg-white mt-4 pb-5"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div className="flex justify-between py-4">
                <div className="text-22 font-semibold px-4 py-2">
                  Đánh giá sản phẩm
                </div>
                <div className="pr-4">
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="p-2 px-4 pr-8 border rounded-3xl inp"
                  />
                </div>
              </div>
              <div className="">
                <img src={new1} draggable={false} alt="" />
              </div>
              <div className="">
                <img src={new2} draggable={false} alt="" />
              </div>
              <div className="">
                <img src={new3} draggable={false} alt="" />
              </div>

              <div className="flex justify-between mt-5">
                <div className="text-medium text-primary ml-3">
                  Hiển thị 3/89 đánh giá
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
                    38
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
