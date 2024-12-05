import { useNavigate } from "react-router-dom";
import Csbh from "../../assets/csbh.png";
import Doitra from "../../assets/doitra.png";
import Shipping from "../../assets/shipping.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import "./style.css";

export default function DeliveryPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="bg_body py-6">
        <div
          className="max-w-1310 mx-auto mt-4 bg-white p-4 rounded-lg"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="font-medium text-base">2 địa chỉ giao hàng</div>
          <div className="font-medium text-sm my-4">
            Chọn địa chỉ giao hàng có sẵn bên dưới
          </div>
          <div className="flex justify-between">
            <div
              className="rounded-lg p-4 flex-grow mr-2"
              style={{
                border: "1px dashed #00AB9F",
              }}
            >
              <div className="flex justify-between text-base">
                <div className="font-medium">Nghiêm Bá Hưng</div>
                <div className="font-medium text-primary">Mặc định</div>
              </div>
              <div className="text-sm my-3">
                Địa chỉ: số 7 ngõ 88/5 đường La Nội, Dương Nội, Hà Đông, TP. Hà
                <br />
                Nội SĐT: 03777893603
              </div>
              <div className="flex">
                <button
                  className="text-white bg-primary rounded-md"
                  style={{
                    padding: "8px",
                    marginRight: "18px",
                  }}
                  onClick={() => navigate("/thanh-toan")}
                >
                  Giao tới địa chỉ này
                </button>
                <button
                  className="bg-white rounded-md"
                  style={{
                    border: "1px solid #00AB9F",
                    padding: "8px",
                  }}
                >
                  Sửa
                </button>
              </div>
            </div>
            <div
              className="rounded-lg p-4 flex-grow ml-2"
              style={{
                border: "1px dashed #00AB9F",
              }}
            >
              <div className="flex justify-between text-base">
                <div className="font-medium">Chu Thị Thảo Nguyên</div>
                {/* <div className="font-medium text-primary">Mặc định</div> */}
              </div>
              <div className="text-sm my-3">
                Địa chỉ: số 212 đường Lê Duẩn, quận Đống Đa, TP. Hà Nội
                <br />
                SĐT: 0356416151
              </div>
              <div className="flex">
                <button
                  className="text-white bg-primary rounded-md border-primary"
                  style={{
                    padding: "8px",
                    marginRight: "18px",
                    background: "#B0B0B0", // disable button
                  }}
                  onClick={() => navigate("/thanh-toan")}
                >
                  Giao tới địa chỉ này
                </button>
                <button
                  className="bg-white rounded-md"
                  style={{
                    border: "1px solid #00AB9F",
                    padding: "8px",
                  }}
                >
                  Sửa
                </button>
              </div>
            </div>
          </div>
          <div className="text-sm mt-4">
            Bạn muốn giao tới địa chỉ khác?{" "}
            <span className="text-primary">Thêm địa chỉ giao hàng mới</span>
          </div>
        </div>

        <div
          className="max-w-1310 mx-auto bg-white mt-3 rounded-md py-2 flex justify-around items-center"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="text-base flex items-center">
            <img src={Csbh} alt="" className="mr-3" />
            Chính sách bảo hành
          </div>
          <div className="text-base flex items-center">
            <img src={Shipping} alt="" className="mr-3" />
            Chính sách vận chuyển
          </div>
          <div className="text-base flex items-center">
            <img src={Doitra} alt="" className="mr-3" />
            Chính sách đổi trả
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
