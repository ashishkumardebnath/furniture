import { Link } from "react-router-dom";
import img1 from "../../../assets/images/Showcase/1.jpg";
import img2 from "../../../assets/images/Showcase/2.jpg";
import img3 from "../../../assets/images/Showcase/3.jpg";
import img4 from "../../../assets/images/Showcase/4.jpg";
import img5 from "../../../assets/images/Showcase/5.jpg";
const Showcase1 = () => {
  return (
    <div className="lg:px-14 space-y-8 lg:mb-28 mb-16">
      <div className="lg:flex lg:space-y-0 space-y-4 justify-between">
        <div className="relative">
          <img src={img1} alt="Image" className=" lg:h-auto w-full" />
          <div className="absolute inset-0 lg:mt-72 mt-96 mx-5">
            <h2 className=" text-2xl font-semibold">Drawers</h2>
            <Link className="underline text-lg">View All</Link>
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="Image" className=" h-auto" />
          <div className="absolute inset-0 lg:ms-80 ms-5 text-black  lg:mt-16 mt-5">
            <p className=" font-sans">
              START FROM <span className=" font-bold ">$165</span>
            </p>
            <h2 className=" text-2xl font-semibold my-2">
              New Bed Collections
            </h2>
            <Link className="underline text-lg">View All</Link>
          </div>
        </div>
        <div className="relative">
          <img src={img3} alt="Image" className=" h-auto w-full" />
          <div className="absolute inset-0 lg:mt-72 mt-96 ms-14 ">
            <h2 className=" text-2xl font-semibold">Carenchy Sofa</h2>
            <Link className="underline text-lg">View All</Link>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:space-y-0 space-y-4 justify-between">
        <div className="relative">
          <img src={img4} alt="Image" className=" h-auto" />
          <div className="absolute inset-0 mt-12">
            <p className=" font-sans text-center">
              MEGA SALE <span className=" font-bold ">65% OFF</span>
            </p>
            <h2 className=" text-2xl font-semibold my-2 text-center">
              New Sofa Collections
            </h2>
            <div className="flex justify-center">
              <Link className="underline text-lg ">View All</Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img5} alt="Image" className=" h-auto" />
          <div className="absolute inset-0 mt-10 me-6">
            <p className=" font-sans text-end">
              MEGA SALE <span className=" font-bold ">65% OFF</span>
            </p>
            <h2 className=" text-2xl font-semibold my-2 text-end">
              New Sofa Collections
            </h2>
            <div className="flex justify-end">
              <Link className="underline text-lg ">View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase1;
