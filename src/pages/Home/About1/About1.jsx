import img1 from "../../../assets/images/About1/62d5445434f182fe9eb22b0e_banner-style-1.jpg";
import img2 from "../../../assets/images/About1/62d544ae869dc4bb99a2edd4_banner-style-2.png";
const About1 = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:mb-28 mb-12">
      <div>
        <div className="relative">
          <img src={img1} alt="Image" className="w-full h-auto" />
          <div className="absolute inset-0 lg:pt-16 pt-4 lg:ps-16 ps-4">
            <p className="text-white lg:text-lg font-sans">
              NEW <span className=" font-bold ">COLLECTIONS</span>
            </p>
            <h4 className="lg:text-4xl text-2xl font-semibold text-white lg:mt-3 lg:mb-3">
              Accent Leisure <br /> Chairs
            </h4>
            <p className="font-sans text-gray-400">
              Lorem ipsum dolor sit amet, consectetur <br /> scelerisque a
              tincidunt urna quam
            </p>
            <button className="btn bg-white rounded-none font-sans lg:mt-8 mt-2">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-sans text-gray-500 text-center mt-5">
          UP TO <span className="text-red-500 underline">20% OFF</span>
        </p>
        <h4 className="text-4xl font-semibold text-center my-3">
          Modern & Minimal
        </h4>
        <p className="font-sans text-gray-500 text-center mb-4">
          Don’t miss avail the saving opportunity
        </p>
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default About1;
