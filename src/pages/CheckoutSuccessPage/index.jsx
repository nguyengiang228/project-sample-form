import { useNavigate } from "react-router-dom";
import Checked from "../../assets/checked3.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import Policy from "../../containers/Policy";
import "./style.css";

export default function CheckoutSuccessPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="bg_body py-6">
        <div className="max-w-1310 mx-auto mb-2">
          <div className="breadcrumbs bg-white w-fit p-2 px-3 text-base">
            <span className="italic font-medium">Trang chủ</span>
            <span>{" > "}</span>
            <span className="italic font-medium">Sách Văn Học</span>
            <span>{" > "}</span>
            <span className="italic font-medium">Tiểu thuyết</span>
            <span>{" > "}</span>
            <span className="italic font-medium">
              Bước chân cha bước chân con
            </span>
            <span>{" > "}</span>
            <span className="italic font-medium">Thanh toán</span>
            <span>{" > "}</span>
            <span className="italic font-medium">Hoàn tất thanh toán</span>
          </div>
        </div>
        <div
          className="max-w-4xl mx-auto mt-5 bg-white p-4 rounded-lg"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="flex items-center">
            <img src={Checked} alt="" />
            <div className="ml-8">
              <div className="text-22 font-bold mb-2">Đặt hàng thành công</div>
              <div className="text-sm my-2">Mã đơn hàng BS1012</div>
              <div className="text-sm">Cảm ơn bạn đã mua hàng!</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-base font-black">Thông tin đơn hàng</div>
            <div
              className="text-sm font-normal"
              style={
                {
                  // borderBottom: '1px solid #B0B0B0'
                }
              }
            >
              <div className="flex px-4 py-2">
                <div className="w-80">Tên người nhận: </div>
                <div>Nghiêm Bá Hưng</div>
              </div>
              <div className="flex px-4 py-2">
                <div className="w-80">Số điện thoại:</div>
                <div>0377893603</div>
              </div>
              <div className="flex px-4 py-2">
                <div className="w-80">Địa chỉ:</div>
                <div>
                  số 7 ngõ 88/5 đường La Nội, Dương Nội, Hà Đông, TP. Hà Nội
                </div>
              </div>
              <div className="flex px-4 py-2">
                <div className="w-80">Phương thức thanh toán:</div>
                <div>Thanh toán khi nhận hàng (COD)</div>
              </div>
              <div className="flex px-4 py-2">
                <div className="w-80">Tổng số tiền:</div>
                <div>502,000 đ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-4">
          <button
            className="p-4 w-fit border-primary rounded-md text-base bg-white mt-4 button_second font-bold"
            onClick={() => navigate("/")}
          >
            Trở lại trang chủ
          </button>
        </div>

        <Policy />
      </div>
      <Footer />
    </div>
  );
}
