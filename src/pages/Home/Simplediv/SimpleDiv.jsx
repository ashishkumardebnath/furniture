import img1 from "../../../assets/images/SimplwDiv/1.png";
import img2 from "../../../assets/images/SimplwDiv/2.png";
import img3 from "../../../assets/images/SimplwDiv/3.png";
import img4 from "../../../assets/images/SimplwDiv/4.png";
import img5 from "../../../assets/images/SimplwDiv/5.png";
const SimpleDiv = () => {
  return (
    <div className="flex overflow-hidden space-x-20 ">
      <div className="flex space-x-20 animate-loop-scroll ">
        <img loading="lazy" className="max-w-none" src={img1} alt="" />
        <img loading="lazy" className="max-w-none" src={img2} alt="" />
        <img loading="lazy" className="max-w-none" src={img3} alt="" />
        <img loading="lazy" className="max-w-none" src={img4} alt="" />
        <img loading="lazy" className="max-w-none" src={img5} alt="" />
      </div>
      <div className="flex space-x-20 animate-loop-scroll " aria-hidden="true">
        <img loading="lazy" className="max-w-none" src={img1} alt="" />
        <img loading="lazy" className="max-w-none" src={img2} alt="" />
        <img loading="lazy" className="max-w-none" src={img3} alt="" />
        <img loading="lazy" className="max-w-none" src={img4} alt="" />
        <img loading="lazy" className="max-w-none" src={img5} alt="" />
      </div>
    </div>
  );
};

export default SimpleDiv;
