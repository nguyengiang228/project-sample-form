import { useNavigate } from "react-router-dom";
import Bell from "../../assets/admins/bell.png";
import ArrowDown from "../../assets/arrow-down.png";
import Avatar from "../../assets/categories/ca chep 2.png";
import Logo from "../../assets/logo.png";
import "./style.css";

export default function AdminHeader() {
  const navigate = useNavigate();
  return (
    <div className="flex align-middle header-admin text-white justify-between">
      <div className="containers mx-auto flex align-middle justify-between">
        <div className="left flex items-center">
          <img
            src={Logo}
            alt={"Logo"}
            className="leftIcon w-fit cursor-pointer"
            onClick={() => navigate("/admin/thong-ke")}
          />
        </div>
        <div
          className=" flex justify-between items-center"
          style={{
            width: "20%",
          }}
        >
          <div className="rightItem flex flex-col justify-center items-center cursor-pointer">
            <img src={Bell} alt="" className="rightIcon" />
          </div>
          <div
            className="text-black px-4 py-2 bg-white h-10 rounded-full rightItem flex justify-center items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="">
              <img
                src={Avatar}
                alt=""
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
            <div className="mx-3">
              <div className="text-sm">Đinh Quốc Đạt</div>
              <div className="text-xs italic">Quản trị viên</div>
            </div>
            <div className="">
              <img src={ArrowDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
