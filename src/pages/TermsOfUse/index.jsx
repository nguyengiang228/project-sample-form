import { useNavigate } from "react-router-dom";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import Policy from "../../containers/Policy";
import "./style.css";

export default function TermsOfUsePage() {
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
          className="max-w-1310 mx-auto mt-5 bg-white p-4 rounded-lg mb-6"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="text-22 text-center font-bold uppercase">
            Điều khoản sử dụng
          </div>
          <div>
            <div className="text-lg font-medium my-4">
              Tài khoản của khách hàng
            </div>
            <div className="text-base">
              <div>
                Khi sử dụng dịch vụ nhà sách Ân Thi, quý khách sẽ cung cấp cho
                chúng tôi thông tin về địa chỉ email, mật khẩu và họ tên để có
                được 1 tài khoản tại đây. Việc sử dụng và bảo mật thông tin tài
                khoản là trách nhiệm và quyền lợi của quý khách khi sử dụng nhà
                sách Ân Thi. Ngoài ra, những thông tin khác trong tài khoản như
                tên tuổi, địa chỉ.... là những thông tin sẽ giúp nhà sách Ân Thi
                phục vụ quý khách tốt nhất. Trong trường hợp thông tin do quý
                khách cung cấp không đầy đủ hoặc sai dẫn đến việc không thể giao
                hàng cho quý khách, chúng tôi có quyền đình chỉ hoặc từ chối
                phục vụ, giao hàng mà không phải chịu bất cứ trách nhiệm nào đối
                với quý khách. Khi có những thay đổi thông tin của quý khách,
                vui lòng cập nhật lại thông tin trong tài khoản tại nhà sách Ân
                Thi. Quý khách phải giữ kín mật khẩu và tài khoản, hoàn toàn
                chịu trách nhiệm đối với tất cả các hoạt động diễn ra thông qua
                việc sử dụng mật khẩu hoặc tài khoản của mình. Quý khách nên đảm
                bảo thoát khỏi tài khoản tại nhà sách Ân Thi sau mỗi lần sử dụng
                để bảo mật thông tin của mình
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="text-lg font-medium my-4">
              Quyền lợi bảo mật thông tin của khách hàng
            </div>
            <div className="text-base">
              <div>
                Khi sử dụng dịch vụ tại website nhà sách Ân Thi, quý khách được
                đảm bảo rằng những thông tin cung cấp cho chúng tôi sẽ chỉ được
                dùng để nâng cao chất lượng dịch vụ dành cho khách hàng của nhà
                sách Ân Thi và sẽ không được chuyển giao cho 1 bên thứ ba nào
                khác vì mục đích thương mại. Thông tin của quý khách tại nhà
                sách Ân Thi sẽ được chúng tôi bảo mật và chỉ trong trường hợp
                pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những thông
                tin này cho các cơ quan pháp luật
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="text-lg font-medium my-4">
              Trách nhiệm của khách hàng khi sử dụng dịch vụ của nhà sách Ân Thi
            </div>
            <div className="text-base">
              <div>
                Quý khách tuyệt đối không được sử dụng bất kỳ công cụ, phương
                pháp nào để can thiệp, xâm nhập bất hợp pháp vào hệ thống hay
                làm thay đổi cấu trúc dữ liệu tại website nhà sách Ân Thi. Quý
                khách không được có những hành động ( thực hiện, cổ vũ) việc can
                thiệp, xâm nhập dữ liệu của nhà sách Ân Thi cũng như hệ thống
                máy chủ của chúng tôi. Ngoài ra, xin vui lòng thông báo cho quản
                trị web của nhà sách Ân Thi ngay khi quý khách phát hiện ra lỗi
                hệ thống theo email support@bookstore.com
              </div>
              <div>
                Quý khách không được đưa ra những nhận xét, đánh giá có ý xúc
                phạm, quấy rối, làm phiền hoặc có bất cứ hành vi nào thiếu văn
                hóa đối với người khác. Không nêu ra những nhận xét có tính
                chính trị (tuyên truyền, chống phá, xuyên tạc chính quyền), kỳ
                thị tôn giáo, giới tính, sắc tộc....Tuyệt đối cấm mọi hành vi
                mạo nhận, cố ý tạo sự nhầm lẫn mình là một khách hàng khác hoặc
                là thành viên Ban Quản Trị nhà sách Ân Thi.
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="text-lg font-medium my-4">
              Trách nhiệm và quyền lợi của nhà sách Ân Thi
            </div>
            <div className="text-base">
              <div>
                Trong trường hợp có những phát sinh ngoài ý muốn hoặc trách
                nhiệm của mình, nhà sách Ân Thi sẽ không chịu trách nhiệm về mọi
                tổn thất phát sinh. Ngoài ra, chúng tôi không cho phép các tổ
                chức, cá nhân khác quảng bá sản phẩm tại website nhà sách Ân Thi
                mà chưa có sự đồng ý bằng văn bản từ nhà sách Ân Thi
                Corporation. Các thỏa thuận và quy định trong Điều khoản sử dụng
                có thể thay đổi vào bất cứ lúc nào nhưng sẽ được nhà sách Ân Thi
                Corporation thông báo cụ thể trên website nhà sách Ân Thi.
              </div>
            </div>
          </div>
        </div>
        <Policy />
      </div>

      <Footer />
    </div>
  );
}
