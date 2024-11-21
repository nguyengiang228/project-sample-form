import { useNavigate } from "react-router-dom";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

import BottomNavigation from "../../containers/BottomNavigation";
import Policy from "../../containers/Policy";
import "./style.css";

export default function IntroducationPage() {
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="m_pb_footer">
      <div className="desktop_only">
        <Header />
      </div>
      <div className="mobile_only text-center text-22 text-white py-5" style={{
        backgroundColor: "#00AB9F"
      }}>
        Giới thiệu về BookStore
      </div>
      <div className="bg_body py-6 m-bg-white">
        <div className="max-w-1310 mx-auto mb-2 desktop_only">
          <div className="breadcrumbs bg-white w-fit p-2 px-3 text-base">
            <span
              className="italic font-medium cursor-pointer"
              onClick={() => navigate("/")}
            >
              Trang chủ
            </span>
            <span>{" > "}</span>
            <span className="italic font-medium">Giới thiệu BookStore</span>
          </div>
        </div>
        <div
          className="max-w-1310 mx-auto md:mt-5 bg-white p-4 rounded-lg"
          style={{
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className="text-22 md:text-center md:font-bold md:uppercase">
            Giới thiệu BookStore
          </div>
          <div>
            <div className="text-lg font-medium my-4">
              Giới thiệu về hàng hoá
            </div>
            <div className="text-base">
              <div>
                Nhà sách BookStore chuyên kinh doanh: sách quốc văn, ngoại văn,
                văn hóa phẩm, văn phòng phẩm, dụng cụ học tập, quà lưu niệm, đồ
                chơi dành cho trẻ em… Một số Nhà sách trực thuộc Nhà sách
                BookStore còn kinh doanh các mặt hàng siêu thị như: hàng tiêu
                dùng, hàng gia dụng, hóa mỹ phẩm…
              </div>
              <div>
                Sách quốc văn với nhiều thể loại đa dạng như sách giáo khoa -
                tham khảo, giáo trình, sách học ngữ, từ điển, sách tham khảo
                thuộc nhiều chuyên ngành phong phú: văn học, tâm lý - giáo dục,
                khoa học kỹ thuật, khoa học kinh tế - xã hội, khoa học thường
                thức, sách phong thủy, nghệ thuật sống, danh ngôn, sách thiếu
                nhi, truyện tranh, truyện đọc, từ điển, công nghệ thông tin,
                khoa học - kỹ thuật, nấu ăn, làm đẹp... của nhiều Nhà xuất bản,
                nhà cung cấp sách có uy tín như: NXB Trẻ, Giáo Dục, Kim Đồng,
                Văn hóa -Văn Nghệ, Tổng hợp TP.HCM, Chính Trị Quốc Gia; Công ty
                Đông A, Nhã Nam, Bách Việt, Alphabook, Thái Hà, Minh Lâm, Đinh
                Tị, Minh Long, TGM, Sáng Tạo Trí Việt, Khang Việt, Toàn Phúc…
              </div>
              <div>
                Sách ngoại văn bao gồm: từ điển, giáo trình, tham khảo, truyện
                tranh thiếu nhi , sách học ngữ, từ vựng, ngữ pháp, luyện thi
                TOEFL, TOEIC, IELS…được nhập từ các NXB nước ngoài như:
                Cambridge, Mc Graw-Hill, Pearson Education, Oxford, Macmillan,
                Cengage Learning…
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="text-lg font-medium my-4">
              Hệ thống nhà sách chuyên nghiệp
            </div>
            <div className="text-base">
              <div>
                Mạng lưới phát hành của Nhà sách BookStore rộng khắp trên toàn
                quốc, gồm 5 Trung tâm sách, 1 Xí nghiệp in và với gần 60 Nhà
                sách trải dọc khắp các tỉnh thành từ TP.HCM đến Thủ Đô Hà Nội,
                miền Trung, Tây Nguyên, miền Đông và Tây Nam Bộ như: Hà Nội,
                Vĩnh Phúc, Hải Phòng, Thanh Hóa, Hà Tĩnh, Huế, Đà Nẵng, Quảng
                Nam, Quảng Ngãi, Quy Nhơn, Nha Trang, Gia Lai, Đăklăk, Bảo Lộc -
                Lâm Đồng, Ninh Thuận, Bình Thuận, Bình Phước, Bình Dương, Đồng
                Nai, Vũng Tàu, Long An, Tiền Giang, Bến Tre, Vĩnh Long, Cần Thơ,
                Hậu Giang, An Giang, Kiên Giang, Sóc Trăng, Cà Mau.
              </div>
              <div>
                Năm 2004 Công ty đã được Cục Sở hữu Trí tuệ Việt Nam công nhận
                sở hữu độc quyền tên thương hiệu FAHASA.
              </div>
              <div>
                Năm 2005, Công ty FAHASA được Trung tâm sách kỷ lục Việt Nam
                công nhận là đơn vị có hệ thống Nhà sách nhiều nhất Việt Nam;
                được Tạp chí The Guide công nhận Nhà sách Xuân Thu - đơn vị trực
                thuộc Nhà sách BookStore là Nhà sách Ngoại văn đẹp nhất, lớn
                nhất, quy mô nhất, nhiều sách nhất ở Thành phố Hồ Chí Minh và cả
                nước.
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="text-lg font-medium my-4">
              Kinh nghiệm hoạt động
            </div>
            <div className="text-base">
              <div>
                Là đơn vị có gần 40 năm kinh doanh và phục vụ xã hội, nên
                BookStore đã tích lũy được nhiều kinh nghiệm trong việc nghiên
                cứu thị trường, phân tích tài chính, định hướng phát triển,
                hoạch định chiến lược kinh doanh và khả năng tiếp thị giỏi… Đồng
                thời BookStore còn có nhiều kinh nghiệm trong việc tổ chức các
                cuộc Hội thảo, Triển lãm và giới thiệu sách quốc văn, ngoại văn
                với qui mô lớn, ấn tượng.
              </div>
              <div>
                BookStore luôn là đơn vị đi tiên phong trong nhiều hoạt động xã
                hội, điển hình là việc tham gia tổ chức các Hội sách ở TP.HCM
                như: Hội sách Thành Phố Hồ Chí Minh, Hội sách Thiếu nhi ngoại
                thành, Hội sách Mùa khai trường, Hội sách Học đường, Hội sách
                Trường Quốc tế… Nổi bật nhất là Hội sách Thành Phố Hồ Chí Minh,
                được định kỳ tổ chức 2 năm một lần. Đây là Hội sách có qui mô
                lớn, tầm ảnh hưởng rộng, đã để lại ý nghĩa kinh tế, văn hóa và
                xã hội sâu sắc. Hội sách không chỉ là nơi hội tụ văn hóa lý
                tưởng đối với người dân TP.HCM mà còn là một thông điệp văn hóa
                tôn vinh cho các hoạt động Xuất bản – Phát hành sách cả nước,
                nâng tầm cho việc giao lưu, trao đổi văn hóa với bạn bè thế
                giới, đồng thời góp phần đem sách - tri thức đến gần hơn với mọi
                tầng lớp nhân dân, phục vụ tốt hơn nhu cầu văn hóa tinh thần của
                xã hội
              </div>
            </div>
          </div>
        </div>
        <Policy />
      </div>

      <div className="desktop_only">
        <Footer />
      </div>
      <BottomNavigation active={"intro"} />
    </div>
  );
}
