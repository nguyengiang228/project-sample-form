import { useNavigate } from "react-router-dom";
import Csbh from "../../assets/csbh.png";
import Doitra from "../../assets/doitra.png";
import Shipping from "../../assets/shipping.png";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import "./style.css";

export default function PolicyPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="bg_body py-6">
        <div className="max-w-1310 mx-auto mb-2">
          <div className="breadcrumbs bg-white w-fit p-2 px-3 text-base">
            <span
              className="italic font-medium cursor-pointer"
              onClick={() => navigate("/")}
            >
              Trang chủ
            </span>
            <span>{" > "}</span>
            <span className="italic font-medium">Điều khoản sử dụng</span>
          </div>
        </div>
        <div
          className="max-w-1310 mx-auto mt-5 bg-white p-4 rounded-lg"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="text-22 text-center font-bold uppercase">
            CHÍNH SÁCH ĐỔI / TRẢ / HOÀN TIỀN
          </div>
          <div className="text-xs text-center uppercase italic text-gray-600 my-3">
            ÁP DỤNG TOÀN BỘ ĐƠN HÀNG QUÝ KHÁCH MUA TẠI BOOKSTORE.COM
          </div>
          <div>
            <div className="text-sm">
              <div>
                Chúng tôi luôn trân trọng sự tin tưởng và ủng hộ của quý khách
                hàng khi trải nghiệm mua hàng tại BookStore. Do đó chúng tôi
                luôn cố gắng hoàn thiện dịch vụ tốt nhất để phục vụ mọi nhu cầu
                mua sắm của quý khách.
              </div>
              <div>
                BookStore chúng tôi luôn luôn cam kết tất cả các sản phẩm bán
                tại BookStore 100% là những sản phẩm chất lượng và xuất xứ nguồn
                gốc rõ ràng, hợp pháp cũng như an toàn cho người tiêu dùng. Để
                việc mua sắm của quý khách tại BookStore là trải nghiệm dịch vụ
                thân thiện, chúng tôi hy vọng quý khách sẽ kiểm tra kỹ các nội
                dung sau trước khi nhận hàng:
              </div>
              <ul className="list-disc pl-7">
                <li>
                  Thông tin sản phẩm: tên sản phẩm và chất lượng sản phẩm.
                </li>
                <li>Số lượng sản phẩm.</li>
              </ul>
              <div>
                Trong trường hợp hiếm hoi sản phẩm quý khách nhận được có khiếm
                khuyết, hư hỏng hoặc không như mô tả, BookStore cam kết bảo vệ
                khách hàng bằng chính sách đổi trả/ hoàn tiền trên tinh thần bảo
                vệ quyền lợi người tiêu dùng nhằm cam kết với quý khách về chất
                lượng sản phẩm và dịch vụ của chúng tôi.
              </div>
            </div>
          </div>
          <div className="pb-4 text-sm">
            <div className="text-lg font-medium my-4">
              Các trường hợp yêu cầu đổi trả
            </div>
            <div className="text-sm">
              <ul className="list-disc pl-7">
                <li>
                  Lỗi kỹ thuật của sản phẩm - do nhà cung cấp (sách thiếu trang,
                  sút gáy, trùng nội dung, sản phẩm điện tử, đồ chơi điện – điện
                  tử không hoạt động..)
                </li>
                <li>
                  Giao nhầm/ giao thiếu (thiếu sản phẩm đã đặt, thiếu phụ kiện,
                  thiếu quà tặng kèm theo)
                </li>
                <li>Chất lượng hàng hóa kém, hư hại do vận chuyển.</li>
                <li>Hình thức sản phẩm không giống mô tả ban đầu.</li>
                <li>
                  Quý khách đặt nhầm/ không còn nhu cầu (*)
                  <div>
                    {" "}
                    (*) Đối với các Sản phẩm không bị lỗi, chỉ áp dụng khi sản
                    phẩm đáp ứng đủ điều kiện sau:
                  </div>
                  <div className="-ml-5">
                    Quý khách có thể trả lại sản phẩm đã mua
                    tại Fahasa.com trong vòng 30 ngày kể từ khi nhận hàng với đa
                    số sản phẩm khi thỏa mãn các điều kiện sau:
                  </div>
                </li>
                <li>
                  Sản phẩm không có dấu hiệu đã qua sử dụng, còn nguyên tem, mác
                  hay niêm phong của nhà sản xuất.
                </li>
                <li>
                  Sản phẩm còn đầy đủ phụ kiện hoặc phiếu bảo hành cùng quà tặng
                  kèm theo (nếu có).
                </li>
                <li>
                  Nếu là sản phẩm điện – điện tử thì chưa bị kích hoạt, chưa có
                  sao ghi dữ liệu vào thiết bị
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-4">
            <div className="text-lg font-medium my-4">Điều kiện đổi trả</div>
            <div className="text-sm">
              <div>BookStore hỗ trợ đổi/ trả sản phẩm cho quý khách nếu:</div>
              <ul className="list-disc pl-7">
                <li>Sản phẩm còn nguyên bao bì như hiện trạng ban đầu.</li>
                <li>
                  Sản phầm còn đầy đủ phụ kiện, quà tặng khuyến mãi kèm theo.
                </li>
                <li>Hóa đơn GTGT (nếu có).</li>
                <li>
                  Cung cấp đầy đủ thông tin đối chứng theo yêu cầu (điều 4).
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-4">
            <div className="text-lg font-medium my-4">Quy trình đổi trả</div>
            <div className="text-sm">
              <ul className="list-disc pl-7">
                <li>
                  Quý khách vui lòng thông tin đơn hàng cần hỗ trợ đổi trả theo
                  Hotline 0989456789 hoặc email về địa
                  chỉ: bookstore.cskh@gmail.com với tiêu đề “Đổi Trả Đơn Hàng "
                  Mã đơn hàng".
                </li>
                <li>
                  Quý khách cần cung cấp đính kèm thêm các bằng chứng để đối
                  chiếu/ khiếu nại sau:
                  <ul>
                    <li>
                      {" "}
                      + Video clip quay rõ các mặt của kiện hàng trước khi khui
                      để thể hiện tình trạng của kiện hàng.
                    </li>
                    <li>
                      {" "}
                      + Video clip mở kiện hàng từ lúc bắt đầu khui ngoại quan
                      đến kiểm tra sản phẩm bên trong thùng hàng.
                    </li>
                    <li>
                      {" "}
                      + Video quay rõ nét , không mờ , nhoè, thể hiện đầy đủ
                      thông tin mã đơn hàng và quay cận cảnh lỗi của sản phẩm.
                    </li>
                    <li> + Hình chụp tem kiện hàng có thể hiện mã đơn hàng.</li>
                    <li>
                      {" "}
                      + Hình chụp tình trạng ngoại quan (băng keo, seal, hình
                      dạng thùng hàng, bao bì), đặc biệt các vị trí nghi ngờ có
                      tác động đến sản phẩm (móp méo, ướt, rách...)
                    </li>
                    <li>
                      {" "}
                      + Hình chụp tình trạng sản phẩm bên trong, nêu rõ lỗi kỹ
                      thuật nếu có.
                    </li>
                  </ul>
                </li>
                <li>
                  Để đảm bảo quyền lợi khách hàng và để Fahasa.com có cơ sở làm
                  việc với các bộ phận liên quan, tất cả yêu cầu đổi/ trả/ bảo
                  hành quý khách cần cung cấp hình ảnh/ clip sản phẩm lỗi. Quá
                  thời gian đổi/ trả sản phẩm nếu chưa nhận được đủ hình ảnh/
                  clip từ quý khách, BookStore xin phép từ chối hỗ trợ.
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-4">
            <div className="text-lg font-medium my-4">
              Cách thức chuyển sản phẩm đổi trả về
            </div>
            <div className="text-sm">
              <ul className="list-disc pl-7">
                <li>
                  Khi yêu cầu đổi trả được giải quyết, quý khách vui lòng đóng
                  gói sản phẩm như hiện trạng khi nhận hàng ban đầu (bao gồm sản
                  phẩm, quà tặng, phụ kiện kèm theo sản phẩm,…nếu có).
                </li>
                <li>Hóa đơn giá trị gia tăng của BookStore (nếu có).</li>
                <li>
                  Phụ kiện đi kèm sản phẩm và quà tặng khuyến mãi kèm theo (nếu
                  có).
                </li>
                <li>
                  Quý khách cần quay video clip đóng gói sản phẩm để làm bằng
                  chứng đối chiếu/ khiếu nại liên quan đến đổi trả về sau (nếu
                  cần).
                </li>
                <li>
                  Quý khách vui lòng chịu trách nhiệm về trạng thái nguyên vẹn
                  của sản phẩm khi gửi về BookStore.
                </li>
                <li>
                  Sau khi nhận được sản phẩm quý khách gởi về, BookStore sẽ phản
                  hồi và cập nhật thông tin trên từng giai đoạn xử lý đến quý
                  khách qua điện thoại/email.
                </li>
              </ul>
            </div>
          </div>

          <div className="pb-4">
            <div className="text-lg font-medium my-4">
              Cách thức chuyển sản phẩm đổi trả về
            </div>
            <div className="text-sm">
              <div>
                Đối với những đơn hàng thanh toán trả trước: sau khi cập nhật
                hủy, thời gian hoàn tiền sẽ tùy thuộc vào phương thức thanh
                toán. Quý khách vui lòng tham khảo thời gian hoàn tiền như sau:
              </div>
              <ul className="list-disc pl-7">
                <li>
                  ATM nội địa/ Cổng Zalo Pay/ Cổng VNPay: 5 - 7 ngày làm việc
                </li>
                <li>Chuyển khoản: 5 - 7 ngày làm việc</li>
                <li>Visa/ Master/ JCB: 5 - 7 ngày làm việc</li>
                <li>Ví Momo/ Moca/Zalopay/ShopeePay: 1 - 3 ngày làm việc</li>
              </ul>
            </div>
            <div className="text-sm">
              <div>LƯU Ý:</div>
              <ul className="list-disc pl-7">
                <li>
                  Đối với thẻ Visa/ Master/ JCB,  số tiền hoàn sẽ được ngân hàng
                  chuyển vào tài khoản quý khách dao động 1-3 tuần làm việc (tùy
                  theo chính sách của từng ngân hàng).
                </li>
                <li>Ngày làm việc không bao gồm thứ 7, chủ nhật và ngày lễ.</li>
                <li>Đối với những đơn hàng trả hàng hoàn tiền:</li>
                <li>
                  Thời gian hoàn tiền được bắt đầu tính kể từ thời điểm
                  BookStore nhận được hàng hoàn trả và xác nhận với quý khách về
                  việc hàng hoàn trả đáp ứng các điều kiện trả hàng được quy
                  định tại chính sách này. Thời gian hoàn tiền tuân thủ theo quy
                  định tại Mục 6 này.
                </li>
                <li>
                  Đối với các đơn hàng hoàn tiền, hình thức thanh toán của quý
                  khách là tiền mặt (COD): BookStore sẽ hoàn tiền qua tài khoản
                  Ngân hàng do quý khách chỉ định.
                </li>
              </ul>
              <div>
                Trong trường hợp đã quá thời gian trên quý khách chưa nhận được
                tiền hoàn, vui lòng liên hệ ngân hàng phát hành thẻ hoặc liên hệ
                bộ phận Chăm sóc khách hàng của BookStore.
              </div>
            </div>
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
