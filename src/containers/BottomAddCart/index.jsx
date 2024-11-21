import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Minus from "../../assets/minus.png";
import btn1 from "../../assets/mobile/btn1.png";
import btn2 from "../../assets/mobile/btn2.png";
import label from "../../assets/mobile/label.png";
import Plus from "../../assets/plus.png";

export default function BottomAddCart() {
  const [quantity, setQuantity] = useState(1);
  const [add, setAdd] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="mobile_only items-center flex fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="flex justify-between items-center w-36 h-16 py-3 px-4 border-r-2 border-gray-400">
          <div>
            <img
              src={Minus}
              alt=""
              className="select-none cursor-pointer"
              draggable={false}
              onClick={() => setQuantity((prev) => prev - 1)}
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="outline-none w-4"
            value={quantity}
          />
          <div>
            <img
              src={Plus}
              alt=""
              className="select-none cursor-pointer pr-3"
              draggable={false}
              onClick={() => setQuantity((prev) => prev + 1)}
            />
          </div>
        </div>
        <button
          className="px-2 py-2 text-base"
          onClick={() => setAdd(true)}
        >
          Thêm vào giỏ hàng
        </button>
        <button
          className="bg-primary py-2 text-white h-full text-base flex-grow"
          onClick={() => navigate("/thanh-toan")}
        >
          Mua ngay
        </button>
      </div>
      {add && (
        <div className="mobile_only items-center fixed bottom-0 left-0 z-50 w-full h-fit bg-white border-t border-gray-200">
          <div className="p-3">
            <img src={label} alt="" draggable={false} className="mx-auto my-3" />
            <img src={btn1} alt="" draggable={false} className="mx-auto my-3 mt-5" onClick={() => setAdd(false)} />
            <img src={btn2} alt="" draggable={false} className="mx-auto my-3" onClick={() => navigate('/gio-hang')} />
          </div>
        </div>
      )}
    </>
  )
}