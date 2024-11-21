import { Modal } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import success from "../../assets/mobile/success.png";
import "./css/cart.css";
import "./css/thanhton.css";

export default function CheckoutMobile() {
  const navigate = useNavigate();
  const [open, setOpen] = useState();

  return (
    <div className="thanhton-container mobile_only">
      <Modal
        closeIcon={false}
        open={open}
        footer={null}
        className="checkoutttt"
      >
        <div className="py-5">
          <img src={success} alt="" />
        </div>
      </Modal>
      <div className="thanhton-thanhton">
        <div className="thanhton-group24">
          <span className="thanhton-text">
            <span>Chọn hình thức thanh toán</span>
          </span>
        </div>
        <span className="thanhton-text02">
          <span>Chọn hình thức giao hàng</span>
        </span>
        <img
          alt="Rectangle1197182"
          src="/external/rectangle1197182-2jln-200h.png"
          className="thanhton-rectangle119"
        />
        <img
          alt="Rectangle1237182"
          src="/external/rectangle1237182-e6ks-200h.png"
          className="thanhton-rectangle123"
        />
        <img
          alt="Rectangle1247182"
          src="/external/rectangle1247182-k31n8-200h.png"
          className="thanhton-rectangle124"
        />
        <img
          alt="Vector7182"
          src="/external/vector7182-fb2b.svg"
          className="thanhton-vector"
        />
        <span className="thanhton-text04">
          <span>Trần Đức Trung</span>
        </span>
        <span className="thanhton-text06">
          <span>0989898999</span>
        </span>
        <img
          alt="Line187182"
          src="/external/line187182-rw4.svg"
          className="thanhton-line18"
        />
        <span className="thanhton-text08">
          <span>Thay đổi</span>
        </span>
        <span className="thanhton-text10">
          <span>Giao tới</span>
        </span>
        <span className="thanhton-text12">
          <span>Số 212 đường Lê Duẩn, quận Đống Đa, TP. Hà Nội</span>
        </span>
        <div className="thanhton-group20">
          <img
            alt="Rectangle1267182"
            src="/external/rectangle1267182-8f8-400h.png"
            className="thanhton-rectangle126"
          />
          <div className="thanhton-frame36">
            <span className="thanhton-text14">
              <span>Chi tiết đơn hàng</span>
            </span>
          </div>
          <div className="thanhton-sp1">
            <span className="thanhton-text16">
              <span>Bước Chân Con Bước Chân Cha</span>
            </span>
            <span className="thanhton-text18">
              <span>Số lượng: x1</span>
            </span>
            <span className="thanhton-text20">
              <span>106,000 đ</span>
            </span>
            <img
              alt="IMAGEnhsp17182"
              src="/external/imagenhsp17182-mpe-200w.png"
              className="thanhton-imag-enhsp1"
            />
          </div>
          <span className="thanhton-text22">
            <span>Ác Nữ Trùng Sinh</span>
          </span>
          <span className="thanhton-text24">
            <span>Bão Táp Phong Vân</span>
          </span>
          <span className="thanhton-text26">
            <span>Số lượng: x1</span>
          </span>
          <span className="thanhton-text28">
            <span>Số lượng: x1</span>
          </span>
          <span className="thanhton-text30">
            <span>159,000 đ</span>
          </span>
          <span className="thanhton-text32">
            <span>72,000 đ</span>
          </span>
          <img
            alt="IMAGEnhsp17182"
            src="/external/imagenhsp17182-4g46-200w.png"
            className="thanhton-imag-enhsp11"
          />
          <img
            alt="IMAGEnhsp27182"
            src="/external/imagenhsp27182-duto-200w.png"
            className="thanhton-imag-enhsp2"
          />
        </div>
        <img
          alt="Rectangle1207182"
          src="/external/rectangle1207182-6t6o-200h.png"
          className="thanhton-rectangle120"
        />
        <span className="thanhton-text34">
          <span>Giảm giá</span>
        </span>
        <span className="thanhton-text36">
          <span>Phí vận chuyển</span>
        </span>
        <span className="thanhton-text38">
          <span>Khuyến mãi vận chuyển</span>
        </span>
        <span className="thanhton-text40">
          <span>Tạm tính</span>
        </span>
        <span className="thanhton-text42">
          <span>602,000 đ</span>
        </span>
        <span className="thanhton-text44">
          <span>30,000 đ</span>
        </span>
        <span className="thanhton-text46">
          <span>-30,000 đ</span>
        </span>
        <span className="thanhton-text48">
          <span>100,000 đ</span>
        </span>
        <span className="thanhton-text50">
          <span>Đơn hàng</span>
        </span>
        <span className="thanhton-text52">
          <span>Thay đổi</span>
        </span>
        <span className="thanhton-text54">
          <span>3 sản phẩm</span>
        </span>
        <div className="thanhton-group21">
          <span className="thanhton-text56">
            <span>Thành tiền</span>
          </span>
          <span className="thanhton-text58">
            <span>502.000 đ</span>
          </span>
          <img
            alt="Rectangle1377182"
            src="/external/rectangle1377182-p6nv-200h.png"
            className="thanhton-rectangle137"
            onClick={() => {
              setOpen(true);
              setTimeout(() => navigate("/"), 1500);
            }}
          />
          <span
            className="thanhton-text60"
            onClick={() => {
              setOpen(true);
              setTimeout(() => navigate("/"), 1500);
            }}
          >
            <span>Đặt hàng</span>
          </span>
          <img
            alt="gravityuiarrowright7182"
            src="/external/gravityuiarrowright7182-poso.svg"
            className="thanhton-gravityuiarrowright"
          />
        </div>
        <span className="thanhton-text62 CommonChữthường">
          <span>MÃ GIẢM GIÁ</span>
        </span>
        <span className="thanhton-text64 CommonChữthường">
          <span>Xem thêm</span>
        </span>
        <img
          alt="Subtract7182"
          src="/external/subtract7182-ze6.svg"
          className="thanhton-subtract"
        />
        <div className="thanhton-voucher100k">
          <span className="thanhton-text66">
            <span>GIẢM 100K</span>
          </span>
          <span className="thanhton-text68">
            <span>Đơn tối thiểu 600k</span>
          </span>
          <span className="thanhton-text70">
            <span>Lưu ý: Có thể áp dụng nhiều mã giảm giá cùng lúc</span>
          </span>
        </div>
        <img
          alt="Line247182"
          src="/external/line247182-wy58.svg"
          className="thanhton-line24"
        />
        <div className="thanhton-phngthcthanhton">
          <div className="thanhton-mdicod" />
          <div className="thanhton-mdicod1" />
          <div className="thanhton-mdicod2" />
          <img
            alt="VectorI718"
            src="/external/vectori718-9fd.svg"
            className="thanhton-vector01"
          />
          <span className="thanhton-text72">
            <span>Thanh toán khi nhận hàng</span>
          </span>
          <span className="thanhton-text74">
            <span>Thanh toán bằng ví momo</span>
          </span>
          <span className="thanhton-text76">
            <span>Thanh toán bằng ví Viettel Money</span>
          </span>
          <span className="thanhton-text78">
            <span>Thanh toán bằng ví ZaloPay</span>
          </span>
          <span className="thanhton-text80">
            <span>Thanh toán bằng VNPAY</span>
          </span>
          <div className="thanhton-mdicod3" />
          <div className="thanhton-group82">
            <img
              alt="VectorI718"
              src="/external/vectori718-81th.svg"
              className="thanhton-vector02"
            />
            <img
              alt="Ellipse18I718"
              src="/external/ellipse18i718-ja7w-200h.png"
              className="thanhton-ellipse18"
            />
          </div>
          <div className="thanhton-group83">
            <img
              alt="VectorI718"
              src="/external/vectori718-oxwq.svg"
              className="thanhton-vector03"
            />
            <img
              alt="Ellipse18I718"
              src="/external/ellipse18i718-azve-200h.png"
              className="thanhton-ellipse181"
            />
          </div>
          <div className="thanhton-group84">
            <img
              alt="VectorI718"
              src="/external/vectori718-fiw7.svg"
              className="thanhton-vector04"
            />
            <img
              alt="Ellipse18I718"
              src="/external/ellipse18i718-2dqi-200h.png"
              className="thanhton-ellipse182"
            />
          </div>
          <div className="thanhton-group85">
            <img
              alt="VectorI718"
              src="/external/vectori718-xma4.svg"
              className="thanhton-vector05"
            />
            <img
              alt="Ellipse18I718"
              src="/external/ellipse18i718-z11e-200h.png"
              className="thanhton-ellipse183"
            />
          </div>
          <div className="thanhton-group86">
            <img
              alt="VectorI718"
              src="/external/vectori718-xi1c.svg"
              className="thanhton-vector06"
            />
            <img
              alt="Ellipse18I718"
              src="/external/ellipse18i718-yfn-200h.png"
              className="thanhton-ellipse184"
            />
          </div>
        </div>
        <div className="thanhton-giaohng">
          <div className="thanhton-group87">
            <div className="thanhton-hnhthcgiaohng">
              <div className="thanhton-frame194">
                <span className="thanhton-text82 DestopTiêuđề ">
                  <span>Giao hàng siêu tốc 2h</span>
                </span>
              </div>
              <div className="thanhton-frame195">
                <span className="thanhton-text84">
                  <span>Giao hàng tiết kiệm</span>
                </span>
              </div>
            </div>
            <div className="thanhton-group851">
              <img
                alt="VectorI725"
                src="/external/vectori725-6k3g.svg"
                className="thanhton-vector07"
              />
              <img
                alt="Ellipse18I725"
                src="/external/ellipse18i725-1tv-200h.png"
                className="thanhton-ellipse185"
              />
            </div>
          </div>
          <div className="thanhton-group852">
            <img
              alt="VectorI725"
              src="/external/vectori725-px77.svg"
              className="thanhton-vector08"
            />
            <img
              alt="Ellipse18I725"
              src="/external/ellipse18i725-31h-200h.png"
              className="thanhton-ellipse186"
            />
          </div>
        </div>
        <div className="thanhton-group5">
          <img
            alt="Rectangle27182"
            src="/external/rectangle27182-qllr.svg"
            className="thanhton-rectangle2"
          />
          <div className="thanhton-group">
            <img
              alt="Vector7182"
              src="/external/vector7182-ab2e.svg"
              className="thanhton-vector09"
              onClick={() => navigate("/")}
            />
            <img
              alt="Vector7182"
              src="/external/vector7182-xqp.svg"
              className="thanhton-vector10"
            />
          </div>
          <img
            alt="epback7182"
            src="/external/epback7182-yoz.svg"
            className="thanhton-epback"
            onClick={() => navigate("/gio-hang")}
          />
        </div>
        <span className="thanhton-text86">
          <span>Thanh toán</span>
        </span>
        <div className="thanhton-statusbar">
          <img
            alt="batteryoutline35opacity7182"
            src="/external/batteryoutline35opacity7182-bf28.svg"
            className="thanhton-batteryoutline35opacity"
          />
          <img
            alt="statusbar7182"
            src="/external/statusbar7182-mr9u.svg"
            className="thanhton-statusbar1"
          />
        </div>
      </div>
    </div>
  );
}
