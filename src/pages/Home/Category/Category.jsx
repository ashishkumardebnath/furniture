import { Link } from "react-router-dom";
import img1 from "../../../assets/images/Category/1.png";
import img2 from "../../../assets/images/Category/2.png";
import img3 from "../../../assets/images/Category/3.png";
import img4 from "../../../assets/images/Category/4.png";
import img5 from "../../../assets/images/Category/5.png";
import img6 from "../../../assets/images/Category/6.png";
const Category = () => {
  return (
    <div>
      <h5 className="lg:text-5xl text-3xl font-semibold text-center mb-4">
        Choose Your Category
      </h5>
      <p className="text-gray-500 font-sans text-center">
        Select your product from our category options
      </p>
      <div className="grid lg:grid-cols-6 grid-cols-2 lg:gap-0 gap-6 lg:px-40 mt-12">
        <div className="bg-gray-100 lg:w-32  lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img1} alt="" />
          </Link>
        </div>
        <div className="bg-gray-100 lg:w-32 lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img2} alt="" />
          </Link>
        </div>
        <div className="bg-gray-100 lg:w-32 lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img3} alt="" />
          </Link>
        </div>
        <div className="bg-gray-100 lg:w-32 lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img4} alt="" />
          </Link>
        </div>
        <div className="bg-gray-100 lg:w-32 lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img5} alt="" />
          </Link>
        </div>
        <div className="bg-gray-100 lg:w-32 lg:h-32 lg:py-0 py-10 flex justify-center items-center hover:shadow-2xl">
          <Link>
            <img src={img6} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
