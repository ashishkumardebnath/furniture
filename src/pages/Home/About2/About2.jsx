import img1 from "../../../assets/images/About2/62d922aaf5ad6be4aa4485e1_banner 03.png";
import icon1 from "../../../assets/images/About2/1.svg";
import icon2 from "../../../assets/images/About2/2.svg";
import icon3 from "../../../assets/images/About2/3.svg";
import icon4 from "../../../assets/images/About2/4.svg";
const About2 = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-28">
      <div>
        <h5 className="lg:text-5xl text-4xl font-semibold mb-8">
          Why We are the Best?
        </h5>
        <p className="font-sans text-gray-500 font-medium mb-12">
          Features that we have which Lorem ipsum dolor sit amet, consectetur
          convallis. Arcu, egestas nec scelerisque mi. Augue proin
        </p>
        <div className="grid lg:grid-cols-2 gap-8 gap-y-16">
          <div className="lg:flex gap-3 lg:space-y-0 space-y-5">
            <img className="-mt-3" src={icon1} alt="" />
            <div>
              <h2 className="text-2xl font-semibold">Free Shipping</h2>
              <p className="font-sans text-gray-500">
                Buy product over $100 and get free home delivery offer
              </p>
            </div>
          </div>
          <div className="lg:flex gap-3 lg:space-y-0 space-y-5">
            <img className="-mt-3" src={icon2} alt="" />
            <div>
              <h2 className="text-2xl font-semibold">Easy Return Policy</h2>
              <p className="font-sans text-gray-500">
                Provide 30 day easy Return policy for all of our customer
              </p>
            </div>
          </div>
          <div className="lg:flex gap-3 lg:space-y-0 space-y-5">
            <img className="-mt-3" src={icon3} alt="" />
            <div>
              <h2 className="text-2xl font-semibold">Secure Payment</h2>
              <p className="font-sans text-gray-500">
                We conform you that payment system are totally secure
              </p>
            </div>
          </div>
          <div className="lg:flex gap-3 lg:space-y-0 space-y-5">
            <img className="-mt-3" src={icon4} alt="" />
            <div>
              <h2 className="text-2xl font-semibold">Best Quality</h2>
              <p className="font-sans text-gray-500">
                We never compromize about our quality and always concern
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img src={img1} alt="Image" className="w-full h-auto" />
          <div className="absolute inset-0 lg:pt-16 pt-4 lg:ps-16 ps-4">
            <p className="text-white text-lg font-sans">
              MEGA SALE <span className=" font-bold ">UPTO 75%</span>
            </p>
            <h4 className="text-4xl font-semibold text-white lg:mt-3 lg:mb-3 lg:my-0 my-3">
              Fancy Sofa set
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
    </div>
  );
};

export default About2;
