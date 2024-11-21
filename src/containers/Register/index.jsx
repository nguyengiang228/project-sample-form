import { useNavigate } from "react-router-dom";
import Fb from "../../assets/facebookf.png";
import GG from "../../assets/ggf.png";
import Line from "../../assets/line-h.png";
import success from "../../assets/success.png";
import Twitter from "../../assets/twitterf.png";
import "./style.css";

import { Modal } from "antd";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalMobile, setModalMobile] = useState(false);

  const showModal = () => {
    if (window.innerWidth < 600) {
      setModalMobile(true);
    } else setIsModalOpen(true);
    setTimeout(() => {
      navigate("/dang-nhap");
    }, 2000);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/admin/thong-ke");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="login mx-auto max-w-2xl bg-white px-5 rounded-xl">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        footer={<></>}
        className="login-modal"
      >
        <div className="flex items-center " style={{}}>
          <div>
            <img src={success} alt="" />
          </div>
          <div className="font-bold text-center text-base ml-6 flex-grow">
            Đăng ký thành công! <br />
            Tự động quay lại trang chủ sau 2s.
          </div>
        </div>
      </Modal>

      <Modal
        open={isOpenModalMobile}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        footer={<></>}
        className="checkoutttt"
      >
        <div className="flex items-center flex-col" style={{}}>
          <div className="font-bold text-center text-base ml-6 flex-grow">
            Đăng ký thành công
          </div>
          <div className="mt-3">
            <img src={success} alt="" />
          </div>
        </div>
      </Modal>
      <div className="flex justify-between">
        <div
          className="font-bold text-center w-64 text-22 py-2 text-black cursor-pointer"
          onClick={() => navigate("/dang-nhap")}
        >
          Đăng nhập
        </div>
        <div className="font-bold text-center w-64 text-22 py-2  border-b-primary text-primary ">
          Đăng ký
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-between w-550 m_not_flex">
          <div className="mobile_only input_w mt-8 flex flex-col justify-center items-center">
            <div className="w-64 text-sm">Email/Số điện thoại</div>
            <input
              type="text"
              placeholder="Nhập email/Số điện thoại"
              className="italic mt-1 text-xs rounded-md border h-12 px-4 w-64 mx-auto outline-none"
              style={{
                border: "1px solid #00AB9F",
              }}
            />
          </div>
          <div className="desktop_only input_w mt-8 flex flex-col justify-center items-center">
            <div className="w-64 text-sm">Nhập họ của bạn</div>
            <input
              type="text"
              placeholder="Nhập email hoặc số điện thoại"
              className="italic mt-1 text-xs rounded-md border h-12 px-4 w-64 mx-auto outline-none"
              style={{
                border: "1px solid #00AB9F",
              }}
            />
          </div>
          <div className="desktop_only input_w mt-8 flex flex-col justify-center items-center">
            <div className="w-64 text-sm">Tên</div>
            <input
              type="text"
              placeholder="Nhập tên của bạn"
              className="italic mt-1 text-xs rounded-md border h-12 px-4 w-64 mx-auto outline-none"
              style={{
                border: "1px solid #00AB9F",
              }}
            />
          </div>
        </div>
        <div className="desktop_only input_w mx-auto mt-8 flex flex-col justify-center items-center">
          <div className="w-550 text-sm">Số điện thoại</div>
          <input
            type="text"
            placeholder="Nhập số điện thoại đăng ký"
            className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
            style={{
              border: "1px solid #00AB9F",
            }}
          />
        </div>
        <div className="desktop_only input_w mx-auto mt-8 flex flex-col justify-center items-center">
          <div className="w-550 text-sm">Email</div>
          <input
            type="text"
            placeholder="Nhập email đăng ký"
            className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
            style={{
              border: "1px solid #00AB9F",
            }}
          />
        </div>
        <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center">
          <div className="w-550 text-sm">Mật khẩu</div>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
            style={{
              border: "1px solid #00AB9F",
            }}
          />
        </div>
        <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center">
          <div className="w-550 text-sm">Nhập lại mật khẩu</div>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
            style={{
              border: "1px solid #00AB9F",
            }}
          />
        </div>
        <div
          className="mobile_only rounded-3xl w-9/12 mt-7 text-white bg-primary py-3 px-5 cursor-pointer font-bold text-22 text-center"
          onClick={showModal}
        >
          Đăng ký
        </div>

        <div
          className="desktop_only rounded-xl mt-7 text-white bg-primary py-3 px-5 cursor-pointer font-bold text-22"
          onClick={showModal}
        >
          Đăng ký
        </div>

        <div
          className="desktop_only mt-11 text-base relative"
          style={{
            color: "#006962",
            fontWeight: 500,
          }}
        >
          <img src={Line} alt="" />
          <div
            className="absolute bg-white  -bottom-2 px-3"
            style={{
              left: "90px",
            }}
          >
            Hoặc đăng nhập bằng
          </div>
        </div>
        <div className="desktop_only w-550 flex justify-between items-center my-8 select-none cursor-pointer">
          <img src={GG} alt="" draggable={false} />
          <img src={Fb} alt="" draggable={false} />
          <img src={Twitter} alt="" draggable={false} />
        </div>
      </div>
    </div>
  );
}
