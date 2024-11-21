import { useNavigate } from "react-router-dom";
import bell from "./assets/bell.png";
import cart from "./assets/cart.png";
import home from "./assets/home.png";
import person from "./assets/person.png";
import suggest from "./assets/suggest.png";

export default function BottomNavigation({ active }) {
  const navigate = useNavigate();

  return (
    <div className="mobile_only fixed bottom-0 left-0 right-0 z-50 w-full h-20 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="inline-flex flex-col items-center justify-center hover:bg-gray-50 "
        >
          {location.pathname === "/" ? (
            <img
              className="mb-2"
              style={{
                width: 27,
                height: 27,
              }}
              src={home}
              alt=""
            />
          ) : (
            <svg
              width="26"
              height="29"
              className="mb-2"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 10.25L13 1.5L24.25 10.25V24C24.25 24.663 23.9866 25.2989 23.5178 25.7678C23.0489 26.2366 22.413 26.5 21.75 26.5H4.25C3.58696 26.5 2.95107 26.2366 2.48223 25.7678C2.01339 25.2989 1.75 24.663 1.75 24V10.25Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.25 26.5V14H16.75V26.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span
            className="text-sm text-gray-500  group-hover:text-blue-600 "
            style={{
              color: active === "home" ? "#00AB9F" : "text-gray-500",
            }}
          >
            Trang chủ
          </span>
        </button>
        <button
          onClick={() => navigate("/dang-nhap")}
          type="button"
          className="inline-flex flex-col items-center justify-center hover:bg-gray-50  group"
        >
          {active === "login" ? (
            <img
              className="mb-2"
              style={{
                width: 27,
                height: 27,
              }}
              src={person}
              alt=""
            />
          ) : (
            <svg
              width="22"
              height="29"
              className="mb-2"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 24.25V23C1 18.8579 4.35786 15.5 8.5 15.5H13.5C17.6421 15.5 21 18.8579 21 23V24.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M11 11.75C8.23857 11.75 6 9.51143 6 6.75C6 3.98857 8.23857 1.75 11 1.75C13.7614 1.75 16 3.98857 16 6.75C16 9.51143 13.7614 11.75 11 11.75Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span
            style={{
              color: active === "login" ? "#00AB9F" : "text-gray-500",
            }}
            className="text-sm text-gray-500  group-hover:text-blue-600 "
          >
            Tài khoản
          </span>
        </button>
        <button
          onClick={() => navigate("/goi-y")}
          type="button"
          className="inline-flex flex-col items-center justify-center hover:bg-gray-50  group"
        >
          {location.pathname === "/goi-y" ? (
            <img
              className="mb-2"
              style={{
                width: 27,
                height: 27,
              }}
              src={suggest}
              alt=""
            />
          ) : (
            <svg
              width="29"
              height="29"
              className="mb-2"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0919 21.7917H17.9067M14.5 1.375V2.83333M23.7808 5.21917L22.7498 6.25021M27.625 14.5H26.1667M2.83333 14.5H1.375M6.25021 6.25021L5.21917 5.21917M9.34333 19.6567C8.32377 18.6368 7.6295 17.3376 7.3483 15.9232C7.06711 14.5088 7.21162 13.0428 7.76356 11.7105C8.31551 10.3782 9.2501 9.23956 10.4492 8.43843C11.6482 7.63729 13.0579 7.20969 14.5 7.20969C15.9421 7.20969 17.3518 7.63729 18.5508 8.43843C19.7499 9.23956 20.6845 10.3782 21.2364 11.7105C21.7884 13.0428 21.9329 14.5088 21.6517 15.9232C21.3705 17.3376 20.6762 18.6368 19.6567 19.6567L18.8575 20.4544C18.4006 20.9113 18.0382 21.4538 17.791 22.0509C17.5438 22.6479 17.4166 23.2878 17.4167 23.934V24.7083C17.4167 25.4819 17.1094 26.2237 16.5624 26.7707C16.0154 27.3177 15.2735 27.625 14.5 27.625C13.7265 27.625 12.9846 27.3177 12.4376 26.7707C11.8906 26.2237 11.5833 25.4819 11.5833 24.7083V23.934C11.5833 22.6288 11.0642 21.376 10.1425 20.4544L9.34333 19.6567Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          <span
            style={{
              color: active === "suggest" ? "#00AB9F" : "text-gray-500",
            }}
            className="text-sm text-gray-500  group-hover:text-blue-600 "
          >
            Gợi ý
          </span>
        </button>
        <button
          onClick={() => navigate("/gioi-thieu")}
          type="button"
          className="inline-flex flex-col items-center justify-center hover:bg-gray-50  group"
        >
          {location.pathname === "/gioi-thieu" ? (
            <img
              className="mb-2"
              style={{
                width: 27,
                height: 27,
              }}
              src={bell}
              alt=""
            />
          ) : (
            <svg
              width="26"
              height="29"
              className="mb-2"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0915 22.1917C24.2879 21.4754 23.5844 20.6541 22.9998 19.7501C22.3617 18.5022 21.9792 17.1394 21.8748 15.7417V11.6251C21.8804 9.42976 21.084 7.30798 19.6355 5.65839C18.1869 4.00881 16.1858 2.94497 14.0082 2.66675V1.59175C14.0082 1.29669 13.891 1.01373 13.6823 0.805092C13.4737 0.596458 13.1907 0.479248 12.8957 0.479248C12.6006 0.479248 12.3176 0.596458 12.109 0.805092C11.9004 1.01373 11.7832 1.29669 11.7832 1.59175V2.68341C9.62505 2.98169 7.64815 4.05196 6.21861 5.696C4.78908 7.34005 4.00378 9.44645 4.00817 11.6251V15.7417C3.9038 17.1394 3.52132 18.5022 2.88317 19.7501C2.30891 20.652 1.61667 21.4732 0.824837 22.1917C0.735947 22.2698 0.664705 22.366 0.615852 22.4737C0.566998 22.5815 0.541654 22.6984 0.541504 22.8167V23.9501C0.541504 24.1711 0.629301 24.3831 0.785582 24.5393C0.941862 24.6956 1.15382 24.7834 1.37484 24.7834H24.5415C24.7625 24.7834 24.9745 24.6956 25.1308 24.5393C25.287 24.3831 25.3748 24.1711 25.3748 23.9501V22.8167C25.3747 22.6984 25.3493 22.5815 25.3005 22.4737C25.2516 22.366 25.1804 22.2698 25.0915 22.1917ZM2.27484 23.1167C3.05018 22.3678 3.73284 21.5284 4.30817 20.6167C5.11201 19.1096 5.58103 17.4468 5.68317 15.7417V11.6251C5.65012 10.6484 5.81394 9.67514 6.16487 8.76314C6.51581 7.85113 7.04668 7.01907 7.72588 6.3165C8.40507 5.61393 9.2187 5.05522 10.1183 4.67364C11.0179 4.29206 11.9851 4.09542 12.9623 4.09542C13.9395 4.09542 14.9067 4.29206 15.8064 4.67364C16.706 5.05522 17.5196 5.61393 18.1988 6.3165C18.878 7.01907 19.4089 7.85113 19.7598 8.76314C20.1107 9.67514 20.2746 10.6484 20.2415 11.6251V15.7417C20.3436 17.4468 20.8127 19.1096 21.6165 20.6167C22.1918 21.5284 22.8745 22.3678 23.6498 23.1167H2.27484Z"
                fill="black"
              />
            </svg>
          )}
          <span
            style={{
              color: active === "intro" ? "#00AB9F" : "text-gray-500",
            }}
            className="text-sm text-gray-500  group-hover:text-blue-600 "
          >
            Giới thiệu
          </span>
        </button>
        <button
          onClick={() => navigate("/gio-hang-rong")}
          type="button"
          className="inline-flex flex-col items-center justify-center hover:bg-gray-50  group"
        >
          {location.pathname === "/gio-hang-rong" ? (
            <img
              className="mb-2"
              style={{
                width: 27,
                height: 27,
              }}
              src={cart}
              alt=""
            />
          ) : (
            <svg
              width="27"
              height="29"
              className="mb-2"
              viewBox="0 0 27 27"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.53125C0 2.30747 0.0888949 2.09286 0.247129 1.93463C0.405362 1.77639 0.619974 1.6875 0.84375 1.6875H3.375C3.56321 1.68755 3.746 1.75053 3.8943 1.86642C4.0426 1.9823 4.14789 2.14445 4.19344 2.32706L4.87688 5.0625H24.4688C24.5926 5.06261 24.715 5.09001 24.8271 5.14274C24.9392 5.19547 25.0383 5.27225 25.1174 5.36761C25.1965 5.46297 25.2536 5.57457 25.2847 5.6945C25.3158 5.81442 25.3201 5.93972 25.2973 6.0615L22.7661 19.5615C22.7299 19.7549 22.6273 19.9295 22.476 20.0552C22.3247 20.1809 22.1342 20.2498 21.9375 20.25H6.75C6.55329 20.2498 6.36283 20.1809 6.21154 20.0552C6.06024 19.9295 5.95763 19.7549 5.92144 19.5615L3.39188 6.08681L2.71688 3.375H0.84375C0.619974 3.375 0.405362 3.28611 0.247129 3.12787C0.0888949 2.96964 0 2.75503 0 2.53125ZM5.23462 6.75L7.45031 18.5625H21.2372L23.4529 6.75H5.23462ZM8.4375 20.25C7.54239 20.25 6.68395 20.6056 6.05101 21.2385C5.41808 21.8715 5.0625 22.7299 5.0625 23.625C5.0625 24.5201 5.41808 25.3785 6.05101 26.0115C6.68395 26.6444 7.54239 27 8.4375 27C9.33261 27 10.1911 26.6444 10.824 26.0115C11.4569 25.3785 11.8125 24.5201 11.8125 23.625C11.8125 22.7299 11.4569 21.8715 10.824 21.2385C10.1911 20.6056 9.33261 20.25 8.4375 20.25ZM20.25 20.25C19.3549 20.25 18.4965 20.6056 17.8635 21.2385C17.2306 21.8715 16.875 22.7299 16.875 23.625C16.875 24.5201 17.2306 25.3785 17.8635 26.0115C18.4965 26.6444 19.3549 27 20.25 27C21.1451 27 22.0035 26.6444 22.6365 26.0115C23.2694 25.3785 23.625 24.5201 23.625 23.625C23.625 22.7299 23.2694 21.8715 22.6365 21.2385C22.0035 20.6056 21.1451 20.25 20.25 20.25ZM8.4375 21.9375C8.88505 21.9375 9.31427 22.1153 9.63074 22.4318C9.94721 22.7482 10.125 23.1774 10.125 23.625C10.125 24.0726 9.94721 24.5018 9.63074 24.8182C9.31427 25.1347 8.88505 25.3125 8.4375 25.3125C7.98995 25.3125 7.56073 25.1347 7.24426 24.8182C6.92779 24.5018 6.75 24.0726 6.75 23.625C6.75 23.1774 6.92779 22.7482 7.24426 22.4318C7.56073 22.1153 7.98995 21.9375 8.4375 21.9375ZM20.25 21.9375C20.6976 21.9375 21.1268 22.1153 21.4432 22.4318C21.7597 22.7482 21.9375 23.1774 21.9375 23.625C21.9375 24.0726 21.7597 24.5018 21.4432 24.8182C21.1268 25.1347 20.6976 25.3125 20.25 25.3125C19.8024 25.3125 19.3732 25.1347 19.0568 24.8182C18.7403 24.5018 18.5625 24.0726 18.5625 23.625C18.5625 23.1774 18.7403 22.7482 19.0568 22.4318C19.3732 22.1153 19.8024 21.9375 20.25 21.9375Z"
                fill="black"
              />
            </svg>
          )}
          <span
            className="text-sm text-gray-500 "
            style={{
              color: active === "cart" ? "#00AB9F" : "text-gray-500",
            }}
          >
            Giỏ hàng
          </span>
        </button>
      </div>
    </div>
  );
}
