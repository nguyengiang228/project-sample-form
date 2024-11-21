import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/cart.css";

export default function CartMobile() {
  const [num, setNum] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="mobile_only page1-container">
      <div className="page1-gihn-gcsnphm">
        <div className="page1-group5">
          <img
            src="/external/rectangle26802-xku.svg"
            alt="Rectangle26802"
            className="page1-rectangle2"
          />
        </div>
        <span className="page1-text">
          <span>Giỏ hàng</span>
        </span>
        <img
          src="/external/387bd6b8-ad86-4a32-8c73-75f6e5bf973d.png?org_if_sml=1271&force_format=original"
          alt="Rectangle1216802"
          className="page1-rectangle121"
        />
        <img
          src="/external/mdivoucheroutline6802-6ah7.svg"
          alt="mdivoucheroutline6802"
          className="page1-mdivoucheroutline"
        />
        <span className="page1-text02 CommonChữthường">
          <span>KHUYẾN MÃI</span>
        </span>
        <span className="page1-text04 CommonChữthường">
          <span>Xem thêm</span>
        </span>
        <img
          src="/external/subtract6802-kimq.svg"
          alt="Subtract6802"
          className="page1-subtract"
        />
        <div className="">
          <div className="page1-voucher100k">
            <span className="page1-text06">
              <span>GIẢM 10% - TỐI ĐA 70K</span>
            </span>
            <span className="page1-text08">
              <span>Đơn tối thiểu 200k</span>
            </span>
            <span className="page1-text10">
              <span>Lưu ý: Có thể áp dụng nhiều mã giảm giá cùng lúc</span>
            </span>
          </div>
          <div
            className="absolute border"
            style={{
              top: 195,
              left: 25,
              width: 380,
              height: 120,
              borderTop: "none",
              borderColor: "rgba(0,0,0,0.64)",
            }}
          ></div>
        </div>
        <span className="page1-text12">
          <span>Chọn tất cả (1 sản phẩm)</span>
        </span>
        <span className="page1-text14">
          <span>Bước chân con bước chân cha</span>
        </span>
        <span className="page1-text16">
          <span>106.000đ</span>
        </span>
        <span className="page1-text18">
          <span>118.000 đ</span>
        </span>
        <div
          className="absolute border"
          style={{
            top: 356,
            left: 25,
            width: 380,
            height: 220,
            borderColor: "rgba(0,0,0,0.64)",
          }}
        ></div>
        <img
          src="/external/line66802-uvp.svg"
          alt="Line66802"
          className="page1-line6"
        />
        <img
          src="/external/a4f51cc5-4874-4237-ad61-f92084886083.png?org_if_sml=122247&force_format=original"
          alt="buocchancha26802"
          className="page1-buocchancha2"
        />
        <img
          src="/external/checkbox6802-72cs.svg"
          alt="Checkbox6802"
          className="page1-checkbox"
        />
        <img
          src="/external/checkbox6802-ulpf.svg"
          alt="Checkbox6802"
          className="page1-checkbox1"
        />
        <div className="page1-slung">
          <img
            src="/external/icoutlineminusi680-5fj4.svg"
            alt="icoutlineminusI680"
            className="page1-icoutlineminus"
            onClick={() => setNum((prev) => (prev === 1 ? 1 : prev - 1))}
          />
          <span className="page1-text20 DestopĐềmụcnhỏ">{num}</span>
          <img
            src="/external/icoutlineplusi680-sl2.svg"
            alt="icoutlineplusI680"
            className="page1-icoutlineplus"
            onClick={() => setNum((prev) => prev + 1)}
          />
        </div>
        <img
          src="/external/epback6802-5gb.svg"
          alt="epback6802"
          className="page1-epback"
          onClick={() => navigate("/")}
        />
        <div className="page1-statusbar">
          <img
            src="/external/batteryoutline35opacity6802-vq3.svg"
            alt="batteryoutline35opacity6802"
            className="page1-batteryoutline35opacity"
          />
          <img
            src="/external/statusbar6802-ddl.svg"
            alt="statusbar6802"
            className="page1-statusbar1"
          />
        </div>
        <div className="page1-group21">
          <span className="page1-text21">
            <span>Thành tiền</span>
          </span>
          <span className="page1-text23">
            <span>{(num * 106000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }).replace('VND', '')}đ</span>
          </span>
          <img
            src="/external/72645f03-ff48-4140-b3ec-caecfeeac3af.png?org_if_sml=1836&force_format=original"
            alt="Rectangle1376802"
            className="page1-rectangle137"
          />
          <span
            className="page1-text25"
            onClick={() => navigate("/thanh-toan")}
          >
            <span>Thanh toán</span>
          </span>
          <img
            src="/external/gravityuiarrowright6802-mih.svg"
            alt="gravityuiarrowright6802"
            className="page1-gravityuiarrowright"
            onClick={() => navigate("/thanh-toan")}
          />
        </div>
      </div>
    </div>
  );
}
