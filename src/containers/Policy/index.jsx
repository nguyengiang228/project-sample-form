import { useNavigate } from "react-router-dom";
import Csbh from "../../assets/csbh.png";
import Doitra from "../../assets/doitra.png";
import Shipping from "../../assets/shipping.png";

export default function Policy() {
  const navigate = useNavigate();

  return (
    <div
      className="max-w-1310 mx-auto bg-white mt-3 rounded-md py-2 flex justify-around items-center"
      style={{
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
    >
      <div
        className="text-base flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Csbh} alt="" className="mr-3" />
        Chính sách bảo hành
      </div>
      <div
        className="text-base flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Shipping} alt="" className="mr-3" />
        Chính sách vận chuyển
      </div>
      <div
        className="text-base flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Doitra} alt="" className="mr-3" />
        Chính sách đổi trả
      </div>
    </div>
  );
}
