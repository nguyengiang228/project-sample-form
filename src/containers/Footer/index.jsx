import { useNavigate } from "react-router-dom";
import Appstore from "../../assets/footers/Appstore.png";
import Facebook from "../../assets/footers/Facebook.png";
import Instagram from "../../assets/footers/Instagram.png";
import LocationIcon from "../../assets/footers/Location.png";
import MailIcon from "../../assets/footers/Mail.png";
import Playstore from "../../assets/footers/Playstore.png";
import SwitchboardIcon from "../../assets/footers/Switchboard.png";
import Tum from "../../assets/footers/Tum.png";
import Twitter from "../../assets/footers/Twitter.png";
import Youtube from "../../assets/footers/Youtube.png";
import Logo2 from "../../assets/logo2.png";
import Mail2Icon from "../../assets/mail2.png";
import Notice from "../../assets/notice.png";
import "./style.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="bg-secondaryColor h-16 mobile_hidden">
        <div className="bg-secondaryColor flex justify-between items-center h-16 mx-auto  max-w-1310">
          <div className="flex items-center font-bold text-22 text-white">
            <img src={Mail2Icon} alt="" className="mr-2" />
            ĐĂNG KÝ NHẬN KHUYẾN MÃI
          </div>
          <div className="flex items-center">
            <input
              style={{ width: "550px" }}
              type="text"
              className="rounded-xl p-4 text-sm outline-none mr-6 max-h-12"
              placeholder="Nhập địa chỉ email của bạn"
            />
            <button className="text-base rounded-md p-3 bg-white text-primary">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <div className="ml-20 mr-20 px-16  py-10 bg-white flex fb1">
        <div
          className="pr-10 w-3/12"
          style={{
            // width: "455px",
            color: "#006962",
            borderRight: "2px solid #006962",
          }}
        >
          <img src={Logo2} alt="" style={{ width: "140px" }} />
          <div className="text-sm mb-6 mt-7 mobile_hidden">
            Số 6, đường Nguyễn Trung Ngạn, thị trấn Ân Thi, huyện Ân Thi, tỉnh
            Hưng Yên
          </div>

          <img src={Notice} alt="" className="mobile_hidden" />
          <div className="flex justify-between my-6 fb2">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Youtube} alt="" />
            <img src={Tum} alt="" />
            <img src={Twitter} alt="" />
          </div>

          <div className="flex justify-between mobile_hidden">
            <img src={Appstore} alt="" />
            <img src={Playstore} alt="" />
          </div>
        </div>

        <div className="pl-5 flex-grow">
          <div className="flex justify-between fb3">
            <div className="">
              <div className="text-22 text-black font-bold">DỊCH VỤ</div>
              <div
                className="text-sm mb-6 cursor-pointer"
                onClick={() => navigate("/dieu-khoan-su-dung")}
              >
                Điều khoản sử dụng
              </div>
              <div
                className="text-sm mb-6 cursor-pointer"
                onClick={() => navigate("/gioi-thieu")}
              >
                Chính sách bảo mật thông tin cá nhân
              </div>
              <div
                className="text-sm mb-6 cursor-pointer"
                onClick={() => navigate("/gioi-thieu")}
              >
                Chính sách bảo mật thanh toán
              </div>
              <div
                className="text-sm mb-6 cursor-pointer"
                onClick={() => navigate("/gioi-thieu")}
              >
                Giới thiệu về BookStore
              </div>
              <div className="text-sm mb-6">Hệ thống trung tâm - nhà sách</div>
            </div>
            <div className="">
              <div className="text-22 text-black font-bold">HỖ TRỢ</div>
              <div
                className="text-sm mb-6 cursor-pointer"
                onClick={() => navigate("/chinh-sach-doi-tra")}
              >
                Chính sách đổi - trả - hoàn tiền
              </div>
              <div className="text-sm mb-6">Chính sách bồi hoàn - bảo hành</div>
              <div className="text-sm mb-6">Chính sách vận chuyển</div>
              <div className="text-sm mb-6">Chính sách khách sỉ</div>
              <div className="text-sm mb-6">
                Phương thức thanh toán và xuất HĐ
              </div>
            </div>
            <div className="mobile_hidden">
              <div className="text-22 text-black font-bold">
                TÀI KHOẢN CỦA TÔI
              </div>
              <div className="text-sm mb-6">Đăng nhập / Đăng ký</div>
              <div className="text-sm mb-6">Thay đổi địa chỉ khách hàng</div>
              <div className="text-sm mb-6">Chi tiết tài khoản</div>
              <div className="text-sm mb-6">Lịch sử mua hàng</div>
            </div>
          </div>
          <div
            className="mt-16 mobile_hidden"
            style={{
              color: "#006962",
            }}
          >
            <div className="text-22 text-black font-bold">LIÊN HỆ</div>
            <div className="flex items-center mt-4">
              <img src={LocationIcon} alt="" className="mr-4" />
              Số 6, đường Nguyễn Trung Ngạn, thị trấn Ân Thi, huyện Ân Thi, tỉnh
              Hưng Yên.
            </div>
            <div className="flex items-center my-4">
              <img src={MailIcon} alt="" className="mr-4" />
              AnThibookstore.cskh@gmail.com
            </div>
            <div className="flex items-center">
              <img src={SwitchboardIcon} alt="" className="mr-4" />
              0377893603
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
