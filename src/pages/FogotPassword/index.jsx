import { Modal } from "antd";
import { InputOTP } from "antd-input-otp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "../../assets/ep_back.png";
import success from "../../assets/success.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import btn1 from "./btn1.png";
import btn2 from "./btn2.png";
import btn3 from "./btn3.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenModalMobile, setModalMobile] = useState(false);
  const [otp, setOtp] = useState();
  const showModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/admin/thong-ke");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(otp);
  return (
    <div className="m_pb_footer">
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={false}
        footer={<></>}
        className="login-modal desktop_only"
      >
        <div className="flex items-center " style={{}}>
          <div>
            <img src={success} alt="" />
          </div>
          <div className="font-bold text-center text-base ml-6 flex-grow">
            Đổi mật khẩu thành công! <br />
            Tự động quay lại trang chủ sau 1s.
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
            Đổi mật khẩu thành công!
          </div>
          <div className="mt-3">
            <img src={success} alt="" />
          </div>
        </div>
      </Modal>
      <div className="desktop_only">
        <Header />
      </div>
      <div
        className="mobile_only text-center text-22 text-white py-5"
        style={{
          backgroundColor: "#00AB9F",
        }}
      >
        <img
          src={Back}
          className="absolute top-6 left-6 text-white"
          alt=""
          onClick={() => navigate("/")}
        />
        {step === 1 ? "Quên mật khẩu" : "Đổi mật khẩu"}
      </div>
      <div
        style={{
          backgroundColor: "#E1E1E1",
        }}
        className="py-6 desktop_only"
      >
        <div className="login mx-auto max-w-2xl bg-white px-5 rounded-xl">
          <div className="flex justify-center">
            <div className="font-bold text-center w-64 text-22 py-2 text-black cursor-pointer">
              Quên mật khẩu
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center">
              <div className="w-550">Email/Số điện thoại</div>
              <input
                type="text"
                placeholder="Nhập email hoặc số điện thoại"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center">
              <div className="w-550">Nhập mã OTP</div>
              <input
                type="text"
                placeholder="Nhập mã OTP được gửi về SĐT"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center">
              <div className="w-550">Nhập mật khẩu mới</div>
              <input
                type="password"
                placeholder="Nhập mật khẩu mới"
                className="italic mt-1 text-xs rounded-md border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
            </div>
            <div
              className="rounded-xl mt-7 text-white bg-primary py-2 px-5 cursor-pointer font-bold text-base"
              onClick={() => showModal()}
            >
              Xác nhận
            </div>
            <div
              className="my-6 text-base text-center text-primary cursor-pointer"
              onClick={() => navigate("/")}
            >
              Quay về trang chủ
            </div>
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="mobile_only">
          <div className="px-6">
            <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center relative">
              <div className="w-550">Email/Số điện thoại</div>
              <input
                type="text"
                placeholder="Nhập email hoặc số điện thoại"
                className="italic mt-1 text-xs rounded-lg border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
              <div className="text-primary font-medium absolute right-5 bottom-3">
                Nhận mã OTP
              </div>
            </div>
            <div className="text-center my-8">
              Nhập mã xác nhận được gửi tới email / Số điện thoại <br /> của bạn
            </div>

            <InputOTP
              inputType="numeric"
              width={50}
              height={50}
              onChange={setOtp}
              value={otp}
            />

            <div className="text-center my-8">
              Nếu bạn gặp vấn đề mã xác nhận vui lòng gọi <br />
              <span className="font-bold">1900 11 22 33</span>
            </div>
          </div>

          <div className="fixed bottom-10 right-0 left-0">
            {otp?.filter((x) => !!x)?.length === 6 ? (
              <img
                src={btn2}
                className="mx-auto"
                alt=""
                onClick={() => setStep(2)}
              />
            ) : (
              <img src={btn1} className="mx-auto" alt="" />
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mobile_only">
          <div className="text-center my-8">
            Vui lòng nhập mật khẩu mới cho tài khoản
          </div>

          <div className="px-6">
            <div className="input_w mx-auto mt-8 flex flex-col justify-center items-center relative">
              <div className="w-550">Mật khẩu mới</div>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="italic mt-1 text-xs rounded-lg border h-12 px-4 w-550 mx-auto outline-none"
                style={{
                  border: "1px solid #00AB9F",
                }}
              />
              <div className="text-primary font-medium absolute right-5 bottom-3">
                Hiện
              </div>
            </div>
          </div>

          <div className="fixed bottom-10 right-0 left-0">
            <img
              src={btn3}
              className="mx-auto"
              alt=""
              onClick={() => {
                setModalMobile(true);
                setTimeout(() => navigate("/dang-nhap"), 1500);
              }}
            />
          </div>
        </div>
      )}

      <div className="desktop_only">
        <Footer />
      </div>

      {/* <BottomNavigation active={"login"} /> */}
    </div>
  );
}
