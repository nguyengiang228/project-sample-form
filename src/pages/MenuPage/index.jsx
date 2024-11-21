import { useNavigate } from "react-router-dom";
import Back from "../../assets/ep_back.png";
import Collapse from "../../components/Collapse";
import Header from "../../containers/Header";

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <div className="m_pb_footer">
      <div className="desktop_only">
        <Header />
      </div>
      <div className="mobile_only text-center text-22 text-white py-5 relative mb-6" style={{
        backgroundColor: "#00AB9F"
      }}>
        <img src={Back} className="absolute top-6 left-6 text-white" alt="" onClick={() => navigate('/')} />
        DANH MỤC SẢN PHẨM
      </div>

      <Collapse label={'Sách văn học'} values={["Tiểu thuyết", "Truyện ngắn - Tản Văn", "Light Novel", "Ngôn tình"]} />
      <Collapse label={'Sách kinh tế'} values={["Quản trị - Lãnh đạo", "Phân tích kinh tế", "Nhân vật - việc làm", "Tài chính", "Bất động sản"]} />
      <Collapse label={'Sách văn học'} values={["Kỹ năng sống", "Tâm lý", "Hướng nghiệp & phát triển bản thân", "Rèn luyện nhân cách", "Sách cho tuổi mới lớn"]} />
      <Collapse label={'Sách thiếu nhi'} values={["Tiểu thuyết", "Truyện ngắn - Tản Văn", "Light Novel", "Ngôn tình"]} />
      <Collapse label={'Sách khoa học kỹ thuật'} values={["Tiểu thuyết", "Truyện ngắn - Tản Văn", "Light Novel", "Ngôn tình"]} />
      <Collapse label={'Sách tiểu sử - hồi ký'} values={["Tiểu thuyết", "Truyện ngắn - Tản Văn", "Light Novel", "Ngôn tình"]} />
      <Collapse label={'Sách nước ngoài'} values={["Tiểu thuyết", "Truyện ngắn - Tản Văn", "Light Novel", "Ngôn tình"]} />
    </div>
  );
}
