import img from "../../../assets/images/Contact/62f384bcb878d60c8e567610_breadcrumb-image-2.png";
import img1 from "../../../assets/images/Contact/62d77f2456c60b6749b598e8_banner-style-3.jpg";
const Contact = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:gap-10  mt-16 mb-40">
        <div className="flex justify-center items-center">
          <div>
            <h5 className="text-5xl font-semibold">Contact us</h5>
            <p className="font-sans mt-5 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing scelerisque a
              tincidunt urna nisl quam orci males
            </p>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-5xl font-semibold text-center">Connect with us</h5>
        <p className="font-sans mt-5 text-gray-500 text-center">
          Let’s talk about this website or project. Send us a message <br /> and
          we will be in touch within one work day
        </p>
        <div className="lg:flex justify-around mt-8">
          <div>
            <h2 className="text-2xl font-semibold text-center mb-3">Address</h2>
            <p className="font-sans text-center">
              256, Central City, Borlex House
            </p>
            <p className="font-sans text-center">Main town, New York, USA</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center mb-3">Phone</h2>
            <p className="font-sans text-center">880(12) 1254 2584</p>
            <p className="font-sans text-center">880(12) 1254 2584</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-center mb-3">Phone</h2>
            <p className="font-sans text-center">blueboyashish2020@gmail.com</p>
            <p className="font-sans text-center">www.dream-developer.com</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 mt-36">
        <form>
          <h5 className="text-5xl font-semibold mb-9">Leave a comments</h5>

          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Name*"
              className="input input-bordered w-full bg-gray-50 max-w-xs"
            />
            <input
              type="text"
              placeholder="Email*"
              className="input input-bordered w-full bg-gray-50 max-w-xs"
            />
          </div>
          <div className="flex gap-5 my-5">
            <input
              type="text"
              placeholder="Phone*"
              className="input input-bordered w-full bg-gray-50 max-w-xs"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full bg-gray-50 max-w-xs"
            />
          </div>
          <textarea
            placeholder="Comment*"
            className="textarea textarea-bordered textarea-lg bg-gray-50 w-full "
          ></textarea>

          <button className="btn bg-black rounded-none  font-sans px-6 text-base mt-5">
            SUBMIT
          </button>
        </form>
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
      </div>
    </div>
  );
};

export default Contact;
