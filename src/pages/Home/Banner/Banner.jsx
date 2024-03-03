import img1 from "../../../assets/images/Banner/62d4f31bfd4c710f03e787d4_home-1-hero-img-1-p-800.png";
const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2  lg:mt-0 mt-8 ">
      <div className="flex justify-center items-center">
        <div>
          <h1 className="text-xl font-sans">45% MEGA SALE OFFER</h1>
          <h6 className="lg:text-6xl text-4xl font-semibold my-6">
            Unique & Stylish Furniture
          </h6>
          <p className="text-lg font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quam
            scelerisque a tincidunt urna. Nisl, quam orci malesuada
          </p>
          <button className="btn bg-black text-white rounded-none mt-8">
            SHOP NOW
          </button>
        </div>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Banner;
