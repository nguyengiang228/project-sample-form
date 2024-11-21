import { useState } from "react";
import { Collapse } from "react-collapse";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import AddButton from "../../assets/addButton.png";
import ArrowDown from "../../assets/arrow-down.png";
import ArrowUp from "../../assets/arrow-up.png";
import AdminHeader from "../../containers/AdminHeader";
import AdminSideBar from "../../containers/AdminSidebar";

export default function AdminAddProductPage() {
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(true);
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  return (
    <div className="bg_body min-h-screen  pb-9">
      <AdminHeader />
      <div className="bg_body mt-6">
        <div className="flex max-w-1310 justify-around mx-auto">
          <AdminSideBar active={2} />
          <div className="flex-grow">
            <div
              className="bg-white flex items-center px-2 text-22 font-semibold mb-2"
              style={{
                height: "74px",
              }}
            >
              Thêm sản phẩm
            </div>
            <div
              className="bg-white flex-grow p-2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div
                className="flex items-center px-4 text-base font-medium justify-between cursor-pointer"
                style={{
                  height: "51px",
                }}
                onClick={() => setCollapse1((prev) => !prev)}
              >
                <div className="">1. Thông tin chung</div>
                <div>
                  <img src={collapse1 ? ArrowUp : ArrowDown} alt="" />
                </div>
              </div>
              <Collapse isOpened={collapse1}>
                <div
                  className="flex text-sm pt-6 py-2"
                  style={{
                    borderTop: "1px solid #0000001A",
                  }}
                >
                  <div className="flex-grow mr-2">
                    <div className="">
                      <span className="text-red-500">*</span> Tên sản phẩm
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập tên sản phẩm"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="">
                      <span className="text-red-500">*</span> Danh mục
                    </div>
                    <div className="">
                      <select
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                      >
                        <option value="">Chọn danh mục sản phẩm</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  className="flex text-sm pt-4 py-2 justify-between"
                  style={
                    {
                      // borderTop: "1px solid #0000001A",
                    }
                  }
                >
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Xuất xứ
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập nơi xuất xứ"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Thương hiệu
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập thương hiệu sản phẩm"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">Bổ sung</div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập thông tin bổ sung"
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div
              className="bg-white flex-grow p-2 mt-2"
              style={{
                boxShadow: "0px 4px 4px 0px #00000040",
              }}
            >
              <div
                className="flex items-center px-4 text-base font-medium justify-between cursor-pointer"
                style={{
                  height: "51px",
                }}
                onClick={() => setCollapse2((prev) => !prev)}
              >
                <div className="">2. Mô tả sản phẩm</div>
                <div>
                  <img src={collapse2 ? ArrowUp : ArrowDown} alt="" />
                </div>
              </div>
              <Collapse isOpened={collapse2}>
                <div
                  className="flex text-sm pt-4 py-2 justify-between"
                  style={
                    {
                      // borderTop: "1px solid #0000001A",
                    }
                  }
                >
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Giá tiền
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập giá tiền"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Số lượng
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập số lượng sản phẩm"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">Mã giảm giá sản phẩm (nếu có)</div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập mã giảm giá"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="flex text-sm pt-4 py-2 justify-between"
                  style={
                    {
                      // borderTop: "1px solid #0000001A",
                    }
                  }
                >
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Tác giả
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập tên tác giả"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Năm xuất bản
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập năm xuất bản"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Ngôn ngữ
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập ngôn ngữ"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="flex text-sm pt-4 py-2 justify-between"
                  style={
                    {
                      // borderTop: "1px solid #0000001A",
                    }
                  }
                >
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Trọng lượng
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập trọng lượng"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Kích thước bao bì
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập kích thước"
                      />
                    </div>
                  </div>
                  <div
                    className="mr-2"
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Số trang
                    </div>
                    <div className="">
                      <input
                        type="text"
                        className="w-full"
                        style={{
                          border: "1px solid #00000040",
                          padding: "8px",
                        }}
                        placeholder="Nhập số trang"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="flex text-sm py-2 justify-between mt-2 pb-6"
                  style={{
                    borderTop: "1px solid #00000040",
                  }}
                >
                  <div className="flex-grow pr-8">
                    <div className="mb-2">
                      <span className=" text-red-500">*</span> Mô tả chi tiết
                      sản phẩm
                    </div>
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      style={{
                        height: "134px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "44%",
                    }}
                  >
                    <div className="">
                      <span className="text-red-500">*</span> Thêm ảnh sản phẩm
                      (tối đa 6 ảnh và 1 video)
                    </div>
                    <div className="flex items-center mt-2">
                      <div
                        className="flex items-center px-1 mr-3"
                        style={{
                          border: "0.5px solid #00000040",
                          minWidth: "188px",
                          height: "174px",
                          fontSize: "10px",
                          color: "#00000040",
                        }}
                      >
                        <img src={AddButton} alt="" className="pr-1" />
                        Kéo hoặc tải lên trực tiếp tại đây
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 1
                        </div>
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 2
                        </div>
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 3
                        </div>
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 4
                        </div>
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 5
                        </div>
                        <div
                          className="flex items-center px-1 mt-3"
                          style={{
                            border: "0.5px solid #00000040",
                            width: "70px",
                            height: "70px",
                            fontSize: "10px",
                            color: "#00000040",
                          }}
                        >
                          <img src={AddButton} alt="" className="pr-1" />
                          Ảnh 6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="flex justify-center mt-6">
              <button className="bg-primary px-2 py-3 font-medium text-white rounded-md mr-4">
                Thêm sản phẩm
              </button>
              <button className="text-black border-primary px-6 py-2 bg-white rounded-md" onClick={() => navigate('/admin/san-pham')}>
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
