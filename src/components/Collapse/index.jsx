import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../../assets/arrow-down2.png";
import ArrowR from "../../assets/arrow-r.png";
import ArrowUp from "../../assets/arrow-up.png";

export default function Collapse({
  label,
  values = []
}) {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false)

  const navigate = useNavigate();

  return (
    <div className="text-black px-6 pb-5" style={{
      fontSize: "17px"
    }}>
      <div className="flex justify-between items-center px-5" onClick={() => setShow(!show)} style={{
        height: "45px",
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
      }}>
        <div className="text-primary"> {label} </div>
        {!show && <div><img src={ArrowDown} alt="" /></div>}
        {show && <div><img src={ArrowUp} alt="" /></div>}
      </div>
      {show && (
        <div className="">
          {values?.map(x => (
            <div className="flex justify-between items-center px-5" key={x} style={{
              height: "45px",
              boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
              marginLeft: "25px",
              marginTop: "18px"
            }}
              onClick={() => navigate('/danh-muc-san-pham')}
            >
              <div>{x}</div>
              <div><img src={ArrowR} alt="" /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}